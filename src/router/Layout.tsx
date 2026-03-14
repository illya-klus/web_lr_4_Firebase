import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';



const Layout = () => {

    return(
        <>
        <Header/>
        
        <main className='pt-24 sm:pt-30 sm:px-0'>
            <Outlet/>
        </main>
        
        <Footer/>
        </>
    );
}

export default Layout;