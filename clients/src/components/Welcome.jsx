import React from 'react'
// import { loader } from ''

const Welcome = () => {

  const CommonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const ConnectWallet = () => {

  }
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-10 my-10 mx-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-4'>
          <h1 className='text-3xl text-white text-gradient py-1 sm:text-5xl'>
            Send Crypto <br /> Across The World
          </h1>
            <p className=' text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
              Explore the Crypto World.Buy And Sell Cryptocurrencies easily on Krypto.
            </p>
            <button
            type='button'
            // onClick={connectWallet}
            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
            >
              <p className='text-white text-base font-semibold'>Connect Button</p>
            </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 mt-3 w-full'>
            <div className={`rounded-tl-2xl ${CommonStyle}`}>
              Reliability
            </div>
            <div className={CommonStyle}>
             Security
            </div>
            <div className={`rounded-tr-2xl ${CommonStyle}`}>
              Etherum
            </div>
            <div className={`rounded-bl-2xl ${CommonStyle}`}>
              WEB3.0
            </div>
            <div className={`rounded-tt-2xl ${CommonStyle}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${CommonStyle}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-10 '>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='w-10 h-10 rounded-full border-2 border-white flex justify-start items-center '>
                {/* <SiEthereum fontSize={21} color='fff' /> */}
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome
