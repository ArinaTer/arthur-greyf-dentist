import '../styles/main.scss';

import { header } from "./components/header.js";
import { mobileNav } from "./components/mobile-nav.js";
import { accordion } from "./components/accordion.js";
import { slidersStatsCard, slidersAboutFounder, slidersOurServices, slidersPricing } from "./components/sliders.js";



document.addEventListener("DOMContentLoaded", function () {
    const navController = mobileNav();
    header(navController);
    accordion();
    slidersStatsCard();
    slidersAboutFounder();
    slidersOurServices();
    slidersPricing();
})
