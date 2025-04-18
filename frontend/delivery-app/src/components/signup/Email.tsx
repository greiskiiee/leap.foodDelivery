"use client";
import { useRef, useState } from "react";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleGmail = (email: string) => {
    setTouched(true);
    setValid(email.includes("@gmail.com"));
    setEmail(email);
  };

  return (
    <div className="w-full flex flex-col gap-6 justify-between items-start">
      <div className="flex flex-col justify-start gap-1">
        <p className="inter font-[600] text-[24px] text-[#09090B]">
          Create your account
        </p>
        <p className="inter font-[400] text-[16px] text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      <div className="h-fit w-full flex flex-col justify-start items-start gap-1">
        <input
          ref={emailRef}
          onChange={(e) => handleGmail(e.target.value)}
          type="email"
          className="w-full h-fit placeholder:text-[#71717A] text-[#09090B] rounded-md py-2 px-[12px]"
          placeholder="Enter your email address"
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
      </div>
    </div>
  );
};
