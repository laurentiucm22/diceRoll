import React from "react";

const Page = ({ children, type, modifiers }) => {
  const defaultPage = "w-screen h-screen bg-blue-500";

  return <div className={`${defaultPage} ${modifiers}`}>{children}</div>;
};

export default Page;
