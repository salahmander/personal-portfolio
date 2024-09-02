import { CopyRightIcon } from "../../Utilities/Icons";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-black_400">
      <div className={`container py-5 px-10 flex justify-center items-center`}>
        <p className="text-center">
          <span className="text-lg inline-block align-middle">
            <CopyRightIcon />
          </span>{" "}
          Copyright 2024 Salah Abdo All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
