$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(49.28196,-123.10866);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  // var infowindow = new google.maps.InfoWindow({
  //   content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  // });

  // contact form
    $(function(){
      $("#dialog").dialog({
        modal: true,
        height: 250,
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
      $("#demo_2").on("click", function(){
        $("#dialog").dialog("open");
      });
    });
    // contact form

    // top navbar transparent
    window.onscroll = fadeNav;
    
      function fadeNav(){
        var offset = getScrollXY();
        //if y offset is greater than 0, set opacity to desired value, otherwise set to 1
        offset[1] > 0 ? setNavOpacity(0.5) : setNavOpacity(1.0);
      }

      function setNavOpacity(newOpacity){
        var navBar = document.getElementById("top_nav");
        navBar.style.opacity = newOpacity;
      }

      function getScrollXY(){
        var scrOfX = 0, scrOfY =0;
        if( typeof(window.pageYOffset) =='number'){
          //Netscap compliant
          scrOfY = window.pageYOffset;
          scrOfX = window.pageXOffset;
        }else if(document.body && (document.body.scrollLeft || document.body.scrollTop)){
          //DOM compliant
          scrOfY = document.body.scrollTop;
          scrOfX = document.body.scrollLeft;
        }else if(document.documentElement && (document.documentElement.scrollLeft ||
          document.documentElement.scrollTop )){
            //IE6 standards compliant
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
          }
          return [ scrOfX, scrOfY];
      }
    // top navbar transparent



});
