/* Create cat object */

/* Create event listener to use textContent to replace cat name text box into 'your cat' */


  let button = document.querySelector('#addName');
  let text = document.querySelector('#catName');
  button.addEventListener('click', function() {
    document.querySelector(".yourCat").textContent = "WHAT HERE"; // how do I pull text from box to replace??
    console.log('clicked');
  }, false);


/* Create event listener to increment numbers after every click on the cat */



/* After 10 clicks, kitten grows, replace image */

/* After 20 clicks, kitten is adult, replace image */

/* Every 5 clicks, food bowl appears? */
