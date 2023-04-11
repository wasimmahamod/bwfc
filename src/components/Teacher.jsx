import React from "react";
import Container from "../layout/Container";
import Feature from "../layout/Feature";
import { BsArrowRight } from "react-icons/bs";

const Teacher = () => {
  return (
    <div className="mt-24 lg:mt-[172px] relative">
      <img
        className="hidden lg:block absolute top-0 left-0 "
        src="img/teacherfullshape.png"
        alt=""
      />
      <Container>
        <div className="lg:flex ">
          <div className="lg:w-2/4">
            <Feature
              title="All payments are
linked to your Financy
account"
              dbtn={true}
            />
          </div>
          <div className="lg:w-2/4 ">
            <div className="md:flex justify-between">
              <div className="mt-5 lg:mt-0">
                <h2 className="font-primary text-primary font-semibold text-2xl mb-8 w-[265px]">
                  100+ Verified Teacher
                </h2>
                <div className="flex items-center gap-x-4 mb-6">
                  <img src="img/t1.png" alt="" />
                  <div>
                    <h3 className="font-primary text-lg text-primary font-normal">
                      Ben Stokes
                    </h3>
                    <p className="font-primary text-xs text-[#6C6C6C] mt-1 font-normal">
                      Mentor of Web Design
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                  <img src="img/t2.png" alt="" />
                  <div>
                    <h3 className="font-primary text-lg text-primary font-normal">
                      Hardik Pandya
                    </h3>
                    <p className="font-primary text-xs text-[#6C6C6C] mt-1 font-normal">
                      Mentor of Web Design
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                  <img src="img/t3.png" alt="" />
                  <div>
                    <h3 className="font-primary text-lg text-primary font-normal">
                      Joe Root
                    </h3>
                    <p className="font-primary text-xs text-[#6C6C6C] mt-1 font-normal">
                      Mentor of UI/UX
                    </p>
                  </div>
                </div>
                <a
                  className="flex items-center font-primary text-lg font-medium text-[#FF6160] gap-x-5 mt-4 "
                  href="#"
                >
                  See More <BsArrowRight />
                </a>
              </div>
              <div>
                <div className="flex justify-center mb-4 lg:mb-16 ml-24 relative">
                  <img
                    className="hidden lg:block"
                    src="img/teachershape.png"
                    alt=""
                  />
                  <img
                    className="hidden lg:block absolute top-5 lg:top-[-80px] left-[-50px] "
                    src="img/teachershape1.png"
                    alt=""
                  />
                </div>
                <div className="lg:w-[370px] text-center mt-10 lg:mt-0">
                  <div>
                    <img className="mx-auto" src="img/teacher.png" alt="" />
                    <h3 className="font-primary text-xl text-primary font-semibold mt-5">
                      Morne Morkel
                    </h3>
                    <h4 className="font-primary text-xs font-normal  text-[#6C6C6C] mt-1">
                      Mentor of Web Development
                    </h4>
                    <a
                      className="font-primary bg-[#0091D0] text-white w-[166px] inline-block py-3 rounded-[6px] mt-8"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teacher;
