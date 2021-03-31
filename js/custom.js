// var banner = document.getElementById('banner')
// var lastBanner = banner.getElementsByClassName('bannerImg');

// lastBanner = lastBanner[lastBanner.length-1];
// var dummyX = null;

// window.onscroll = function(){
//   var y = document.body.getBoundingClientRect().top;
//   var w = banner.scrollWidth-window.innerWidth+window.innerHeight;
//   banner.scrollLeft = -y;
//   document.body.style.height = w + "px";
//   dummyX = lastBanner.getBoundingClientRect().left+window.scrollY;

//   var diff = window.scrollY - dummyX;
//   if(diff > 0){
//     window.scrollTo(0, diff);
//   } else if(window.scrollY == 0){
//     window.scrollTo(0, dummyX);
//   };
// };

  
// window.onresize = resize;
// resize();

// function resize(){
//   var w = banner.scrollWidth-window.innerWidth+window.innerHeight;
//   document.body.style.height = w + "px";

//   dummyX = lastBanner.getBoundingClientRect().left+window.scrollY;
// }