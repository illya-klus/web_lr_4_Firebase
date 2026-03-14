import { RouterProvider } from "react-router-dom"
import { CartProvider } from "./features/cart/hooks/useCart"
import { ProductsProvider } from "./features/products/hooks/useProducts"
import { HistoryContextProvider } from "./features/profile/context/HistoryContext"
import router from "./router/router"






function App() {

  return (
    <ProductsProvider> 
      <HistoryContextProvider>
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
      </HistoryContextProvider>
    </ProductsProvider>

  )
}

export default App
