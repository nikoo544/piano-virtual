document.addEventListener('keypress', function (event){

     switch (event.key) {
         case 'a':
             let a = new Audio("./audio/white_keys/A.mp3");
             a.play();
             break
         case 's':
             let s = new Audio("./audio/white_keys/S.mp3");
             s.play();
             break
         case 'd':
             let d = new Audio("./audio/white_keys/D.mp3");
             d.play();
             break
         case 'f':
             let f = new Audio("./audio/white_keys/F.mp3");
             f.play();
             break
         case 'g':
             let g = new Audio("./audio/white_keys/G.mp3");
             g.play();
             break
         case 'h':
             let h = new Audio("./audio/white_keys/H.mp3");
             h.play();
             break
         case 'j':
             let j = new Audio("./audio/white_keys/J.mp3");
             j.play();
             break
         case 'w':
             let w = new Audio("./audio/black_keys/W.mp3");
             w.play();
             break
         case 'e':
             let e = new Audio("./audio/black_keys/E.mp3");
             e.play();
             break
         case 't':
             let t = new Audio("./audio/black_keys/T.mp3");
             t.play();
             break
         case 'y':
             let y = new Audio("./audio/black_keys/Y.mp3");
             y.play();
             break
         case 'u':
             let u = new Audio("./audio/black_keys/U.mp3");
             u.play();
             break
         default: console.log(event.key)
     }



 }, false);

// function playNote({keyCode}) {
//     const audio = document.querySelector(`audio[id="${keyCode}"]`),
//     key = document.querySelector(`.key[data-key="${keyCode}"]`);
//
//     if(!key) return;
//
//     key.classList.add('playing');
//     audio.play();
// }
//
// window.addEventListener('keydown',playNote);