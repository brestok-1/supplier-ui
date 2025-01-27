import { IInput } from "../types/InputType";

export const InputsData: IInput[] = [
   {
      name: "category",
      title: "Category",
      placeholder: "Enter categoty",
      type: "input",
      required: true,
   },
   {
      name: "buyingCompany",
      title: "Buying Company",
      placeholder: "Enter company",
      type: "input",
      required: true,
   },
   {
      name: "supplier",
      title: "Supplier",
      placeholder: "Enter supplier",
      type: "input",
      required: true,
   },
   {
      name: "context",
      title: "Context",
      placeholder: "Enter context",
      type: "textarea",
      required: false,
   },
];

