// a fonction that on click display the menu

function clickFunction() {
  let div = document.getElementById('myLinks');
  if (div.style.display === 'block') {
    div.style.display = 'none';
  } else {
    div.style.display = 'block';
  }
}
