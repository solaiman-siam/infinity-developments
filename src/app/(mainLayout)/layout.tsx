import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React, { ReactNode } from 'react';

const MainLayout = ({children} : {children: ReactNode}) => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            {children}
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;