import { FC, useContext } from "react";
import { InputsData } from "../constant/InputsData";
import InputComponents from "../components/InputComponents";
import CustomChart from "../components/Graph";
import { DataContext } from "../context/Context";
import Loading from "../components/Loading";

const MainPage: FC = () => {
   const context = useContext(DataContext);
   if (!context) {
      return <div className="min-h-screen h-full"></div>;
   }
   const { formData, setFormData, handleSend, dotData, isLoading } = context;

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   return (
      <div className="relative flex flex-col justify-center items-center min-h-screen h-full">
         {isLoading && (
            <div className="fixed inset-0 flex justify-center items-center min-h-screen h-full z-50 bg-white/70">
               <Loading />
            </div>
         )}
         <div className="w-full md:w-2/3 md:min-w-3xl px-3">
            <form
               onSubmit={handleSend}
               className="flex flex-col gap-5 bg-gray-200 rounded-3xl py-5 md:px-10 px-5"
            >
               <div className="flex flex-col lg:flex-row justify-center space-y-3 lg:space-x-6">
                  {InputsData.filter((input) => input.type === "input").map(
                     (input) => {
                        const InputComponent = InputComponents[input.type];
                        return (
                           <InputComponent
                              key={input.name}
                              name={input.name}
                              title={input.title}
                              placeholder={input.placeholder}
                              required={input.required}
                              value={
                                 formData[input.name as keyof typeof formData]
                              }
                              onChange={handleChange}
                           />
                        );
                     }
                  )}
               </div>
               {InputsData.filter((input) => input.type === "textarea").map(
                  (input) => {
                     const InputComponent = InputComponents[input.type];
                     return (
                        <InputComponent
                           key={input.name}
                           name={input.name}
                           title={input.title}
                           placeholder={input.placeholder}
                           required={input.required}
                           value={formData[input.name as keyof typeof formData]}
                           onChange={handleChange}
                        />
                     );
                  }
               )}
               <div className="flex w-full justify-end mt-2">
                  <button
                     type="submit"
                     className="w-full md:w-auto py-2 md:px-5 outline-0 text-sm md:text-base lg:text-xl bg-blue-400 rounded-2xl text-white font-bold"
                  >
                     Send
                  </button>
               </div>
            </form>
            <div className="flex w-full overflow-x-auto">
               <CustomChart data={dotData} />
            </div>
         </div>
      </div>
   );
};

export default MainPage;
