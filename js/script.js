import { reviews } from './reviews.js';
console.log(reviews);

const hamburgerElement = document.querySelector('#myButton');
 const navElement = document.querySelector('.menuLinks');
 
 hamburgerElement.addEventListener('click', () => {
     hamburgerElement.classList.toggle('open');
     navElement.classList.toggle('open');
 })


// create an empty card
const myTarget = document.querySelector('#reviews');

for (let x = 0; x < reviews.length; x++) {
    //create a section
    const mySection = document.createElement('section');
    const myName = document.createElement('h3');
    myName.textContent = reviews[x].name;

    const myReview = document.createElement('p');
    myReview.textContent = reviews[x].text;
    const myRating = document.createElement('div');

for (let step = 0; step < reviews[x].stars; step++) {
    const genIndicator = document.createElement('img');
    genIndicator.width = 20
    genIndicator.src = "05 auto dealer/icons/star-sharp-svgrepo-com.svg";
    myRating.appendChild(genIndicator);
}
    // build the figure with child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRating)
    mySection.appendChild(myReview);

    //add a new card to a page
    myTarget.appendChild(mySection);
}
