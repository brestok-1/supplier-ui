import { FC } from "react";
import { TextInputProps } from "../../types/InputType";

const TextInput: FC<TextInputProps> = ({ name, title, placeholder, value, required, onChange }) => {
   return (
      <div className="flex flex-col gap-2 w-full">
         <h3 className="text-base md:text-xl xl:text-2xl">{title}</h3>
         <input
            name={name}
            value={value}
            onChange={onChange}
            className="py-2 px-3 outline-0 text-sm md:text-base xl:text-lg border-2 border-gray-400 bg-white hover:border-blue-500 rounded-xl"
            required={required}
            placeholder={placeholder}
         />
      </div>
   );
};

export default TextInput;
