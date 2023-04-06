//testing the repo push
const descriptions = document.querySelectorAll(".description-display");

// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     console.log(content);
//   }

// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
  
//     if (content.length > 250) {
//       content = content.slice(0, 250);
//       content = content + "...";
//     }
  
//     console.log(content);
//   }

//   for (let desc of descriptions.values()) {
//     let content = desc.innerText;
  
//     if (content.length > 250) {
//       content = content.slice(0, 250);
//       content = content + "...";
//     }
  
//     desc.innerText = content;
//   }

// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
  
//     if (content.length > 250) {
//       content = content.slice(0, 250);
//       content = content + '<a href="#">...</a>';
//     }
  
//     desc.innerText = content;
//   }

for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }

  const ratings = document.querySelectorAll(".rating-display .value");

//   for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
//     console.log(ratingValue);
//   }

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
  
//     if (ratingValue > 4.7) {
//       rating.style.fontWeight = "bold";
//     }
//   }

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
  
//     if (ratingValue > 4.7) {
//       rating.style.fontWeight = "bold";
//       rating.style.color = "#3ba17c";
//     }
//   }

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  const parks = document.querySelectorAll(".park-display");

  const numberParks = parks.length;

  const newElement = document.createElement("div");

  newElement.innerText = `${numberParks} exciting parks to visit`;

  newElement.classList.add("header-statement");

  const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);