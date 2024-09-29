import React from "react";

const InputField = ({ label, ...props }) => {
  return (
    <div className="grow shrink w-full h-20 text-left">
      <label className="font-semibold">{label}</label>
      <input
        {...props}
        className="w-full h-8 appearance-none text-sm focus:outline-none border p-2 font-semibold rounded-md border-[#54a399] mt-1 bg-[#192f2b]"
      />
    </div>
  );
};

export default InputField;
