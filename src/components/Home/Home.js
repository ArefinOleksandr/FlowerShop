import React from 'react';

import { Navbar } from '../Shared/Navbar/Navbar';
import { Main } from './Main/Main';
import { AboutUs } from './AboutUs/AboutUs';
import { ChooseUs } from './ChooseUs/ChooseUs';
import { FollowUS } from './FollowUs/FollowUs';
export function Home(){

    return(
        <div>
            <Navbar />
            <Main />
            <AboutUs />
            <ChooseUs />
            <FollowUS />
        </div>
    )
}