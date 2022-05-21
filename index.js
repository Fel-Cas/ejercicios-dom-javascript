import Hamburguer from "./dom/hamburguesa.js";
import {DigitalClock,Alarm} from './dom/tiempo.js'
import{ shortcuts,moveBall}from './dom/teclado.js'
import countDown from './dom/countDown.js'
import scrollTopButton from "./dom/button_scroll.js";
import darkTheme from "./dom/theme_dark.js";
import responsiveMedia from "./dom/object_responsive.js";
import resposiveTester from "./dom/responsive_tester.js";
import userDeviceInfo from "./dom/user-device.js";
import networkStatus from "./dom/network_stattus.js";
import webcam from "./dom/webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/search_filter.js";
import draw from "./dom/winner.js";
import slider from "./dom/slider_responsive.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_smart.js";
import validationForm from "./dom/validation_form.js";
import speechReader from "./dom/narrator.js";
let d=document;
d.addEventListener('DOMContentLoaded',e=>{
    Hamburguer('.panel-btn','.panel','.menu a');
    DigitalClock('tiempo','#btn-iniciar-reloj','#btn-parar-reloj');
    Alarm('assets/alarm.mp3','#btn-iniciar-alarma','#btn-parar-alarma');
    countDown('2021-12-13 23:58:00','.count-down','Feliz año!!!!');
    scrollTopButton('.scroll-top-btn');
    responsiveMedia('youtube',
    '(min-width: 700px)',
    `<a href='https://youtu.be/NNsINNuuaok'>Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/NNsINNuuaok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmaps',
    '(min-width: 700px)',
    `<a href='https://goo.gl/maps/uy4CSr7hJQMzWpXY6'>Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.969412163257!2d-75.57103028485578!3d6.2677532278215295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428e0c9c8772f%3A0x10cce7ece69b2e2b!2sUniversidad%20de%20Antioquia!5e0!3m2!1ses!2sco!4v1640319161129!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    resposiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webcam('webcam');
    getGeolocation('geolocation');
    searchFilter('.card-filter','.card');
    draw('#winner-btn','.player');
    slider();
    scrollSpy();
    smartVideo();
    validationForm();
})
darkTheme('.dark-theme-btn','dark-mode');
networkStatus();
speechReader();
d.addEventListener('keydown',(e)=>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
});
