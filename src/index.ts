import "./scss/main.scss";
import nature from "./assets/img/nature.jpg";
import musicImg from './assets/img/music.jpg';

const img = document.createElement("img");
img.src = nature;
document.body.appendChild(img);

const music = document.createElement("img");
music.src = musicImg;
music.height=300;
document.body.appendChild(music);

const sum = (a:number, b:number) => a+b;

console.log(sum(15,11))
