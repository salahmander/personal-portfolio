import { ReactNode } from "react";

type SocialButtonProps = {
  icon: ReactNode;
  url: string;
  title: string;
};

export const SocialButton = ({ url, icon, title }: SocialButtonProps) => {
  return (
    <a
      className="border border-gray_500 text-primary_color p-3 rounded-full inline-block hover:bg-primary_color hover:text-black transition-all"
      data-cursor="-hidden invisible"
      href={url}
      title={title}
    >
      {icon}
    </a>
  );
};
