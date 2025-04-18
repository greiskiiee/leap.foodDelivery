"use client";
import { ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import { Email } from "../../../components/signup/Email";
import { Password } from "../../../components/signup/Password";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [currentIdx, setIdx] = useState(0);
  const router = useRouter();

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
    router.push("/loginpage");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-16">
      <div className="w-[416px] flex flex-col gap-6 justify-between items-start">
        <button
          onClick={handleBack}
          className={`border-1 border-[#E4E4E7] rounded-md w-[36px] h-[36px] flex justify-center items-center `}
        >
          <ChevronLeft size={16} color="#18181B" strokeWidth={2} />
        </button>

        {currentIdx === 0 && <Email />}
        {currentIdx === 1 && <Password />}

        <button
          onClick={handleNext}
          className="w-full h-fit py-2 px-[12px] text-[#FAFAFA] rounded-md text-[14px] inter font-[500]"
          //   style={
          //     valid === true
          //       ? { backgroundColor: "#18181B" }
          //       : { backgroundColor: "#d1d1d1", cursor: "not-allowed" }
          //   }
        >
          Let's Go
        </button>

        <div className="w-full p-0 flex justify-center items-center gap-3">
          <p className="text-[16px] inter font-[400] text-[#71717A]">
            Already have an account?
          </p>
          <p
            onClick={onClick}
            className="text-[16px] inter font-[400] text-[#2563EB]"
          >
            Log in
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
