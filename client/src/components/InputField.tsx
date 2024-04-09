import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  onChange,
  value,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="w-full p-2 mt-1 text-black transition-colors duration-300 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
