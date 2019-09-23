console.log("main.js is linked");

const printToDom = (stringToPrint, divID) => {
  document.getElementById(divID).innerHTML = stringToPrint;
}

const htmlIDs = [{
  nav: 'navToBio',
  page: 'bioPage',
  function: 'printBio'
},{
  nav: 'navToTechnologies',
  page: 'technologiesPage',
  function: 'printTechnologies'
},{
  nav: 'navToProjects',
  page: 'projectsPage',
  function: 'printProjects'
}];

const projects = [
{
title: "Pet Adoption", 
screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
description: "Creates cards based on which button is clicked", //'the what', 'the why', and 'the how'.
technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
available: true,
url: "https://github.com/ivannio/pet-adoption",
githubUrl: "https://github.com/ivannio/pet-adoption"
},
{
title: "Cool Project", 
screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
description: "This is the best project", //'the what', 'the why', and 'the how'.
technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
available: false,
url: "https://github.com/nss-evening-cohort-8/js-part-deux",
githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
title: "Cool Project", 
screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
description: "This is the best project", //'the what', 'the why', and 'the how'.
technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
available: true,
url: "https://github.com/nss-evening-cohort-8/js-part-deux",
githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
title: "Cool Project", 
screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
description: "This is the best project", //'the what', 'the why', and 'the how'.
technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
available: true,
url: "https://github.com/nss-evening-cohort-8/js-part-deux",
githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
} 
];

const printProjects = (arr) => {
  clearPage();
  let stringToPrint = "";
  for (let i = 0; i < arr.length; i ++) {
    let project = arr[i];
    if (project.available) {
    stringToPrint += `
      <div class="project-card">
        <h3>${project.title}</h3>
        <img class="project-img" src="${project.screenshot}">
        <p>${project.description}</p>  
        <p>Technologies used: ${project.technologiesUsed}</p>
        <h6>${project.url}</h6>
        <h6>${project.githubUrl}</h6>
      </div>
      `;
    } printToDom(stringToPrint, "projectsPage");
  }   
}

const printBio = () => {
  clearPage();
  let stringToPrint = `<p>Aenean pretium nisi ut porttitor euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean elementum lectus sem, sit amet sagittis nulla rutrum pharetra. Quisque quis tortor diam. Nunc consectetur est ex, sed pellentesque tellus elementum et. Vivamus nec arcu eget nisi molestie viverra malesuada quis nibh. Vestibulum dictum in odio id mollis. Fusce id sapien sit amet arcu luctus dignissim luctus non eros. Mauris a faucibus quam, nec viverra lectus. Integer interdum pharetra diam, a accumsan justo. Nam malesuada magna tellus, vel tempor ex dictum quis. In lacinia odio at tortor porta, sit amet dictum lorem volutpat. Curabitur in interdum augue.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et interdum libero, nec pellentesque felis. Integer a consequat est. Nullam lacinia, eros quis finibus efficitur, sapien dolor pretium magna, nec mollis arcu eros at dui. Aliquam pulvinar enim ac quam ultricies, nec imperdiet nulla consequat. Aenean iaculis ipsum eget malesuada sodales. In ac ultrices lectus. Ut consequat quam vitae turpis facilisis, in maximus ante molestie. Etiam ac scelerisque odio.</p>`;
  printToDom(stringToPrint, "bioPage");  
}

const printTechnologies = () => {
  clearPage();
  let stringToPrint = `<h1 class="dm-serif">Technologies Learned:</h1>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Visual Studio Code</li>
      <li>Version control using Git and GitHub</li>    
    </ul>`;
  printToDom(stringToPrint, "technologiesPage");
}

const clearPage = () => {
  document.getElementById('bioPage').innerHTML = "";
  document.getElementById('technologiesPage').innerHTML = "";
  document.getElementById('projectsPage').innerHTML = "";
}

document.getElementById("navToBio").addEventListener('click', () => {
  printBio();
});
document.getElementById("navToTechnologies").addEventListener('click', () => {
  printTechnologies();
});
document.getElementById("navToProjects").addEventListener('click', () => {
  printProjects(projects);
});

//Bonus WIP Below

// const callEventListeners = () => {
//   for (i = 0; i < htmlIDs.length; i++) {
//     const `eventListener${i}` = "";
//     `eventListener${i}` = `document.getElementById(${htmlIDs[i].page}).addEventListener('click', () => {
//     ${htmlIDs[i].function}();
// });`
//   }
// }

// callEventListeners();

// console.log(eventListener0);


