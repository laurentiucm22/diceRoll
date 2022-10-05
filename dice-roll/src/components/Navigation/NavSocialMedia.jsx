import React from "react";
import { MY_SOCIAL_MEDIA } from "../../constants/constants";

const NavSocialMedia = () => {
  return (
    <div className="flex flex-col items-start pl-5 h-4/5 ">
      {[...MY_SOCIAL_MEDIA].map(({ id, link, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center justify-center mb-5 w-10 h-10 hover:bg-[#f3f4f6] rounded-full transition-all duration-300 cursor-pointer"
          >
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              style={{ fontSize: "1.25rem" }}
            >
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NavSocialMedia;
