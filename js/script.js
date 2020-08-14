const people = [
  {
    id: "1",
    name: "Tanya Sinclair",
    title: "UX Engineer",
    testimony: `" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "`,
    image: "./images/image-tanya.jpg",
  },
  {
    id: "2",
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    testimony: `" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
    image: "./images/image-john.jpg",
  },
  {
    id: "3",
    name: "Aju Jayapalan",
    title: "Sr. QA Automation Engineer",
    testimony: `" Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies, nostra dui mollis vivamus congue feugiat commodo, sociis pellentesque molestie elementum conubia phasellus fusce. "`,
    image: "./images/image-aju.jpg",
  },
];

const divSlide = document.querySelector("#slide");
const totalSlides = people.length;
const btnPrevious = document.querySelector(".button-left");
const btnNext = document.querySelector(".button-right");
const divImageWrapper = document.querySelector(".image-wrapper");
const divImage = document.querySelector("#person-image");

const divSection2 = document.querySelector(".section-2");
const divName = document.querySelector(".section-2 .name");
const divTitle = document.querySelector(".section-2 .title");
const divNameTitle = document.querySelector(".section-2 .name-title");
const divTestimony = document.querySelector(".section-2 .testimony p");

btnPrevious.addEventListener("click", handleClickPrevious);
btnNext.addEventListener("click", handleClickNext);
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    handleClickPrevious();
  } else if (e.keyCode == 39) {
    handleClickNext();
  }
});

function getActivePersonId() {
  return parseInt(divSlide.dataset.personId);
}

function getNextPerson() {
  const currentPersonId = getActivePersonId();
  for (let i = 0; i < totalSlides; i++) {
    if (people[i]["id"] == currentPersonId) {
      if (i < totalSlides - 1) {
        return people[i + 1];
      }
    }
  }
  return people[0];
}

function getPreviousPerson() {
  const currentPersonId = getActivePersonId();
  for (let i = 0; i < totalSlides; i++) {
    if (people[i]["id"] == currentPersonId) {
      if (i > 0) {
        return people[i - 1];
      }
    }
  }
  return people[totalSlides - 1];
}

function handleClickNext() {
  const person = getNextPerson();
  changeSlide(person);
}

function handleClickPrevious() {
  const person = getPreviousPerson();
  changeSlide(person);
}

function changeSlide(objPerson) {
  divImage.classList.add("animateRight");
  divTestimony.classList.add("animateLeft");
  divNameTitle.classList.add("animateLeft");

  divSlide.dataset.personId = objPerson["id"];

  divImage.addEventListener("webkitAnimationEnd", () => {
    divImage.classList.remove("animateRight");

    divTestimony.classList.remove("animateLeft");
    divNameTitle.classList.remove("animateLeft");
  }); // Code for Chrome, Safari and Opera
  divImage.addEventListener("animationend", () => {
    divImage.classList.remove("animateRight");

    divTestimony.classList.remove("animateLeft");
    divNameTitle.classList.remove("animateLeft");
  }); // Standard syntax

  divImage.src = objPerson["image"];
  divImage.alt = objPerson["name"];
  divName.innerText = objPerson["name"];
  divTitle.innerText = objPerson["title"];
  divTestimony.innerText = objPerson["testimony"];
}
