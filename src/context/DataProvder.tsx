import { FC, useState } from "react";
import { DataContext } from "./Context";
import { IDotData, IFormData } from "../types/DataType";
import { fetchCalculation } from "../api/calculation";

const initialFormData: IFormData = {
   category: "",
   buyingCompany: "",
   supplier: "",
   context: "",
};
const initialData: IDotData[] = [{ x: 0, y: 0 }];

const CoinProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
   const [formData, setFormData] = useState<IFormData>(initialFormData);
   const [dotData, setDotData] = useState<IDotData[]>(initialData);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const handleSend = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
         const response = await fetchCalculation(formData);
         if (response.successful) {
            setDotData((prev) => {
               const updatedData = [...prev];
               updatedData[0] = response.data;
               return updatedData;
            });
         } else {
            console.error("Error fetching data:", response.error.message);
         }
      } catch (error) {
         console.error("Api error:", error);
      } finally {
         setIsLoading(false);
      }
   };
   return (
      <DataContext.Provider
         value={{
            formData,
            setFormData,
            handleSend,
            dotData,
            isLoading,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};

export default CoinProvider;
