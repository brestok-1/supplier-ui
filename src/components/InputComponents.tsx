import { FC } from "react";
import { BaseInputProps, InputType } from "../types/InputType";

import TextAreaInput from "./inputs/TextareaInput";
import TextInput from "./inputs/TextInput";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputComponents: Record<InputType, FC<BaseInputProps & { onChange: any }>> = {
   input: TextInput,
   textarea: TextAreaInput,
};

export default InputComponents;
