import React from "react";
import Feature from "../layout/Feature";
import Container from "../layout/Container";

const Register = () => {
  return (
    <div className="mt-[112px] bg-[#F3F7FA]">
      <Container>
        <div className="sm:flex justify-between">
          <div className="w-full sm:w-[45%] lg:w-[50%] ">
            <Feature
              title="Receive payments
quickly from anywhere"
              dbtn={false}
            />
          </div>
          <div className="sm:w-[45%] md:w-[50%] lg:w-[40%] relative flex lg:justify-end">
            <div className="sm:mt-[50px] lg:mt-[75px] xl:mt-0">
              <img
                className="hidden lg:block absolute top-[-85px] right-0"
                src="img/rshape.png"
                alt=""
              />
              <h2 className="font-primary text-2xl text-secendary font-bold mt-7 sm:mt-0 ">
                Get Started for Free
              </h2>
              <input
                className="w-full md:w-[356px] font-primary placeholder:text-xl px-5 py-4 mt-5 block"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="w-full md:w-[356px]  font-primary placeholder:text-xl px-5 py-4 mt-6 block"
                type="text"
                placeholder="Password"
              />
              <button className="font-primary text-base w-full md:w-[356px]  bg-[#FF7F5C] drop-shadow-xl py-4 text-center font-bold text-white mt-6 rounded-sm block">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
