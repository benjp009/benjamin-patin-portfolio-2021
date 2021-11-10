// eslint-disable-next-line no-unused-vars
let portfolio = {
  title: 'Tonic',
  clientInfo: {
    clientName: "Canopy",
    clientProjectStyle: 'Back End Dev',
    clientProjectYear: '2015',
  },
  workSectionImage: {
    src: "ressources/Work-1.png",
    alt: "some picture about Benjamin Work"
  },
  projectInfoShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectInfoLong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  languageUsed: ['html', 'css', 'JavaScript'],
  }

// let title = document.querySelector('#popup-title')
// let clientName = document.querySelector('#client-name')
// let clientProjectStyle = document.querySelector('#project-style')
// let clientProjectYear = document.querySelector('#project-year')
// let workSectionImage = document.querySelector('#popup-image')
// let projectInfoShort = document.querySelector('#project-info')
// let tags = document.querySelector('#tags')

// for (i = 0; i < portfolio.length; i++) {
  document.getElementById("popup-title").innerHTML = portfolio.title;
  document.getElementById("client-name").innerHTML = portfolio.clientInfo.clientName;
  document.getElementById("project-style").innerHTML = portfolio.clientInfo.clientProjectStyle;
  document.getElementById("project-year").innerHTML = portfolio.clientInfo.clientProjectYear;
  document.getElementById("popup-image").src = portfolio.workSectionImage.src;
  document.getElementById("popup-image").alt = portfolio.workSectionImage.alt;
  document.getElementById("projectInfoShort").innerHTML = portfolio.projectInfoShort;
  document.getElementById("tags").innerHTML = portfolio.languageUsed[0];
  document.getElementById("tags").innerHTML = portfolio.languageUsed[1];
  document.getElementById("tags").innerHTML = portfolio.languageUsed[2];
