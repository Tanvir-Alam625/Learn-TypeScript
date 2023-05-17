"use strict";
/**
 * Enums
 * Type aliases
 * Type Tuple
 * Type instance => as
 * document element type
 */
// enums 
var chapters;
(function (chapters) {
    chapters["firstChapter"] = "Chapter-1";
    chapters["secondChapter"] = "Chapter-2";
    chapters["thirdChapter"] = "Chapter-3";
})(chapters || (chapters = {}));
console.log(chapters);
const user = {
    id: 4,
    username: 'tanvir12'
};
const numbers = [24, 'chapter-3', false];
// Type instance => as && DOM
const heading = document.querySelector('h3'); // more Specification
heading.textContent = 'This Heading Tag';
const image = document.getElementById('img'); // more Specification
heading.textContent = 'This Heading Tag';
image.src = './image.jpg';
// possibly type 
const div = document.getElementById('box');
