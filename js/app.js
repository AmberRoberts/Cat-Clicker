/* Create cat object */

/* Event listener to replace 'your cat' with text box entry */

  let button = document.querySelector('#addName');

  button.addEventListener('click', function() {
    let text = document.getElementById('catName').value;
    let catPic = document.getElementById('catPic');
    document.querySelector(".yourCat").textContent = text;
  }, false);


/* Create event listener to increment numbers after every click on the cat */

let catPic = document.querySelector('#catPic');
let petNumber = 0;

catPic.addEventListener('click', function() {
  petNumber++;
  document.querySelector(".petNumber").textContent = petNumber;
});

let teeter = document.querySelector('#teeter');
let teeterPets = 0;

teeter.addEventListener('click', function() {
  teeterPets++;
  document.querySelector('.teeterPets').textContent = teeterPets;
});

/* After 10 clicks, kitten grows, replace image */

/* After 20 clicks, kitten is adult, replace image */

/* Every 5 clicks, food bowl appears? */
