import React from "react";
import { MY_SOCIAL_MEDIA } from "../../constants/constants";

const NavSocialMedia = () => {
  return (
    <div className="flex flex-col items-start pl-3 h-4/5 ">
      {[...MY_SOCIAL_MEDIA].map(({ id, link, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center justify-center w-10 h-10 mb-5 duration-300 rounded-full cursor-pointer hover:bg-nav-social-media transition-bg hover:text-nav-text"
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
