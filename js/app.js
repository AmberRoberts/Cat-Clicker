/* Create cat object */

/* Event listener to replace 'your cat' with text box entry */

  let button = document.querySelector('#addName');

  button.addEventListener('click', function() {
    let text = document.getElementById('catName').value;
    document.querySelector(".yourCat").textContent = text;
    console.log('clicked');
  }, false);


/* Create event listener to increment numbers after every click on the cat */



/* After 10 clicks, kitten grows, replace image */

/* After 20 clicks, kitten is adult, replace image */

/* Every 5 clicks, food bowl appears? */
