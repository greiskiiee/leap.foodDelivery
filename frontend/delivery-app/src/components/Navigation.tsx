"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const Navigation = () => {
  const router = useRouter();

  const handleClickSignUp = () => {
    router.push("/signuppage");
  };

  const handleClickLogIn = () => {
    router.push("/loginpage");
  };
  return (
    <div className="w-full h-fit py-3 px-[88px] flex justify-between bg-[#18181B]">
      {/* logo and name */}
      <div className="w-fit h-fit flex gap-3 justify-center items-center">
        <img src="FDlogo.png" alt="logo" className="w-[46px] h-[37px]" />
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <p className="text-[20px] inter font-[600] ">
            Nom{" "}
            <span className="text-[20px] inter font-[600] text-[#ef4444]">
              Nom
            </span>
          </p>
          <p className="inter font-[400] text-[12px] text-[#F4F4F5]">
            Swift delivery
          </p>
        </div>
      </div>

      {/* login and sign up */}
      <div className="flex w-fit h-fit gap-[12px]">
        <button
          onClick={handleClickSignUp}
          className="bg-[#F4F4F5] py-[8px] px-[12px] rounded-full text-[#18181B] text-[14px] font-[500] "
        >
          Sign up
        </button>
        <button
          onClick={handleClickLogIn}
          className="bg-[#EF4444] py-[8px] px-[12px] rounded-full text-[#FAFAFA] text-[14px] font-[500] "
        >
          Log in
        </button>
      </div>
    </div>
  );
};
