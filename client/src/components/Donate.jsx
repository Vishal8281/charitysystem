import React, { useContext } from "react";
import '../App.css';
import { Fade } from 'react-reveal';
import { TransactionContext } from "../context/TransactionContext";
import { short } from '../utils/short'
import { Loader } from '.';
import { Link } from "react-router-dom";




const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border-none text-sm bg-[#FFFFFF]"
    />
);
const Donate = () => {



    const { ConnectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    // console.log(value);

    // const ConnectWallet = () => {

    // }

    const handleSubmit = (e) => {

        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }
    return (
        
            <div className="flex w-full h-full justify-center items-center" id="donate">
                    <div>
            <Link to="/home" className="bg-[#006400] text-white w-30 mt-3  border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">Back</Link>
        </div>
                <div className=' flex w-flex-row flex-col items -start justify-betwee md:p-20 py-12 px-4  '></div>
                <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
                    <Fade bottom duration={2000} distance="200px">
                        <h1 className="text-3xl sm:text-5xl text-whit text-bold  py-1">
                            Donate to Farmers
                        </h1>
                    </Fade>
                    {!currentAccount && (
                        <button type="button" onClick={ConnectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#00BFFF] p-3 rounded-full cursor-pointer hover:bg-[#295289] ">

                            <p className='text-black font-semibold text-base '>
                                Connect Wallet
                            </p>
                        </button>
                    )}


                </div>

                <div className='flex flex-col flex-1 item-center justify-start w-full md:mt-0 mt-10 '>
                    <div className='p-3 justify-end items-start rounded-xl h-25 sm:w-80 w-full my-5 eth-card bg-[#9ACD32] '>
                        <div className='flex justify-between flex-col w-full h-full border-[#3d4f7c] '>
                            {currentAccount ? (
                                <h3 className='text-black text-1xl text-center ny-2'> connected wallet address: </h3>
                            ) : (
                                <h3 className='text-black text-2xl  text-center ny-2'>connect your wallet to see latest account</h3>

                            )}

                            {/* <p className="text-black font-bold"> connected wallet address:</p> */}
                            <p className="text-black font-semibold">{short(currentAccount)}</p>

                        </div>
                    </div >
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-[#F0E68C] ">
                        <Input placeholder="Address To" name="addressTo" type="Text" handleChange={handleChange} />
                        <Input placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="Text" handleChange={handleChange} />

                        <div className=" w-full  my-2">

                            {isLoading ? (
                                <Loader />
                            ) : (
                                <button type="button" onClick={handleSubmit}
                                    className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer"
                                > Donate
                                </button>
                            )}

                        </div>
                        <Link to="/history" >Transactin history</Link>
                    </div>


                </div>


            </div>
        
        


    );
}

export default Donate;

