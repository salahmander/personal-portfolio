import { MDText } from "i18n-react";

import LocalTexts from "./Footer.json";

import { CopyRightIcon } from "../../Utilities/Icons";

const LocalT = new MDText(LocalTexts);

export const Footer = () => {
  return (
    <footer className="mt-10 bg-black_400">
      <div className={`container py-5 px-10 flex justify-center items-center`}>
        <p className="text-center">
          <span className="text-lg inline-block align-middle">
            <CopyRightIcon />
          </span>
          {LocalT.translate("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};
