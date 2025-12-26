$npm i bootstrap-icons

import asset from "C:/Users/audre/Documents/2022 PROJECTS/html/july/asset";


$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
 loop:true,
 items:4, 
 margin:0,
 autoplay:true,     //it can be false to stop sliding automatically
 autoplayTimeout:3000,    // sliding timing can be changed
 autoplayHoverPause:true,   // Image would be stopped, when you mouse hover over the image
 responsiveClass:true,
 nav:true
 });
});

