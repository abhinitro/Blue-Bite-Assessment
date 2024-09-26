import React, { createContext, useState, ReactNode } from "react";

interface ApiContextType {
    data: any;
    setData: (data: any) => void;
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);

    return <ApiContext.Provider value={{ data, setData }}>{children}</ApiContext.Provider>;
};
