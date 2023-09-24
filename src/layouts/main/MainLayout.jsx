import React from 'react'
import TopBar from './TopBar';
import Footer from './Footer';

import { Outlet } from "react-router-dom";

export default function MainLayout() {

    return (
        <>
            <div className="container mx-auto px-12">

                <TopBar />

                <Outlet />

                <Footer />
            </div>

        </>
    );
}
