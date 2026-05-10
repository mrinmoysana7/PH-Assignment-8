import Navbar from '@/components/shared/Navbar';
import React from 'react';

const LayoutPage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default LayoutPage;