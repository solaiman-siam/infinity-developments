import React, { ReactNode } from 'react';

const MainLayout = ({children} : {children: ReactNode}) => {
    return (
        <div>
            <nav></nav>
            {children}
            <footer></footer>
        </div>
    );
};

export default MainLayout;