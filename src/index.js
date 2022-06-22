console.log(data);
// Step 1: Download the template and open it with VS Code
// Step 2: Explore the HTML and the data
// Step 3: Read the instructions carefully
// Step 4: Query the elements that we will need to use from the page
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog)
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available whent he app starts, call displayDog when we click a dog list item, etc)
// !WRITE YOUR CODE BELOW!
// !- You'll find a variable called data in the console.log. That's your list of dogs
// !- Render the top list of dogs using the list item template you'll find on the HTML file
console.log(data)
let topDogList = document.querySelector(".dogs-list");

let dogCard = document.querySelector(".main__dog-section");

function addDogToTop (dog){
    let title = document.createElement("li");
    title.className = "dogs-list__button";
    title.textContent = dog.name
    topDogList.append(title);
}

function showDogCard(dog) {
    dogCard.textContent = "";

    let dogCardContainer = document.createElement("div");
    dogCardContainer.className = "dogs-card";

    let dogCardTitle = document.createElement("h2");
    dogCardTitle.className = "dogs-card__title";
    dogCardTitle.textContent = dog.name;
    let dogImg = document.createElement("img");
    dogImg.className = "dogs-card__image";
    dogImg.src = dog.image;

    let dogDescription = document.createElement("div");
    dogDescription.className = "main__dog-section__desc";
    let dogDescriptionBio = document.createElement("h3");
    dogDescriptionBio.textContent = "Bio";
    let dogDescriptionP = document.createElement("p");
    dogDescriptionP.textContent = dog.bio;
    
    dogDescription.append(dogDescriptionBio,dogDescriptionP);

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "main__dog-section__btn"; 
    
    dogCardContainer.append(dogCardTitle, dogImg, dogDescription, buttonDiv);

    dogCard.append(dogCardContainer);
}

for(let dogs of data){
    addDogToTop(dogs);
}

showDogCard(data[0]);
console.log(showDogCard);

// !- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// !- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// !- There should be only one card at the time on the screen
// !- The card should have a button that toggles for the selected dog between good dog/ bad dog

// !Tips
// !- Take advantage of scope in JS to have access to the data you need
// !- Remember you can add event listeners to any element on the page

// !Challenge
// !You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
// !You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.
