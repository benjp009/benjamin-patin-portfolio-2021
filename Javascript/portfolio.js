// eslint-disable-next-line no-unused-vars
const portfolio = [{
  title: 'Tonic',
  clientInfo: {
    clientName: 'Canopy',
    clientProjectStyle: 'Back End Dev',
    clientProjectYear: '2015',
  },
  workSectionImage: {
    src: 'ressources/Work-1.png',
    alt: 'some picture about Benjamin Work',
  },
  projectInfoShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectInfoLong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  languageUsed: ['html', 'css', 'JavaScript'],
},
{
  title: 'Multi-Post Stories',
  clientInfo: {
    clientName: 'Gertrude',
    clientProjectStyle: 'Full Stack Dev',
    clientProjectYear: '2018',
  },
  workSectionImage: {
    src: 'ressources/Work-2.png',
    alt: 'Picture reprenting the second work done by Benjamin',
  },
  projectInfoShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectInfoLong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  languageUsed: ['html', 'css', 'JavaScript'],
},
{
  title: 'Tonic',
  clientInfo: {
    clientName: 'Canopy',
    clientProjectStyle: 'Back End Dev',
    clientProjectYear: '2015',
  },
  workSectionImage: {
    src: 'ressources/Work-1.png',
    alt: 'some picture about Benjamin Work',
  },
  projectInfoShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectInfoLong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  languageUsed: ['html', 'css', 'JavaScript'],
},
{
  title: 'Multi-Post Stories',
  clientInfo: {
    clientName: 'Gertrude',
    clientProjectStyle: 'Full Stack Dev',
    clientProjectYear: '2018',
  },
  workSectionImage: {
    src: 'ressources/Work-2.png',
    alt: 'Picture reprenting the second work done by Benjamin',
  },
  projectInfoShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectInfoLong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  languageUsed: ['html', 'css', 'JavaScript'],
},
]

let projectDetails = '';
for ( let index in portfolio) {
  // let projectName = arr[index];
projectDetails +=
  `<section class='grid-item-1' id='grid'>
      <img class='work-section-image' src='${portfolio[index].workSectionImage.src}' alt='Picture reprenting the first work done by Benjamin'>
      <h4 id='popup-title'>${portfolio[index].title}</h4>
      <ul class='client-info'>
        <li class='client-name'>${portfolio[index].clientInfo.clientName}</li>
        <img class='client-section-counter' src='ressources/Counter.png' alt='Counter'>
        <li class='project-style'>${portfolio[index].clientInfo.clientProjectStyle}</li>
        <img class='client-section-counter' src='ressources/Counter.png' alt='Counter'>
        <li class='project-year'>${portfolio[index].clientInfo.clientProjectYear}</li>
      </ul>
      <p class='project-info'>${portfolio[index].projectInfoShort}</p>
      <ul class='language-used'>
        <li><div class='tags'>${portfolio[index].languageUsed[0]}</div></li>
        <li><div class='tags'>${portfolio[index].languageUsed[1]}</div></li>
        <li><div class='tags'>${portfolio[index].languageUsed[2]}</div></li>
      </ul>
    <button type='button' class='button see-project-button'  id='btn'>See Project!</button>
  </section>`
}
document.getElementById('portfolio').innerHTML = projectDetails;
