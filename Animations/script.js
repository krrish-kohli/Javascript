// Add JavaScript code for your web site here and call it from index.html.
let bg = document.getElementById("bg");
let bird = document.getElementById("bird");
let forest = document.getElementById("forest");
let foliage = document.getElementById("foliage");
let text = document.getElementById("text");

let rates = {
    bg: 0.5,
    bird: 0.5,
    forest: 0.15,
    foliage: 0.15,
    text: 1
}

const handleScroll = () => {
    let scrollDistance = window.scrollY;
  
    bg.style.top = scrollDistance * /* background rate here */ rates['bg'] + 'px';
    /* move other images and text here*/
    bird.style.left = -scrollDistance * /* background rate here */ rates['bird'] + 'px';
    forest.style.top = -scrollDistance * /* background rate here */ rates['forest'] + 'px';
    foliage.style.top = scrollDistance * /* background rate here */ rates['foliage'] + 'px';
    text.style.top = scrollDistance * /* background rate here */ rates['text'] + 'px';
  }

window.addEventListener('scroll', handleScroll);
