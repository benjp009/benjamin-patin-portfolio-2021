// eslint-disable-next-line no-unused-vars
function clickFunction() {
  const div = document.getElementById('myLinks');
  if (div.style.display === 'block') {
    div.style.display = 'none';
  } else {
    div.style.display = 'block';
  }
}
//
// const popup = document.getElementById('popup');
//
// const seeProjectButton = document.querySelectorAll('.see-project-button');
// seeProjectButton.forEach((element) => {
//   element.addEventListener('click', () => {
//     popup.style.display = 'block';
//     console.log("yeah");
//
//     const projectDetails = getProjectDetails(element.id);
//     document.getElementById('popup-project-title').innerHTML = projectDetails.name;
//     let details = '';
//   });
// })

// let btn = document.querySelector('#btn');
//
// function display() {
//     alert('It was clicked!');
// }
//
// btn.addEventListener('click',display);

// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "grid";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
