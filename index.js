let inp = document.querySelector("#input");
const sub = document.querySelector("#sub");
const div1 = document.querySelector(".name");
const div2 = document.querySelector(".rick");
const role = document.querySelector("#role");

let x = inp.value;
// var mediaQuery = window.matchMedia('(max-width: 700px)')
function click_it(){
    div1.style.display = "none";
    div2.style.display = "block";
    role.textContent = `${x} you got Rick rolld nigga`;
    var video = document.createElement('video');
    video.src = 'www.mp4';
    video.autoplay = true;
    video.loop = true;
    video.width = 300;
    video.height = 360;
    // if (mediaQuery.matches) {
    //     document.body.style.width = '';
    // }  
    document.querySelector('.rick').appendChild(video);
};