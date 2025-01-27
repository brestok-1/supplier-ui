import api from ".";
import { IDotData, IFormData } from "../types/DataType";

interface CalculationResponse {
   data: IDotData;
   successful: boolean;
   error: {
      message: string;
   };
}

export const fetchCalculation = async (
   requestData: IFormData
): Promise<CalculationResponse> => {
   try {
      const response = await api.post<CalculationResponse>(
         "/api/calculation/pilot/calculate",
         requestData
      );
      return response.data;
   } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
   }
};
