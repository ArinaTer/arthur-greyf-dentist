import '../styles/main.scss';

import { header } from "./components/header.js";
import { mobileNav } from "./components/mobile-nav.js";
import { accordion } from "./components/accordion.js";
import { slidersPromo, slidersStatsCard, slidersAboutFounder, slidersOurServices, slidersPricing, slidersReviews } from "./components/sliders.js";
import { submenuController } from "./components/submenu.js";
import { fancyboxVideo } from "./components/fancybox.js";
import { equalizeFinancingRows } from "./components/equalizeFinancingRows.js";
import { faqDetailAnchors } from "./components/faqDetailAnchors.js";





document.addEventListener("DOMContentLoaded", function () {
    const navController = mobileNav();
    header(navController);
    slidersPromo();
    accordion();
    slidersStatsCard();
    slidersAboutFounder();
    slidersOurServices();
    slidersPricing();
    submenuController();
    slidersReviews();
    fancyboxVideo();
    equalizeFinancingRows();
    window.addEventListener('resize', equalizeFinancingRows);
    faqDetailAnchors();
})
