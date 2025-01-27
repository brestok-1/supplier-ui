export interface IFormData {
    category: string,
    buyingCompany: string,
    supplier: string,
    context: string,
}

export interface DataContextType {
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    handleSend: (e: React.FormEvent) => void;
    dotData: IDotData[];
    isLoading: boolean;
}

export interface IDotData {
    x: number;
    y: number;
}