import { MDText } from "i18n-react";

import { SetStateAction, Dispatch } from "react";

import LocalTexts from "./SubmitModal.json";

const LocalT = new MDText(LocalTexts);

type submitModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean | null>>;
  isError: boolean;
};

export const SubmitModal = ({ isError, setIsOpen }: submitModalProps) => {
  const message = isError ? "failed" : "success"
  return (
    <div
      className="submitModal fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex justify-center items-center bg-bg_cover"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="innerModal w-[90%] h-1/2 flex flex-col justify-center items-center bg-bg_primary text-center max-w-lg rounded-lg border border-gray_500 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-semibold">
            {LocalT.translate(`submitModal.${message}.heading`)}
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="mt-4 text-lg">
          {LocalT.translate(`submitModal.${message}.description`)}
          </p>
        </div>

        <div className="btn mt-6">
          <button
            type="button"
            className="border text-white px-4 py-2 rounded-lg hover:bg-primary_color transition-all duration-300 hover:text-black_500"
            data-cursor="blow_link -pointer"
            onClick={() => setIsOpen(false)}
          >
            {LocalT.translate("submitModal.button")}
          </button>
        </div>
      </div>
    </div>
  );
};
