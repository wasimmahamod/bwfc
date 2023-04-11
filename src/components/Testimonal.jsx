import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";

const Testimonal = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:'center',alignItems:'center', background: "#3734A9",color:'white',width:'34px',height:'34px',borderRadius:'50%',position:'absolute',bottom:'-50px',left:'80px' }}
        onClick={onClick}
      ><BsArrowRight/></div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:'center',alignItems:'center', background: "#3734A9",color:'white',width:'34px',height:'34px',borderRadius:'50%',position:'absolute',bottom:'-50px',left:'32px' }}
        onClick={onClick}
      ><BsArrowLeft/></div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  
  return (
    <div className="mt-[64px] mb-24 bg-white">
      <div className="max-w-l_container mx-auto px-5 ">
        <div>
          <div className="mb-10 lg:ml-8">
            <h4 className="font-primary text-lg text-secendary font-extrabold">
              Testimonials
            </h4>
            <h2 className="w-auto xl:w-[350px] font-primary sm:text-[30px] text-[40px] lg:text-[40px] font-extrabold sm:leading-[35px]  leading-[45px] lg:leading-[56px] text-primary mt-6 sm:max-md:w-full">
              Check what our clients are saying
            </h2>
          </div>
          <Slider {...settings}>
       <div>
       <div className="lg:flex justify-between">
            <div className="lg:w-[55%] lg:ml-8">
              <div className="relative">
                <div className="flex ">
                  <div>
                    <img
                      className="lg:ml-[-32px] "
                      src="img/testimonalshape.png"
                      alt=""
                    />
                  </div>
                  <div className="lg:mt-[100px] ml-[50px] ">
                    <h3 className="font-primary text-base text-primary font-extrabold ">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
                  </div>
                  <img
                    className="absolute bottom-[-40px] lg:bottom-0 left-6 z-50"
                    src="img/tlogo.png"
                    alt=""
                  />
                  <img
                    className="!hidden md:block absolute bottom-28 right-[-20px] z-50"
                    src="img/tq.png"
                    alt=""
                  />
                  <div className="ml-[130px]">
                    <img src="img/tesimonalperson.png" alt="" />
                  </div>
                </div>
                <div className="w-full absolute bottom-[-65px]  md:bottom-[-50px] left-0 rounded-lg overflow-hidden">
                  <img src="img/testimonalleft.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-20 lg:mt-0 lg:w-[40%]">
              <div>
                <img src="img/q.png" alt="" />
                <h2 className="font-primary text-xl font-extrabold leading-7 text-primary w-[290px] mt-4">
                  Save Time Managing Social Media For Your Business
                </h2>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-4">
                  Is be upon sang fond must shew. Really boy law county she
                  unable her sister. Feet you off its like like six. Among sex
                  are leave law built now. In built table in an rapid blush.
                  Merits behind on afraid or warmly.
                </p>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-8">
                  Believing neglected so so allowance existence departure in. In
                  design active temper be uneasy.{" "}
                </p>
                <ul className="flex mt-4 text-[#F9896B]">
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                </ul>
                <h3 className="font-primary text-base text-primary font-extrabold mt-2">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
              </div>
            </div>
          </div>
       </div>
       <div>
       <div className="lg:flex justify-between">
            <div className="lg:w-[55%] lg:ml-8">
              <div className="relative">
                <div className="flex ">
                  <div>
                    <img
                      className="lg:ml-[-32px] "
                      src="img/testimonalshape.png"
                      alt=""
                    />
                  </div>
                  <div className="lg:mt-[100px] ml-[50px] ">
                    <h3 className="font-primary text-base text-primary font-extrabold ">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
                  </div>
                  <img
                    className="absolute bottom-[-30px] lg:bottom-0 left-6 z-50"
                    src="img/tlogo.png"
                    alt=""
                  />
                  <img
                    className="!hidden md:block absolute bottom-28 right-[-20px] z-50"
                    src="img/tq.png"
                    alt=""
                  />
                  <div className="ml-[130px]">
                    <img src="img/tesimonalperson.png" alt="" />
                  </div>
                </div>
                <div className="w-full absolute bottom-[-50px] left-0 rounded-lg overflow-hidden">
                  <img src="img/testimonalleft.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-20 lg:mt-0 lg:w-[40%]">
              <div>
                <img src="img/q.png" alt="" />
                <h2 className="font-primary text-xl font-extrabold leading-7 text-primary w-[290px] mt-4">
                  Save Time Managing Social Media For Your Business
                </h2>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-4">
                  Is be upon sang fond must shew. Really boy law county she
                  unable her sister. Feet you off its like like six. Among sex
                  are leave law built now. In built table in an rapid blush.
                  Merits behind on afraid or warmly.
                </p>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-8">
                  Believing neglected so so allowance existence departure in. In
                  design active temper be uneasy.{" "}
                </p>
                <ul className="flex mt-4 text-[#F9896B]">
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                </ul>
                <h3 className="font-primary text-base text-primary font-extrabold mt-2">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
              </div>
            </div>
          </div>
       </div>
       <div>
       <div className="lg:flex justify-between">
            <div className="lg:w-[55%] lg:ml-8">
              <div className="relative">
                <div className="flex ">
                  <div>
                    <img
                      className="lg:ml-[-32px] "
                      src="img/testimonalshape.png"
                      alt=""
                    />
                  </div>
                  <div className="lg:mt-[100px] ml-[50px] ">
                    <h3 className="font-primary text-base text-primary font-extrabold ">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
                  </div>
                  <img
                    className="absolute bottom-[-30px] lg:bottom-0 left-6 z-50"
                    src="img/tlogo.png"
                    alt=""
                  />
                  <img
                    className="!hidden md:block absolute bottom-28 right-[-20px] z-50"
                    src="img/tq.png"
                    alt=""
                  />
                  <div className="ml-[130px]">
                    <img src="img/tesimonalperson.png" alt="" />
                  </div>
                </div>
                <div className="w-full absolute bottom-[-50px] left-0 rounded-lg overflow-hidden">
                  <img src="img/testimonalleft.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-20 lg:mt-0 lg:w-[40%]">
              <div>
                <img src="img/q.png" alt="" />
                <h2 className="font-primary text-xl font-extrabold leading-7 text-primary w-[290px] mt-4">
                  Save Time Managing Social Media For Your Business
                </h2>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-4">
                  Is be upon sang fond must shew. Really boy law county she
                  unable her sister. Feet you off its like like six. Among sex
                  are leave law built now. In built table in an rapid blush.
                  Merits behind on afraid or warmly.
                </p>
                <p className="font-primary text-base font-normal leading-6 text-[#757095] w-auto lg:w-[444px] mt-8">
                  Believing neglected so so allowance existence departure in. In
                  design active temper be uneasy.{" "}
                </p>
                <ul className="flex mt-4 text-[#F9896B]">
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-xl">
                    <AiFillStar />
                  </li>
                </ul>
                <h3 className="font-primary text-base text-primary font-extrabold mt-2">
                      Angela Taylor
                    </h3>
                    <p className="font-primary text-xs text-[#757095] font-normal mt-1">
                      CEO SAMSUNG
                    </p>
              </div>
            </div>
          </div>
       </div>
     
       
     
          </Slider>
        </div>
        <div className="md:flex justify-between items-center mt-[103px] lg:ml-8 lg:py-10 lg:px-7 shadow-sm">
        <div className="md:w-[75%] ">
          <p className="font-primary font-normal text-[22px] text-[#757095] leading-[32px] ">And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
        </div>
        <div className="md:w-[25%] flex lg:justify-end mt-5 lg:mt-0">
        <button className='font-primary text-base bg-thard font-bold leading-[30px] sm:py-4 py-2 px-5 sm:px-9 rounded-[47px]  text-white  lg:w-[214px]  drop-shadow-xl'>Get Started</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonal;
