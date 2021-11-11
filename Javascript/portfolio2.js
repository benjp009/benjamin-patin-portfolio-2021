const seeProjectButton = document.querySelectorAll (
  '.see-project-button'
);

seeProjectButton.forEach((element) => {
  element.addEventListener('click', function(event) {
    console.log(portfolio[element.id])
  }
)
}
)
