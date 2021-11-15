'use strict';

import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';

export default {
  name: 'Swiper',
  data() {
    return {
      swiper: null,
      images: [
        "../img/2018.png",
        "../img/2019.png",
        "../img/2020.png",
        "../img/canvas-2.png"
      ]
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      //direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
