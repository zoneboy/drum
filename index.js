//KEYCODES GOTTEN FROM KEYCODE.INFO

var keys = document.querySelectorAll('.key');
  const allKeys = Array.from(document.querySelectorAll('.key'));

//FUNCTION TO MAKE TRANSITION END BY REMOVING THE .PLAYING CLASSLIST
  function removeTransition(e) {
    if (e.propertyName == 'transform') {
      e.target.classList.remove('playing');
    }
    
    //console.log(e)
  }

  // Function to make audio work when clicked
for (let i = 0; i < keys.length; i++) { //LOOP THROUGH THE KEYS
  keys[i].addEventListener("click", function(e) { //ATTACH AN EVENT TO ALL ITERATED KEYS
    // console.log(keys[i])
    const clickedKey = document.querySelector(`.key[data-key="${keys[i].dataset.key}"]`); //WE WANT TO ADD EFFECT WHEN BUTTON CLICKED
    clickedKey.classList.add('playing'); //EFFECT ADDED VIA THE .PLAYING CLASSLIST
    keys[i].addEventListener("transitionend", removeTransition) //EFFECT REMOVED BY .PLAYING PLAYLIST
    const pressAudio = document.querySelector(`audio[data-key="${keys[i].dataset.key}"]`); //SELECT THE AUDIO DATA-KEY USING TEMPLATE LITERALS
  // console.log(e.keyCode)
  if(!pressAudio){
    return;
  } pressAudio.play(); //.PLAY IS A JS METHOD TO PLAY MEDIA AUTOMATICALLY
  pressAudio.currentTime=0; //JS DOESN'T HAVE A STOP SO WE SET CURRENT TO 0 TO STOP
  });
}

//REPLICA FUNCTION FOR WHEN BUTTON PRESSED
window.addEventListener("keydown", function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(e.keyCode)
  if(!audio){
    return;
  } audio.play();
  audio.currentTime=0;
  key.classList.add('playing');
  for(let i = 0; i < keys.length; i++){
  keys[i].addEventListener("transitionend", removeTransition)
}


})

//Another function to make audio work when clicked. DISADVANTAGE IS NOT ALL CLICKED PART WILL WORK
// window.addEventListener('click', function(e){
//   console.log('e.path[1].dataset.key')
//   const maudio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`);
//   const mkey = document.querySelector(`.key[data-key="${e.path[1].dataset.key}"]`);
//   // console.log(e.keyCode)
//   if(!maudio){
//     return;
//   } maudio.play();
//   maudio.currentTime=0;
//   mkey.classList.add('playing');
//   for(let i = 0; i < keys.length; i++){
//   keys[i].addEventListener("transitionend", removeTransition)
// }
// })
