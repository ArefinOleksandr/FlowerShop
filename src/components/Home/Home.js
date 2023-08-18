import React from 'react';

import { Navbar } from '../Shared/Navbar/Navbar';
import { Main } from './Main/Main';
import { AboutUs } from './AboutUs/AboutUs';
import { ChooseUs } from './ChooseUs/ChooseUs';
import { FollowUS } from './FollowUs/FollowUs';
import { OurService } from './OurService/OurService';
import { Reviews } from './Reviews/Reviews';
import { Footer } from '../Shared/Footer/Footer';
export function Home(){

    return(
        <div>
            <Navbar />
            <Main />
            <AboutUs />
            <ChooseUs />
            <FollowUS />
            <OurService />
            <Reviews />
            <Footer />
        </div>
    )
}