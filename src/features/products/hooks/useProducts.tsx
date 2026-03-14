import { createContext, ReactNode, useContext,  useState } from "react";
import { downloadProducts, Product } from "../api/productsApi";


type Filters = {
    search ?: string;
    discount ?: boolean;
    sort ?: "price-asc" | "price-desc" | 'none';
};

type ProductsContextType = { 
    products: Product[] ;
    getProduct : (id: number) => Product | null;
    filterProducts : (filters: Filters) => void;
    filteredProducts : Product[] ;
};


const ProductsContext = createContext<ProductsContextType | null>(null);

export const useProducts = () =>{
    let context = useContext(ProductsContext);
    if(!context) throw new Error("Element must be covered by ProductsProvider");
    return context;
}



export const ProductsProvider = ( {children} : {children : ReactNode} ) => {
    let [products] = useState<Product[]>(downloadProducts());

    let [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    let [filters, setFilters] = useState<Filters>({});

    const getProduct = (id: number) => {
        return products.find(i => i.id === id) || null;
    }

    const filterProducts = (newFilters: Filters) => {
        const updatedFilters = {...filters, ...newFilters};

        let result = [...products];

        if(updatedFilters.search){
            let s = updatedFilters.search!.toLocaleLowerCase()
            result = result.filter(p => p.title.toLowerCase().includes(s)); 
        }
               
        if(updatedFilters.discount){
            result.filter(p => p.discount !== null);
        }

        if(updatedFilters.sort === 'price-asc'){
            result.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        }

        if(updatedFilters.sort === 'price-desc'){
            result.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        }

        if(updatedFilters.sort === 'none'){
            setFilteredProducts(products);
        }

        setFilteredProducts(result);
        setFilters(updatedFilters);
    }


    return(
        <ProductsContext.Provider value={ {products, getProduct, filterProducts, filteredProducts} }>
            {children}
        </ProductsContext.Provider>
    );
}

const getFinalPrice = (p: Product) =>
  p.discount ? p.price * (1 - p.discount / 100) : p.price;








































