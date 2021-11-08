// a fonction that on click display the menu

function myFunction() {
  let const = document.getElementById('myLinks');
  if (const.style.display === 'block') {
    const.style.display = 'none';
  } else {
    const.style.display = 'block';
  }
}
