import React,{useContext} from  "react";
import { Fade } from 'react-reveal';

import './Combined.css';

import { useNavigate } from "react-router";
import { TransactionContext } from "../context/TransactionContext";

const home = () => {

  const { logOut } = useContext(TransactionContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
  

      
      <div className="home">
          <button type= 'button' onClick={handleLogout} className="bg-[#006400] text-white w-30 mt-3 ml-10 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">
              Log out
            </button>
     
        <Fade bottom duration={2000} distance="100px">
          <div className="component-content">
            <h1>Invest in a regenerative future.</h1>
            <h3>Your donation will create a ripple
            effect of regeneration supporting the health of our nation’s soil, food,
  people and planet..</h3>
            {/* <Donate/> */}
          </div>
        </Fade>
        
      </div>
     
    
     
  )
}

export default home;


