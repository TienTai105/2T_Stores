import React from "react";
import Slider from './slider/Slider';
import CatSlider from '../../Components/catslider/index';
import Banners from '../../Components/Banner/index';
import Banner1 from '../../Components/Banner/banner1'

import './Style.css'
const Home = () => {
    return(
        <>
        <Slider/>
        <CatSlider/>
        <Banners/>
        <Banner1/>
    </>
       
    );
}
export default Home;