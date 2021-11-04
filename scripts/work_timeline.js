const career_timeline = [
  {
    year: "2020 - Present",
    role: "Lecturer / Fullstack Developer",
    company: {
      name: "Life Choices",
      description:
        "An NPO focused on challenging inequality by investing in youth",
      reference: {
        name: "Oslin Johnson",
        position: "LC Studio Team Lead",
        number: "071 248 2443",
      },
    },
    accomplishments: [
      "I helped create and maintain the Fullstack Developer Course content",
      "Deliver course content in 6 month cycles",
      "Helped over 200 young and budding developers learn core programming skills and create online portfolios",
      "Assisted in the development of LC Studio, a company designed to give work experience to intern developers",
    ],
    techstack: [
      {
        language: "HTML",
        icon_element: "<i class='fab fa-html5'></i>",
      },
      {
        language: "CSS",
        icon_element: "<i class='fab fa-css3-alt'></i>",
      },
      {
        language: "JavaScript",
        icon_element: '<i class="fab fa-js"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Database SQL",
        icon_element: '<i class="fas fa-database"></i>',
      },
    ],
  },
  {
    year: "2019",
    role: "Frontend Developer",
    company: {
      name: "NuDynamics",
      description:
        "A small startup focused on creating the web applications for a large tourism company",
      reference: {
        name: "Elrico Heinen",
        position: "CEO",
        number: "083 256 1718",
      },
    },
    accomplishments: [
      "Learnt how to create applications in React",
      "Created the frontend UI for the MTO Group website",
    ],
    techstack: [
      {
        language: "HTML",
        icon_element: "<i class='fab fa-html5'></i>",
      },
      {
        language: "CSS",
        icon_element: "<i class='fab fa-css3-alt'></i>",
      },
      {
        language: "JavaScript",
        icon_element: '<i class="fab fa-js"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Database SQL",
        icon_element: '<i class="fas fa-database"></i>',
      },
    ],
  },

  {
    year: "2018",
    role: "Frontend Developer",
    company: {
      name: "Braxton",
      description: "A dedicated development house with a few in house products",
      reference: {
        name: "Andro Treurnicht",
        position: "Project Lead",
        number: "083 308 5234",
      },
    },
    accomplishments: [
      "Took the Angular Tour of Heroes",
      "Contributed to projects by creating reuseable components",
    ],
    techstack: [
      {
        language: "HTML",
        icon_element: "<i class='fab fa-html5'></i>",
      },
      {
        language: "CSS",
        icon_element: "<i class='fab fa-css3-alt'></i>",
      },
      {
        language: "JavaScript",
        icon_element: '<i class="fab fa-js"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Database SQL",
        icon_element: '<i class="fas fa-database"></i>',
      },
    ],
  },
  {
    year: "2016-2017",
    role: "Designer / Developer",
    company: {
      name: "JNZ Group",
      description: "An end-to-end business IT services provider",
      reference: {
        name: "Kim North",
        position: "Managing Director",
        number: "072 081 6226",
      },
    },
    accomplishments: [
      "Helped various local businesses with branding",
      "Created website mockups according to client needs",
      "Develop websites and ecommerce stores with the appropriate web tools",
      "Gathered resources that have since made my development career an absolute breeze",
    ],
    techstack: [
      {
        language: "HTML",
        icon_element: "<i class='fab fa-html5'></i>",
      },
      {
        language: "CSS",
        icon_element: "<i class='fab fa-css3-alt'></i>",
      },
      {
        language: "JavaScript",
        icon_element: '<i class="fab fa-js"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Python",
        icon_element: '<i class="fab fa-python"></i>',
      },
      {
        language: "Database SQL",
        icon_element: '<i class="fas fa-database"></i>',
      },
    ],
  },
];

console.log(career_timeline);

function createWorkCard(work, index) {
  const direction = index % 2 !== 0 ? "left" : "right";
  document.getElementById("timeline").innerHTML += `
    <div class="timeline-section timeline-${direction}" data-aos="fade-${direction}">
        <p class="timeline-period">${work.year}</p>
        <div class="timeline-content">
          <h4 class="timeline-title">${
            work.company.name
          } - <span class="timeline-role">${work.role}</span></h4>
          <p class="timeline-description">${work.company.description}</p>
          <h6 class="timeline-heading">My Accomplishments:</h6>
          <ol>
            ${createAccomplishments(work.accomplishments)}
          </ol>
        </div>
    </div>
  `;
}

function createAccomplishments(accomplishments) {
  let a = "";
  accomplishments.forEach((acc) => {
    a += `<li>${acc}</li>`;
  });
  return a;
}

career_timeline.forEach((work, i) => createWorkCard(work, i));
