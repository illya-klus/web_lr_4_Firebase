import { RouterProvider } from "react-router"
import router from "./features/router/router"
import { ProductsProvider } from "./features/products/data/useProducts"
import { CartProvider } from "./features/cart/data/useCart"
import { HistoryContextProvider } from "./features/profile/profileHistory/HistoryContext"





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
