import bgImg from "@/assets/banner/wireframe1.png"
import Container from "../Container/Container";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { Button } from "@/components/ui/button";
import icon1 from '@/assets/banner/Group1.png'
import icon2 from '@/assets/banner/Group.png'
import icon3 from '@/assets/footer/Mask group.png';
import icon4 from '@/assets/footer/Group 8773.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('0x4444c12f49c474b24b090d7322025b4b9961baed').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="mt-[-80px] relative" id="home">
      <div>
        <img src={bgImg} alt="Image" className="h-[640px] md:h-[800px] lg:h-[150vh] xl:h-[155vh] 2xl:h-[140vh] w-full" />
        <div className="mt-[-540px] md:mt-[-700px] lg:mt-[-750px] xl:mt-[-950px] 2xl:mt-[-1100px]">
          <Container>
            <div>
              <div className="text-center">
                <p className="text-[#FFF4E7] font-gagalin text-[30px] md:text-[45px] xl:text-[60px] 2xl:text-[90px] xl:leading-[90px] lg:tracking-[2.7px]" data-aos="fade-up" data-aos-duration="900">Welcome to</p>

                <h1 className="mt-[-15px] xl:mt-[-29px] 2xl:mt-[-5px] text-[70px] md:text-[90px] lg:text-[75px] xl:text-[110px] 2xl:text-[140px] xl:leading-[150px] lg:tracking-[3.8px]" data-aos="fade-up" data-aos-duration="1200"><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#22DDE2]">snax coin</span></h1>

                <p className="mt-[5px] 2xl:mt-[25px] text-[#CED9D7] font-gagalin text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[28px] xl:leading-[35px] 2xl:leading-[44.8px] lg:tracking-[1.12px]" data-aos="fade-up"
                  data-aos-duration="1600">the crypto sensation inspired by the tale of <br /> a savvy pup!"</p>
              </div>


              {/* Copied tokens */}
              <div className="mt-[205px] md:mt-[290px] lg:mt-[340px] xl:mt-[445px]  2xl:mt-[490px]">
                <div className='mt-[30px] flex justify-center'>
                  <div className="bg-gradient-to-l to-[#1cb4b2] from-[#c9af31] p-[1px] rounded-md" data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className="flex justify-center items-center text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[18px] bg-gradient-to-l to-[#278274] from-[#5d814d] p-[6px] xl:p-2 2xl:p-3 rounded-md">
                      <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                      <button onClick={() => { setCopied(!copied); copyLink() }}>
                        {
                          copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" /> :
                            <IoCopy className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" />
                        }
                      </button>
                    </div>
                  </div>
                </div>

                <Button className="mt-5 md:mt-[40px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 xl:px-[35px] 2xl:px-[50px] mb-10 lg:mb-0 rounded-[10px] duration-300 w-full md:w-fit mx-auto md:absolute md:left-[41%] lg:left-[43%] xl:left-[44.3%] 2xl:" data-aos="fade-up" data-aos-duration="2200">CONNECT</Button>
              </div>
            </div>
          </Container>
        </div>
      </div>      
    </div>
  );
};

export default Banner;
