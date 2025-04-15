"use client";
import { ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import { Email } from "../components/signup/Email";
import { Password } from "../components/signup/Password";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [currentIdx, setIdx] = useState(0);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleGmail = (email: string) => {
    setTouched(true);
    setValid(email.includes("@gmail.com"));
    setEmail(email);
  };

  const handleNext = () => {
    setIdx(currentIdx + 1);
  };

  const handleBack = () => {
    if (currentIdx === 0) {
      router.push("/");
    }
    setIdx(currentIdx - 1);
  };

  const onClick = () => {
    router.push("/signuppage");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-16 bg-white">
      <div className="w-[416px] flex flex-col gap-6 justify-between items-start">
        <button
          onClick={handleBack}
          className={`border-1 border-[#E4E4E7] rounded-md w-[36px] h-[36px] flex justify-center items-center `}
        >
          <ChevronLeft size={16} color="#18181B" strokeWidth={2} />
        </button>

        <div className="flex flex-col justify-start gap-1">
          <p className="inter font-[600] text-[24px] text-[#09090B]">Log in</p>
          <p className="inter font-[400] text-[16px] text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <div className="h-fit w-full flex flex-col justify-start items-start gap-3">
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

          <input
            ref={emailRef}
            onChange={(e) => handleGmail(e.target.value)}
            type="email"
            className="w-full h-fit placeholder:text-[#71717A] text-[#09090B] rounded-md py-2 px-[12px]"
            placeholder="Password"
            style={
              valid === true || touched === false
                ? { border: "1px solid #E4E4E7" }
                : { border: "1px solid #EF4444" }
            }
          />
        </div>

        <p className="text-[14px] text-[#18181B] inter font-[400] underline underline-offset-2">
          Forgot password ?
        </p>

        <button
          onClick={handleNext}
          className="w-full h-fit py-2 px-[12px] text-[#FAFAFA] rounded-md text-[14px] inter font-[500]"
          style={
            valid === true
              ? { backgroundColor: "#18181B" }
              : { backgroundColor: "#d1d1d1", cursor: "not-allowed" }
          }
        >
          Let's Go
        </button>

        <div className="w-full p-0 flex justify-center items-center gap-3">
          <p className="text-[16px] inter font-[400] text-[#71717A]">
            Don’t have an account?
          </p>
          <p
            onClick={onClick}
            className="text-[16px] inter font-[400] text-[#2563EB]"
          >
            Sign up
          </p>
        </div>
      </div>
      <img
        className="w-[856px] h-[904px] rounded-[16px]"
        src="https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__"
        alt="image"
      />
    </div>
  );
}
