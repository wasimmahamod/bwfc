import React from "react";
import Container from "../layout/Container";

const Choose = () => {
  return (
    <div className="mt-[94px] ">
      <Container>
        <div className="w-full">
          <img
            className="hidden md:block relative left-[75px] top-10"
            src="img/chooseshape.png"
            alt=""
          />
          <div className="text-center">
            <h4 className="font-primary text-lg text-secendary font-extrabold">
              Why Financy
            </h4>
            <h2 className="font-primary sm:text-[30px] text-[40px] lg:text-[50px] font-bold sm:leading-[35px]  leading-[45px] lg:leading-[56px] text-primary mt-6 sm:max-md:w-full">
              Why Choose Us
            </h2>
          </div>
          <div className="md:flex justify-center">
            <div className="max-w-[1000px]  mt-7 lg:mt-[69px] ">
              <div className="md:flex ">
                <div>
                  <div className="flex w-full lg:w-[484px] py-[60px] px-3 lg:px-7 gap-x-5 md:gap-x-[32px] bg-white">
                    <div className=" bg-[#F7ECFD] w-[58px] h-[58px] rounded-full "></div>
                    <div className="w-[80%] lg:w-auto">
                      <h3 className="font-primary text-2xl font-extrabold text-primary mb-5">
                        No Extra Fee
                      </h3>
                      <p className="font-primary text-lg font-normal text-primary lg:w-[317px] ">
                        End-to-end payments and financial management in a single
                        solution. Meet the right platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[484px] py-[60px] px-3 lg:px-7 gap-x-5 md:gap-x-[32px] bg-white mt-5 lg:mt-10">
                    <div className=" bg-[#D8F5F1] w-[58px] h-[58px] rounded-full "></div>
                    <div className="w-[80%] lg:w-auto">
                      <h3 className="font-primary text-2xl font-extrabold text-primary mb-5">
                        No Extra Fee
                      </h3>
                      <p className="font-primary text-lg font-normal text-primary lg:w-[317px] ">
                        End-to-end payments and financial management in a single
                        solution. Meet the right platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex w-full lg:w-[484px] py-[60px] px-3 lg:px-7 gap-x-5 md:gap-x-[32px] bg-white">
                    <div className=" bg-[#D8F5F1] w-[58px] h-[58px] rounded-full "></div>
                    <div className="w-[80%] lg:w-auto">
                      <h3 className="font-primary text-2xl font-extrabold text-primary mb-5">
                        No Extra Fee
                      </h3>
                      <p className="font-primary text-lg font-normal text-primary lg:w-[317px] ">
                        End-to-end payments and financial management in a single
                        solution. Meet the right platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[484px] py-[60px] px-3 lg:px-7 gap-x-5 md:gap-x-[32px] bg-white mt-5 lg:mt-10">
                    <div className=" bg-[#F7ECFD] w-[58px] h-[58px] rounded-full "></div>
                    <div className="w-[80%] lg:w-auto">
                      <h3 className="font-primary text-2xl font-extrabold text-primary mb-5">
                        No Extra Fee
                      </h3>
                      <p className="font-primary text-lg font-normal text-primary lg:w-[317px] ">
                        End-to-end payments and financial management in a single
                        solution. Meet the right platform.
                      </p>
                    </div>
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

export default Choose;
