import React from 'react'

function PortalPopup({closeFrame}) {

  return (
    <div className='bg-white bg-opacity-10 backdrop-blur-md text-white border border-white border-opacity-30 shadow-2xl p-6 h-full w-[429px] z-10 font-Poppins'>
        <div className='flex w-full'>
            <img className='text-white ml-auto cursor-pointer' src='../src/assets/X.svg' onClick={closeFrame}/>
        </div>

        <div className='flex flex-col gap-[41px] mb-[233px]'>
            <div className='flex flex-col mt-[77px]'>
                <p className='text-[12px]'>Navigation</p>
                <div className='h-[0.3px] w-full bg-white'></div>
            </div>

            <div className='flex flex-col gap-[41px] text-[36px]'>
                <p>Liked Places</p>
                <p>Tournaments</p>
                <p>About us</p>
            </div>
        </div>

        <div className='flex flex-col gap-[41px]'>
            <div>
                <p className='text-[12px]'>Socials</p>
                <div className='h-[0.3px] w-full bg-white'></div>
            </div>

            <div className='flex gap-[41px] text-[13px]'>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Gmail</p>
            </div>
        </div>

    </div>
    );
};

export default PortalPopup