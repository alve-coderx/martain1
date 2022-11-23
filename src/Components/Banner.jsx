import React from 'react'
import frm from '../assets/frm.png';
import acc from '../assets/acc.png';
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
            <div className='flex flex-col lg:items-start md:items-start items-center lg:text-left md:text-left text-center items-center lg:my-32 mt-16'>
                <p className='leading-none lg:text-[5.125rem] text-[3.5rem] font-[500]'>Self-Custodial <br /> wallet for the Move <br /> ecosystem</p>
                <p className='text-[#afafaf] text-lg'>Use Martian to store, send, receive tokens and <br /> manage & mint NFTs in a secure and friendly way.<br /> Currently supports Aptos & Sui.</p>
                <div className="my-8 flex">
                    <NavLink to='/connectwallet'><button className=' bg-black border-white text-white custom-btn btndark-3 w-48 px-4 py-2'><span>CONNECT WALLET</span></button></NavLink>
                    <button className='mx-2 custom-btn btn-3 w-44 p-2'><span>VIEW DOCS</span></button>
                </div>
                <p className='text-[#afafaf] text-lg'>Available on Chrome, iOS and Google Play coming soon!</p>
            </div>
            <div className='ml-20'>
                <div className='w-52 lg:w-80 -translate-x-32 absolute shadow-xl'><img src={frm}/></div>
                <div className='w-52 lg:w-80 translate-x-10 translate-y-10 shadow-xl'><img src={acc}/></div>
            </div>
        </div>
    )
}

export default Banner