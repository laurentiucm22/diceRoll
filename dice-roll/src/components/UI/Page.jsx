import React from "react";

const Page = ({ children, modifiers }) => {
  const defaultPage = "w-screen h-screen bg-[#1a1a1a40] backdrop-blur-[.2rem]";

  return <div className={`${defaultPage} ${modifiers}`}>{children}</div>;
};

export default Page;
