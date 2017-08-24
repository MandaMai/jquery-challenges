/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.X
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.X
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"X
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   $('h1').css("color", "rgb(0,0,0)");//rgb(0,0,0)=black  rgb(255,0,0)=red
   $('h5:odd').hide();
$('aside p').remove();




   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads


   $(function() {

    $('h1').click(function(){
      if($('h1').css('color')=="rgb(0, 0, 0)"){
        $('h1').css("color", "rgb(255, 0, 0)");
      } else {
        $('h1').css("color", "rgb(0, 0, 0)");
      }
   });

  //$("p").html($("p").html().replace('Bacon','LASER VISION'));

   $('.post').slice(-2).remove();
   $('.post').slice(-1).remove();
   $('img').attr("src",'https://mi-od-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/lbm%20characters/primary/70900_1to1_batman_360_480.png?l.r2=1668006940');



   })

 })();
