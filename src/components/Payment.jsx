import React from "react";
import Container from "./../layout/Container";
import Feature from "./../layout/Feature";

const Payment = () => {
  return (
    <div className="mt-10 lg:mt-[114px] bg-white">
      <Container>
        <div className="md:flex justify-between">
          <div className="md:w-2/4">
            <Feature
              title="All payments are linked to your Financy account" dbtn={true}
            />
          </div>
          <div className="md:w-2/4 flex lg:justify-end mt-10 lg:mt-0">
            <div className="py-5 lg:py-10 px-5 lg:px-12 " style={{background:"url('img/pimg.png')",backgroundRepeat:'no-repeat'}}>
                <div className="flex px-5 py-4 rounded-xl gap-x-[14px] bg-[#FFFFFF] shadow-md w-full  lg:w-[433px] mb-10">
                    <img src="img/p1.png" alt="" />
                    <div>
                        <h2 className="font-primary text-base font-bold text-secendary mb-1">+ $28,900</h2>
                        <h4 className="font-primary text-sm text-[#757095]font-normal">Received from Michael V</h4>
                    </div>
                </div>
                <div className="flex px-5 py-4 rounded-xl gap-x-[14px] bg-[#FFFFFF] shadow-md w-full  lg:w-[433px] mb-10">
                    <img src="img/p2.png" alt="" />
                    <div>
                        <h2 className="font-primary text-base font-bold text-secendary mb-1">+ $28,900</h2>
                        <h4 className="font-primary text-sm text-[#757095]font-normal">Received from Michael V</h4>
                    </div>
                </div>
                <div className="flex px-5 py-4 rounded-xl gap-x-[14px] bg-[#FFFFFF] shadow-md w-full  lg:w-[433px] mb-0  lg:mb-10">
                    <img src="img/p3.png" alt="" />
                    <div>
                        <h2 className="font-primary text-base font-bold text-secendary mb-1">+ $28,900</h2>
                        <h4 className="font-primary text-sm text-[#757095]font-normal">Received from Michael V</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
