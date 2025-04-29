"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    let heading = document.getElementById("heading");
    let sentence = "Hi I'm Daniel Kasprzyk - aka Daniooo";
    let index = 0;
    function printLetter() {
        if (index < sentence.length && heading != null) {
            heading.innerHTML += sentence.charAt(index);
            index++;
            setTimeout(printLetter, 25);
        }
        else
            fadeInParagraphs();
    }
    function fadeInParagraphs() {
        let paragraphs = document.getElementsByClassName("aboutme-text");
        for (let i = 0; i < paragraphs.length; i++)
            paragraphs[i].style.opacity = "1";
    }
    printLetter();
});
