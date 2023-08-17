import JQ from './modules/jquery.js'
import owlCarousel from './modules/owlCarousel.js'

import faqList from './modules/faqList.js'
import menub from './modules/menub.js'


const bannerOwl = $('.banner__owlcarousel')
$(document).ready(function () {
  bannerOwl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
  })
})


const catalogOwl = $('.catalog__owlcarousel')
$(document).ready(function () {
  catalogOwl.owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    responsive: {
      0:{
        dots: true,
        items: 1
      },
      768:{
        dots: true,
        items: 2
      },
      1920:{
        dots: false,
        items: 3
      }
    }
  })
})

const bestsellersOwl = $('.bestsellers__owlcarousel')
$(document).ready(function () {
  bestsellersOwl.owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    responsive: {
      0:{
        dots: true,
        items: 1
      },
      768:{
        dots: true,
        items: 2
      },
      1024:{
        dots: true,
        items: 3
      },
      1440:{
        dots: false,
        items: 4
      },
      1920:{
        dots: false,
        items: 5
      }
    }
  })
})

const newsOwl = $('.news__owlcarousel')
$(document).ready(function () {
  newsOwl.owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0:{
        dots: true,
        items: 1
      },
      768:{
        dots: true,
        items: 2
      },
      1024:{
        dots: true,
        items: 3
      },
      1440:{
        dots: false,
        items: 4
      },
      1920:{
        dots: false,
        items: 4
      }
    }
  })
})