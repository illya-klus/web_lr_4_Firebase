import { createBrowserRouter} from 'react-router'

import Layout from "./Layout";
import ProductsPage from "../products/ui/ProductsPage";
import AboutUs from "../about_us/AboutUsPage";
import DiscountPage from "../discount/ui/DiscountsPage";
import ProfilePage from "../profile/ProfilePage";
import RegisterPage from "../auth/ui/RegisterPage";

import NotFound from './NotFoundPage';

import ProfileHistory from '../profile/profileHistory/ProfileHistory';

import AuthLayout from './AuthLayout';
import ItemPage from '../item_page/ItemPage';
import Cart from '../cart/ui/Cart';
import LoginPage from '../auth/ui/LoginPage';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [ 
      { index: true, element: <ProductsPage/> }, 
      { path:'about', element: <AboutUs/> }, 
      { path:'discounts', element: <DiscountPage/> },
      { path:'items/:id', element: <ItemPage/> },
      { 
        path:'profile', 
        element: <ProfilePage/>,
        children: [
          {
            index:true,
            element: <Cart/>
          },
          {
            path:'history',
            element: <ProfileHistory/>
          },
        ]
      },

    ]
  },
  {
    path:'/auth',
    element: <AuthLayout/>,
    children:[
      { path: 'register', element: <RegisterPage/> },
      { path: 'login', element: <LoginPage/> }
    ],
  },
  {
    path:'*',
    element: <NotFound/>
  }
]);


export default router;