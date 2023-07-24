import React from 'react';

import { Navbar } from '../Shared/Navbar/Navbar';
import { Main } from './Main/Main';
import { AboutUs } from './AboutUs/AboutUs';
export function Home(){

    return(
        <div>
            <Navbar />
            <Main />
            <AboutUs />
        </div>
    )
}