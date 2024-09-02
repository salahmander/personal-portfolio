import { SetStateAction, Dispatch } from "react";

type submitModalProps = {
  isOpen: boolean | null;
  setIsOpen: Dispatch<SetStateAction<boolean | null>>;
};

export const SubmitModal = ({ isOpen, setIsOpen }: submitModalProps) => {
  return (
    <div
      className="submitModal fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex justify-center items-center invisible opacity-0 bg-bg_cover"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="innerModal w-[90%] h-1/2 flex flex-col justify-center items-center bg-bg_primary text-center max-w-lg rounded-lg border border-gray_500 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-semibold">Thank You</h1>
        </div>

        <div className="overflow-hidden">
          <p className="mt-4 text-lg">I will get back to you soon.</p>
        </div>

        <div className="btn mt-6">
          <button
            type="button"
            className="border rounded-full font-semibold text-lg h-14 w-14 hover:bg-primary_color transition-all duration-300 hover:text-black_500"
            data-cursor="blow_link -pointer"
            onClick={() => setIsOpen(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
