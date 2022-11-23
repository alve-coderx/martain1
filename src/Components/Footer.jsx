import { Disclosure } from '@headlessui/react'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between mt-20 mb-80 px-5'>
            <div className='text-left text-slate-500 font-[500]'>
                <p className='py-1'>PRIVACY POLICY</p>
                <p className='py-1'>SUPPORT</p>
                <p className='py-1'>TERMS</p>
                <p className='py-1'>FAQ</p>
            </div>
            <div className='text-center text-slate-500 font-[500]'>
                <p className='py-1'>TWITTER</p>
                <p className='py-1'>MEDIUM</p>
                <p className='py-1'>DISCORD</p>
                <p className='py-1'>LINKEDIN</p>
            </div>
            <div className='text-right text-slate-500 font-[500]'>
                <p className='py-1'>DOCS</p>
                <p className='py-1'>MEDIUMAPTOS</p>
                <p className='py-1'>DOWNLOAD</p>
            </div>
        </div>
    )
}

export default Footer