import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import {  Link } from "react-router-dom";
import "../App"
import { short } from '../utils/short'

const TransactionCard = ({ addressTo, addressFrom, timestamp, amount, message }) => {
    return (
        <div className='bg-[#FFFFFF] m-4 flex flex-1
         2xl:min-w-[450px]
        2xl:min-w-[500px]
      flex-col p-3 rounded-md hover:shadow-2xl'>
            <div className='="flex flex-col item-center w-full mt-3'>
                <div className=' w-full mb-6 p-2'>
                    <a
                        href={`https://rinkeby.etherscan.io/address/${addressFrom}`}
                        target="_blink">
                        <p className="text-black text-base">From:{short(addressFrom)}</p>
                    </a>
                    <a
                        href={`https://rinkeby.etherscan.io/address/${addressTo}`}
                        target="_blink">
                        <p className="text-black text-base">To:{short(addressTo)}</p>
                    </a>
                    <p className="text-black text-base">Amount:{amount}</p>
                    <p className="text-black text-base">Message:{message}</p>
                    <p className="text-black text-base">{timestamp}</p>

                </div>
            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext)
    return (
       
        <div id='trans'>
            <br/>
            <Link to="/home" className="bg-[#006400] text-white w-30 mt-3  border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">Home</Link>
            
            <div className=' flex flex=col md:p-12 py-20 px-4 '>
                {currentAccount ? (
                    <h3 className='text-black text-3xl text-center ny-2'>Donation History  </h3>
                ) : (
                    <h3 className='text-black text-3xl text-center ny-2'>connect your account to see latest donations</h3>

                )}

                <div className='flex flex-wrap justify-center items-center mt-10 w-[30%] '>
                    {[transactions.map((transactions, i) => (
                        <TransactionCard key={i} {...transactions} />
                    ))]}

                </div>
            </div>
            
        </div>
    );
}

export default Transactions;

