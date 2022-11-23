import React from 'react'
import apa from '../assets/apa.PNG'
import jump from '../assets/jump.PNG'
import race from '../assets/race.PNG'
import scryt from '../assets/scyrp.PNG'
const Clients = () => {
  return (
    <div>
        <h1 className='lg:text-[5rem] text-[3rem] text-center my-20'>Backed by the best</h1>
        <hr className=''/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16 justify-items-center my-20">
            <img className='w-auto' src={race}/>
            <img className='w-auto' src={apa}/>
            <img className='w-auto' src={jump}/>
            <img className='w-auto' src={scryt}/>
        </div>
        <hr className=''/>
    </div>
  )
}

export default Clients