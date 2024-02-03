import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container w-[1280px] h-[720px] bg-[#000] relative mx-auto my-0'>
      <div className='w-[153px] h-[720px] bg-[rgba(26,24,24,0.87)] relative overflow-hidden mt-0 mr-0 mb-0 ml-0'>
        <div className='w-[114px] h-[43px] relative z-[9] mt-[6px] mr-0 mb-0 ml-[8px]'>
          <span className="flex w-[70px] h-[19.432px] justify-center items-center font-['Inter'] text-[11px] font-normal leading-[13.313px] text-[#fff] absolute bottom-[12.568px] right-[30px] text-center whitespace-nowrap z-10">
            Chatbot
          </span>
          <div className='w-[16px] h-[13px] bg-[url(../assets/images/35225ee245379b55dc1313212ee3174b7227c667.png)] bg-cover bg-no-repeat absolute top-[15px] left-[84px] z-[11]' />
        </div>
        <div className='w-[113px] h-[48px] relative z-[6] mt-0 mr-0 mb-0 ml-[9px]'>
          <span className="flex w-[62px] h-[19.432px] justify-center items-center font-['Inter'] text-[12px] font-normal leading-[14.523px] text-[#fff] absolute bottom-[14.568px] right-[38px] text-center whitespace-nowrap z-[7]">
            Maps
          </span>
          <div className='w-[13px] h-[13px] bg-[url(../assets/images/178e90e540576e0267eee92b737353754a46516e.png)] bg-cover bg-no-repeat absolute top-[17px] left-[84px] z-[8]' />
        </div>
        <div className='w-[138px] h-[60px] relative z-[1] mt-[568px] mr-0 mb-0 ml-px'>
          <span className="flex w-[43px] h-[21.432px] justify-center items-center font-['Inter'] text-[13px] font-normal leading-[15.733px] text-[#fff] absolute bottom-[23.568px] right-[70px] text-center whitespace-nowrap z-[2]">
            Name
          </span>
        </div>
        <div className='w-[137px] h-[49px] text-[0px] bg-[rgba(0,0,0,0)] absolute bottom-[55px] right-[14px] z-[3]'>
          <span className="flex w-[69px] h-[15px] justify-center items-center font-['Inter'] text-[12px] font-normal leading-[14.523px] text-[#fff] relative text-center whitespace-nowrap z-[5] mt-[17px] mr-0 mb-0 ml-[27px]">
            Preferences
          </span>
          <div className='w-[157px] h-[49px] absolute bottom-0 right-0 z-[4]' />
        </div>
        <div className='w-[16px] h-[16px] bg-[url(../assets/images/6288964fd7cd5c2f203a5243cebd0f857a042d77.png)] bg-cover bg-no-repeat absolute top-[633px] left-[117px] z-[12]' />
      </div>
    </div>
  );
}
