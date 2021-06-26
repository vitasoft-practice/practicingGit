import { execOnce } from "next/dist/next-server/lib/utils";
import { createContext, ReactNode, SetStateAction, useState } from "react";

export const FormContext = createContext<any>(undefined); // look it up


export function FormProvider({children}: {children: ReactNode}){
    
    const [moveToNextPage, setMoveToNextPage] = useState<boolean>(false);
    const [userName, setUsername] = useState<string>("");
    return(
        <FormContext.Provider value={{userName, setUsername}}>
            {children}
        </FormContext.Provider>
    )
}