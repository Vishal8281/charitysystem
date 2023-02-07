import react, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { db } from "../fire";
import {
    collection,
    getDocs,
    doc,
} from "firebase/firestore";
import '../App.css';

const Dcause = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div id="cause">
            <br/>

            <Link to="/home" className="bg-[#006400] text-white w-40 mt-8 mr-3 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">Home</Link>

            <br />
            <br />

            
            {users.map((user) => {
                return (
                    <div className='bg-[#F8F8FF] m-4 flex flex-1
                      2xl:min-w-[450px]
                          2xl:min-w-[500px]
                       flex-col p-3 rounded-md hover:shadow-2xl'>
  
                        <p>Name: {user.name}</p>
                        <p>Amount: {user.amount}</p>
                        <p>Cause:{user.cause}</p>
                        <p> Wallet address:{user.address}</p>
                        <button>
                        <Link to="/donate" className="bg-[#006400] text-white w-40 mt-8 mr-3 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">Donate </Link>
                       </button>
                      
                    </div>
                );
            })}
        </div>
    )
}
export default Dcause;