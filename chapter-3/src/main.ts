/**
 * Enums
 * Type aliases 
 * Type Tuple
 * Type instance => as
 * document element type
 */

// enums 
enum chapters{
    firstChapter = "Chapter-1",
    secondChapter = "Chapter-2",
    thirdChapter = "Chapter-3"
}
console.log(chapters);


// Type Aliases

type typeAliase = string | number;
type typeAliase1 = {id:number| string, username: string }

const user = <typeAliase1> {
id:4,
username: 'tanvir12'
}

// Type Tuple 
type arrayType = [number, string, boolean]
const numbers: arrayType =[24,'chapter-3', false] 



// Type instance => as && DOM
const heading = document.querySelector('h3') as HTMLHeadingElement; // more Specification
heading.textContent = 'This Heading Tag';
const image = document.getElementById('img') as HTMLImageElement; // more Specification
heading.textContent = 'This Heading Tag';
image.src = './image.jpg'

// possibly type 
const div: HTMLElement | null = document.getElementById('box') as HTMLDivElement;
