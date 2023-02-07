import React,{useState} from "react";
import './Combined.css';
import { db } from "../fire";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";





const ContactUsForm = () => {

  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [newCause, setNewCause] = useState("")
  const [newAddress, setNewAddress] = useState("")


  // const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, amount: Number(newAmount) ,cause:newCause ,address:newAddress });
  };



  return (
    <>
      {/* <p style={{padding:"5px"}} className="font-bold text-2xl">
        Create cause
      </p> */}
      
      <div className='flex flex-1 justify-start items-start flex-col mf:ml-10'>
      <p style={{padding:"5px"}} className="font-bold text-2xl">
        Create cause
      </p>
      </div>
      <div className="p-5 sm:w-120 w-full flex flex-col justify-start items-center bg-[#F0E68C]">
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="Name"
            placeholder="Name"
            type="text"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="Amount"
            placeholder="Amount"
            type="text"
            onChange={(event) => {
              setNewAmount(event.target.value);
            }}
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label=" Cause"
            placeholder="Your Cause"
            type="text"
            onChange={(event) => {
              setNewCause(event.target.value);
            }}
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="address"
            placeholder="Your wallet address"
            type="text"
            onChange={(event) => {
              setNewAddress(event.target.value);
            }}
          />
        </div>
        <div className=" w-full  my-2"  >
          <button  type="button" className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer" onClick={createUser}>Create</button>
        </div>
        <div>
        <Link to="/cause" className="flex ">Farmers cause</Link>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm 


