export type InputType = "input" | "textarea";

export interface IInput {
   name: string;
   title: string;
   placeholder: string;
   type: InputType;
   required: boolean;
}

export interface BaseInputProps {
    name: string;
    title: string;
    placeholder: string;
    value: string;
   required: boolean;
    
 }

export interface TextInputProps extends BaseInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
 }
 
export interface TextAreaProps extends BaseInputProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
 }
 
