"use client";
import { useRef, useState } from "react";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);

  const handleGmail = (email: string) => {
    setTouched(true);
    setValid(email.includes("@gmail.com"));
    setPassword(email);
  };

  return (
    <div className="w-full flex flex-col gap-6 justify-between items-start">
      <div className="flex flex-col justify-start gap-1">
        <p className="inter font-[600] text-[24px] text-[#09090B]">
          Create a strong password
        </p>
        <p className="inter font-[400] text-[16px] text-[#71717A]">
          Create a strong password with letters, numbers.
        </p>
      </div>

      <div className="h-fit w-full flex flex-col justify-start items-start gap-1">
        <input
          ref={passRef}
          onChange={(e) => handleGmail(e.target.value)}
          type="password"
          className="w-full h-fit placeholder:text-[#71717A] text-[#09090B] rounded-md py-2 px-[12px]"
          placeholder="Password"
          style={
            valid === true || touched === false
              ? { border: "1px solid #E4E4E7" }
              : { border: "1px solid #EF4444" }
          }
        />
        {valid === false && touched === true ? (
          <p className="text-[#EF4444] inter font-[400] text-[14px]">
            Invalid email. Use a format like example@gmail.com
          </p>
        ) : null}

        <input
          ref={passRef}
          onChange={(e) => handleGmail(e.target.value)}
          type="password"
          className="w-full h-fit placeholder:text-[#71717A] text-[#09090B] rounded-md py-2 px-[12px]"
          placeholder="Confirm"
          style={
            valid === true || touched === false
              ? { border: "1px solid #E4E4E7" }
              : { border: "1px solid #EF4444" }
          }
        />

        {valid === false && touched === true ? (
          <p className="text-[#EF4444] inter font-[400] text-[14px]">
            Invalid email. Use a format like example@gmail.com
          </p>
        ) : null}

        <div className="flex justify-start items-center gap-3">
          <button className="border-1 border-[#09090B] w-[16px] h-[16px] rounded-sm"></button>
          <p className="inter font-[400] text-[14px] text-[#71717A]">
            Show password
          </p>
        </div>
      </div>
    </div>
  );
};
