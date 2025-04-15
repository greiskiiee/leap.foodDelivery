import React from "react";

export const Footer = () => {
  const footerText: string = "Fresh fast delivered ";
  return (
    <div className="w-full h-fit bg-[#18181B] flex flex-col">
      <div className="bg-[#EF4444] flex w-full h-fit py-7 gap-[34px] px-[98px] mt-[60px] ">
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
        <p className="inter font-[600] text-[30px] text-[#FAFAFA]">
          {footerText}
        </p>
      </div>

      <div className="w-full p-[88px] h-fit flex justify-between items-start">
        {/* logo */}
        <div className="w-fit h-fit flex flex-col gap-3 justify-center items-center">
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

        {/* link */}
        <div className="h-fit flex gap-[112px]">
          <div className="flex flex-col w-[122px] gap-4">
            <p className="h-[28px] text-[16px] font-[400] text-[#71717A]">
              NOMNOM
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Home
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Contact us
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Delivery zone
            </p>
          </div>

          <div className="flex flex-col w-[228px] gap-4 justify-end">
            <p className="h-[28px] text-[16px] font-[400] text-[#71717A]">
              MENU
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Appetizers
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Salads
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Pizzas
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Lunch favourites
            </p>
            <p className="h-[24px] text-[16px] font-[400] text-[#FAFAFA]">
              Main dishes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
