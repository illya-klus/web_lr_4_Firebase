import { createContext, ReactNode, useContext, useState } from "react";
import { useProducts } from "../../products/data/useProducts";
import { Product } from "../../products/data/productsApi";




type HistoryContext = {
    visited : Product[];
    addToVisited: (id:number) => void;
    clearVisited: () => void;
}



const HistoryContext = createContext<HistoryContext | null>(null);


export const useHistoryContext = () => {
    let context = useContext(HistoryContext);
    if(!context)
        throw new Error("Use element covered by HistoryContext provider");
    return context;
}


export const HistoryContextProvider = ({children} : {children:ReactNode}) => {
    let [visited, setVisited] = useState<Product[]>([]);
    const {getProduct} = useProducts();

    const addToVisited = (id: number) => {
        let newItem = getProduct(id);
        if (!newItem) return;
        setVisited(prev => [...prev, newItem]);
        console.log(visited);
    }
    const clearVisited = () => {
        setVisited([]);
    }

    return(
        <HistoryContext.Provider value={{visited, addToVisited, clearVisited}}>
            {children}
        </HistoryContext.Provider>
    );
}






























