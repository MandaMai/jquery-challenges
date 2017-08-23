/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  let shoot1=$("#teamone-shoot");
  let shoot2=$("#teamtwo-shoot");
  let resetBtn=$("#reset");
  let teamOnePercent = setPercent();
  let teamTwoPercent = setPercent();
  console.log("team percentages for checking: team 1: " + teamOnePercent + " team 2: " + teamTwoPercent);

  let resetNum = $("#num-resets");
  let teamOneShots = $("#teamone-numshots");
  let teamOneHit = $("#teamone-numhits");
  let teamOneWins=$("#teamone-wins");
  let teamTwoShots = $("#teamtwo-numshots");
  let teamTwoHit = $("#teamtwo-numhits");
  let teamTwoWins=$("#teamtwo-wins");
  let winValue = false;
  let yay = $("#yay")[0];
  let intro = $("#intro")[0];
  let reset = $("#resetSnd")[0];
  let noHit = $("#noHit")[0];
  let bk = $("#background");
  //intro.play();


  function setPercent (){
      var percent = Math.random();
      while (percent < .5 || percent > .7){
        percent = Math.random();
        console.log(percent);
      }
        return percent;
    }

    function winTest(teamPercent) {
  let chance = Math.random();
  console.log("team chance: " + teamPercent + " chance: " + chance);
  if(chance>teamPercent) {
    return true;
  } else {
    return false;
  }
}


  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){



resetBtn.click(function(){
        //what runs when the button is clicked
//resetSnd.play();
resetNum.html(parseInt(resetNum.html()) + 1);
   if(teamOneHit.html()>teamTwoHit.html()){//team one wins
     //console.log ("1 wins team1: " + teamOneHit.html()) + " team2: " + teamTwoHit.html());
     teamOneWins.html(parseInt(teamOneWins.html()) + 1);
   }
   if (teamOneHit.html()<teamTwoHit.html()){
     //console.log ("2 wins team1: " + teamOneHit.html() + " team2: " + teamTwoHit.html());
     teamTwoWins.html(parseInt(teamTwoWins.html()) + 1);//team two wins
   }

  teamOneShots.html(0);
  teamOneHit.html(0);
  teamTwoShots.html(0);
  teamTwoHit.html(0);
  //reset background
  let url = "assets/images/hockey.jpg"
  $('body').css('background-image', 'url(' + url + ')');
  //$('body').css({background-image:'url(../images/hockey.jpg)'});

      })//what happens when the event happens

shoot1.click(function(){
        //what runs when the button is clicked
winValue = winTest(teamOnePercent);
  teamOneShots.html(parseInt(teamOneShots.html()) + 1);
  if(winValue===true)
    {
      //change background image
      //background-image: url("../images/hockey.jpg");
    teamOneHit.html(parseInt(teamOneHit.html()) + 1);
    //$('body').css({background-image:'url(../images/bruinsGoal.jpg)'});
    let url = "assets/images/bruinsGoal.jpg"
    $('body').css('background-image', 'url(' + url + ')');
    yay.play();
  } else {
    noHit.play();
  }
      })//what happens when the event happens

shoot2.click(function(){
        //what runs when the button is clicked
winValue = winTest(teamTwoPercent);
  teamTwoShots.html(parseInt(teamTwoShots.html()) + 1);
  if(winValue===true)
    {
      //change background image
    teamTwoHit.html(parseInt(teamTwoHit.html()) + 1);
    let url = "assets/images/canucksGoal.jpeg"
    $('body').css('background-image', 'url(' + url + ')');
    yay.play();
  } else {
    noHit.play();
  }
      })//what happens when the event happens


  })

})();
