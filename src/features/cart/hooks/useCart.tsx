import { createContext, ReactNode, useContext, useState  } from "react";
import { Product } from "../../products/api/productsApi";



export type CartItem = {
  product: Product;
  count: number;
};



type CartContextType = {
    products: CartItem[];
    total: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    removeItemFromCart: (id: number) => void;
    isInCart: (id:number) => boolean;
    getCartLen : () => number;
}


const CartContext = createContext<CartContextType | null>( null );

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCart must be used inside CartProvider");
    return context;
}

export const CartProvider = ({children} : {children : ReactNode}) => {
    let [products, setProducts] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setProducts( prev => {
            let findedProduct = prev.find(item => item.product.id === product.id);

            if(findedProduct){
                return prev.map(
                    item => item.product.id === product.id
                    ? {...item, count: item.count+1}
                    : item
                )
            }

            return [...prev, {product, count: 1}];
        });
    }

    const removeFromCart = (id:number) => {
        setProducts( (prev) => 
            prev
            .map(
                item => item.product.id === id 
                ? {...item, count: item.count-1}
                : item
            ).filter(i => i.count > 0)
        );
    }

    const removeItemFromCart = (id:number) =>{
        setProducts( (prev) => 
            prev.filter(item => item.product.id !== id)
        );
    }

    const clearCart = () => {
        setProducts([]);
    }

    const isInCart = (id: number) => {
        return products.find(i => i.product.id === id) ? true : false;
    }
    const getCartLen = () => {
        return products.length;
    }

    const total = products.reduce((a, i) => a += i.count*i.product.price , 0);


    return(
        <CartContext.Provider value={ { products, total, addToCart, removeFromCart, clearCart, removeItemFromCart, isInCart, getCartLen} }>
            {children}
        </CartContext.Provider>
    );
}































