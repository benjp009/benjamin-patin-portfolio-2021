// eslint-disable-next-line no-unused-vars
const projects = {
  Project1: {
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
   },
 }

 let arr = ['Project1', 'Project2' ];
 for ( let index in arr) {
   let projectName = arr[index];
   document.getElementById("grid-portfolio").innerHTML += `some text`;
   }
