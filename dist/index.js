(function () { 
  window.addEventListener('DOMContentLoaded', (event) => {

    const littleContainers = document.querySelectorAll('.category'); //sections which define trigger position on scroll
    var masterContainer = { //scroll OBJ where each section is a property
      // category-0:[width, distance from top]
      // ...
      // category-n:[width, distance from top]
    }; 


    function name(i) { // returns unique section ID 
      return 'category-' + i;
    }

    var elDimensions;
    (elDimensions = function() {

    var masterHeight = 0;
    var index = 0;
    for (let i=0;i < littleContainers.length; i++) {
      let curr = littleContainers[i].getElementsByTagName('img');

      let widthEl = 0; //container width
      for (let i=0; i < curr.length;i++) {
        let rect = curr[i].getBoundingClientRect();
        widthEl += rect.right - rect.left + 50;
        console.log(rect);
      }
      let widthTransform = widthEl + 100;
      let fixedEl = littleContainers[i].firstElementChild;
      fixedEl.style.width = widthTransform + 'px';
      littleContainers[i].style.width = widthTransform + 'px';
      littleContainers[i].firstElementChild.style.width = widthTransform + 'px';
      littleContainers[i].style.height = widthTransform + 'px';

      document.getElementById(name(i)).style.top = masterHeight + 'px';



      masterContainer.sumTotal = i;
      masterContainer[name(i)] = [ widthTransform , masterHeight, i];
      masterHeight += widthTransform;



      if ( i % 2 != 0 ) {
        fixedEl.style.transform = 'translate3d(-' + (widthTransform - window.innerWidth) + 'px, 0, 0)';
      }
     

    }
    document.body.style.height = masterHeight + 'px';
    var scrollPos =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    for ( var prop in masterContainer ) {
      let isPast = scrollPos > masterContainer[prop][1]  ? true : false;  
        
      if ( masterContainer[prop][2] % 2 == 0 && isPast ) {
        document.getElementById(prop).firstElementChild.style.transform = 'translate3d(-' + (masterContainer[prop][0]- window.innerWidth) + 'px, 0, 0)';

      }

    }

    })();




    var actArray = document.getElementsByClassName('active');
    var intArray = document.getElementsByClassName('interim');
    var catText = document.getElementById('cat-name');
    window.addEventListener('scroll', function() {
      var raf = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame;

      if (raf) {
          activeElementTracking();      
      }
    });




    var resizeTimer;

  window.addEventListener('resize', function(e) {
    var raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;

      if (raf) {
              elDimensions();
            }
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            
          // Run code here, resizing has "stopped"
            if (raf) {
              elDimensions();
            }      
        }, 250);

});


  function checkVerticalArea(scrollPos) {
    for (let i=masterContainer.sumTotal;i >= 0; i-- ) { //INCREMENTING backwards
      let diff = masterContainer[name(i)][1] - scrollPos;
      if ( diff <= 0) {
        catText.innerHTML = document.getElementById(name(i)).getAttribute('data-src');
        return [i, diff];
      }
    }
  }

  function removeAll(className, c) {
    i = 0;
    while (c[0] && i < 100) {
      c[0].classList.remove(className);
      i++;
    }

  }

    var activeElementTracking;
    (activeElementTracking = function() {

      var scrollPos =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      

      let elMeta = checkVerticalArea(scrollPos);
      objArray = masterContainer[name(elMeta[0])];
      if (Math.abs(elMeta[1]) > objArray[0] - window.innerHeight) {
          removeAll('active', actArray);
          document.getElementById(name(elMeta[0])).classList.add('interim');


      } else {
        if ( actArray.length > 1 ) {
          actArray[0].classList.remove('active');
        }
          document.getElementById(name(elMeta[0])).firstElementChild.classList.add('active');


          let b = (objArray[0] - window.innerWidth ) / (objArray[0] - window.innerHeight)
          if (objArray[2] % 2 == 0 ) {
            document.getElementById( name(elMeta[0]) ).firstElementChild.style.transform = 'translate3d(-' + Math.abs(b * elMeta[1]) + 'px, 0, 0)';
          } else {
            document.getElementById( name(elMeta[0]) ).firstElementChild.style.transform = 'translate3d(-' + (objArray[0] - window.innerWidth - Math.abs(b * elMeta[1]) ) + 'px, 0, 0)';
          }


          removeAll('interim', intArray);

      }

    })(); // END OF ACTIVE ELEMENT TRACKING 

// wait for document ready
  /*
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#category-0", 1,   {x: "-20%"})	
  .to("#category-0", 1,   {x: "-40%"})
  .to("#category-0", 1,   {x: "-60%"})
  .to("#category-0", 1,   {x: "-80%"})

console.log(horizontalSlide);
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#the-big-container",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#the-big-container")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
  */

  });

})();

