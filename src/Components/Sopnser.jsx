import React from 'react'
import move from '../assets/movr.PNG'
import sui from '../assets/sui.PNG'
import apa from '../assets/apa.PNG'
import ScrollAnimation from 'react-animate-on-scroll';

const Sopnser = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <div className='my-28'>
                <div className='flex flex-col items-center'>
                    <img src={move} />
                    <p className='text-[#afafaf] lg:w-[40rem] text-xl text-center my-4'>The next generation language for blockchain application development is here. Move is a safe and reliable language that developers love to build on. It’s as smooth as eating cotton candy.</p>
                </div>
                <div className='lg:flex justify-around my-16'>
                    <div className='flex flex-col items-center my-10'>
                        <img src={sui} />
                        <p className='text-[#afafaf] lg:w-[30rem] w-80 text-xl text-center my-5'>Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3.</p>
                        <button className='border border-black rounded-lg px-10 py-4'>LEARN MORE</button>
                    </div>
                    <div className='flex flex-col items-center my-10'>
                        <img src={apa} />
                        <p className='text-[#afafaf] lg:w-[30rem] w-80 text-xl text-center my-5'>The most safe and scalable Layer1 blockchain for the next 1 Billion crypto users. The Block-STM approach enables fast transactions with sub second finality at extremely low gas fees.</p>
                        <button className='border border-black rounded-lg px-10 py-4'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </ScrollAnimation>

    )
}

export default Sopnser