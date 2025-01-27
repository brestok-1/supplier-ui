import { FC } from "react";
import { TextAreaProps } from "../../types/InputType";

const TextAreaInput: FC<TextAreaProps> = ({ name, title, placeholder, required, value, onChange }) => {
   return (
      <div className="flex flex-col gap-2 w-full">
       <h3 className="text-base md:text-xl xl:text-2xl">{title}</h3>
         <textarea
          name={name}
            value={value}
            onChange={onChange}
            className="py-2 px-3 outline-0 text-sm md:text-base xl:text-lg border-2 border-gray-400 bg-white hover:border-blue-500 rounded-xl resize-none box-border"
            placeholder={placeholder}
            required={required}
            rows={3}
         />
      </div>
   );
};

export default TextAreaInput;
