import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p py-4 bg bg-black text-white flex flex-col justify-center items-center">
        <div className="logo font-bold">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        {/* <div className='flex justify-center items-center'>Created with <img className='w-10 mx-2' src='icons/heart.png' alt=''/> <a href='https://www.linkedin.com/in/tarun910/'>by Tarun Namdev</a> */}

        <div className="flex justify-center items-center">
          Created&nbsp;{" "}
          <a
            className="text"
            href="https://www.linkedin.com/in/tarun910/"
            target="_blank"
          >
            by Tarun Namdev
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
