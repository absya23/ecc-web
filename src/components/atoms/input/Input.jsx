import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 border border-[#798386] rounded-md"
      {...field}
      {...props}
    />
  );
};

export default Input;
