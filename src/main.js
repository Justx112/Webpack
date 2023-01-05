import "./style.scss"
import { arrayImageAndDiscriptiob } from "./imageImport.js"
import { arrayAudioAndDiscription } from "./audioImport";
import { arrayVideoAndDiscription } from "./videoimport";
import { addContent } from "./creatCard.js"
import '@csstools/normalize.css';

const parentElement = document.querySelector(".container");


addContent(parentElement, arrayImageAndDiscriptiob, "img")
addContent(parentElement, arrayAudioAndDiscription, "audio")
addContent(parentElement, arrayVideoAndDiscription, "video")