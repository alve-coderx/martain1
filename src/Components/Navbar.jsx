import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import Logo from './Logo'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50" style={{ backgroundColor: "rgba(250, 250, 250)" }}>
      <div className="py-5 px-5 lg:px-40 ">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <NavLink to='/'>
              <div >
                <Logo />
              </div>
            </NavLink>
            {
              !mobileMenuOpen ?
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <AiOutlineMenu className='text-black' />
                  </button>
                </div>
                :
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <AiOutlineClose className='text-black' />
                </button>
            }
            <div className="hidden lg:flex items-center lg:gap-x-5">
              <NavLink to='/' className="text-[12px] cursor-pointer font-semibold shadow-[#E8296F]">
                HOME
              </NavLink>
              <p className="text-[12px] cursor-pointe shadow-[#E8296F]">
                DOCS
              </p>
              <NavLink to='/' className="text-[12px] cursor-pointer shadow-[#E8296F]">
                DISCORD
              </NavLink>
              <p className="text-[12px] cursor-pointer shadow-[#E8296F]">
                TWITER
              </p>
              <p className="text-[12px] cursor-pointer shadow-[#E8296F]">
                FAG
              </p>

            </div>
            <NavLink to='/connectwallet' className='lg:block hidden'>
              <button className='custom-btn btn-3 w-44 p-2 '><span>Connect Wallet</span></button>
            </NavLink>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">

              <div className="mt-6 p-5 flow-root glass rounded-lg">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <NavLink to='/' className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-black hover:bg-gray-400/10">
                      Home
                    </NavLink>
                    <p className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-black hover:bg-gray-400/10">
                      Chart
                    </p>
                    <NavLink to='/' className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-black hover:bg-gray-400/10">
                      Staking
                    </NavLink>
                    <p className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-black hover:bg-gray-400/10">
                      Whitepaper
                    </p>
                    <NavLink to='/connectwallet'>
                      <button className='custom-btn btn-3 w-44 p-2'><span>Connect Wallet</span></button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
