import buttonBg from '@/assets/banner/Frame 305.png'
import icon3 from '@/assets/footer/Mask group.png';
import icon4 from '@/assets/footer/Group 8773.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SideMenu = () => {
  return (
    <div>
      <div className="hidden md:block ">
        <img src={buttonBg} alt="" className='mb-[-500px] md:w-[65px] lg:w-[74px] xl:w-[100px] 2xl:w-[109px] md:h-[281px] lg:h-[288px] xl:h-[360px] 2xl:h-[455px] absolute top-[460px] md:top-[297px] lg:top-[319px] xl:top-[389px] 2xl:top-[368px] right-24 md:right-[46px] lg:right-[65px] xl:right-[55px] 2xl:right-[99.6px]'/>

        <div className="absolute top-[460px] md:top-[300px] lg:top-[320px] xl:top-[390px] 2xl:top-[370px] right-24 md:right-5 lg:right-12 xl:right-16 2xl:right-[117px]">
          <div className='w-[90px]'>
            <div className='cusBorder w-fit flex flex-col justify-center  rounded-full'>
              <div className="p-[10px] lg:p-[15px] xl:p-[20px] bg-[558562] rounded-full space-y-[30px] 2xl:space-y-[50px]">
                <div>
                  <a href="" target='_blank' className='text-white'>
                    <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 2xl:p-5 rounded-full duration-300'>
                      <FaTelegramPlane className='text-[25px]' />
                    </div>
                  </a>
                </div>

                <div>
                  <a href="" target='_blank' className='text-white'>
                    <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 2xl:p-5 rounded-full duration-300'>
                      <FaXTwitter className='text-[25px]' />
                    </div>
                  </a>
                </div>

                <div>
                  <a href="" target='_blank' className='text-white'>
                    <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 2xl:p-5 rounded-full duration-300'>
                      <img src={icon3} alt="Image" className='w-[24px] h-[25px]' />
                    </div>
                  </a>
                </div>

                <div>
                  <a href="" target='_blank' className='text-white'>
                    <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-[15px] 2xl:p-5 rounded-full duration-300'>
                      <img src={icon4} alt="Image" className='w-[26px]' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;