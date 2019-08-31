console.log("main.js is linked");

const printToDOM = (message, divID) => {
  document.getElementById(divID).innerHTML += message;
}

const projects = [
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

const createProjectCards = (arr) => {
let stringToPrint = "";
for (let i = 0; i < arr.length; i ++) {
  let project = arr[i];
  if (project.available) {
  stringToPrint = `
    <div class="project-card">
      <h3>${project.title}</h3>
      <img src="${project.screenshot}">
      <p>${project.description}</p>  
      <p>Technologies used: ${project.technologiesUsed}</p>
      <h6>${project.url}</h6>
      <h6>${project.githubUrl}</h6>
    </div>
  `;
  printToDOM(stringToPrint, "projectsPage");
  }
}   
}

createProjectCards(projects);