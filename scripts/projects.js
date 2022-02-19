// Project data
const projects = [
  {
    title: "LC Studio Website",
    desc: "I created this website for the launch of LC Studio, a company focused training and promoting new developers",
    stack: "HTML/CSS/JS",
    img: "./images/LC_Studio.png",
    img_alt: "LC Studio Website",
    github: "https://github.com/JasonWandrag/LC_Studio_front_end",
    live: "https://www.lcstudio.co.za/",
  },
  {
    title: "Splashify",
    desc: "This is a scrollable gallery using the Unsplash API",
    stack: "React/CSS",
    img: "./images/Splashify.png",
    img_alt: "Splashify - The Unsplash Viewer",
    github: "https://github.com/JasonWandrag/splashify",
    live: "https://jason-wandrag-splashify.netlify.app/",
  },
  {
    title: "Dynamic Theme Switcher",
    desc: "I created this to be able to switch between Neumorphism and Glassmorphism themes. I also ensured that the shadow colors for the Neumophic theme automatically generates with the color given, and that the text also changes according to its background",
    stack: "HTML/CSS/JS",
    img: "./images/Dynamic_Theme_Switcher.png",
    img_alt: "Dynamic Theme Switcher",
    github: "https://github.com/JasonWandrag/dynamic-theme-switcher",
    live: "https://dynamic-theme-switcher.netlify.app/",
  },
  {
    title: "Basic Platformer",
    desc: "My first 2D sidescroller game made with the Godot Engine",
    stack: "Godot Engine/GDScript",
    img: "./images/2D_Platformer.png",
    img_alt: "Basic Platformer Game",
    github: "https://github.com/JasonWandrag/basic-platformer",
    live: "https://chryptolite.itch.io/basic-platformer",
  },
  {
    title: "Full page timeline",
    desc: "Mobile responsive fullpage timeline",
    stack: "HTML/CSS",
    img: "./images/Fullpage_timeline.png",
    img_alt: "Fullpage Timeline",
    github: "https://github.com/JasonWandrag/fullpage-experience-resume",
    live: "https://fullpage-timeline.netlify.app/",
  },
  {
    title: "Bootstrap Point Of Sale",
    desc: "Simple POS using localStorage as the storage method",
    stack: "HTML/CSS/JS",
    img: "./images/Point_of_sale.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/product-crud",
    live: "https://jason-wandrag-pos.netlify.app/",
  },
  {
    title: "Trivia Game",
    desc: "Trivia game created with the trivia API",
    stack: "HTML/CSS/JS",
    img: "./images/Trivia.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/trivia",
    live: "https://jason-trivia-game.netlify.app/",
  },
  {
    title: "Rider Waite Digital Tarot",
    desc: "Digital Tarot generator with multiple spreads",
    stack: "HTML/CSS/JS",
    img: "./images/Digital_Tarot.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/digital-tarot",
    live: "https://jason-digital-tarot.netlify.app/",
  },
  {
    title: "Fake Store",
    desc: "A Vue project that is a PWA, so it can be installed to your local machine. Here I also focused more on design. It is still unfinished (Started 01/31/2021)",
    stack: "Vue.js",
    img: "./images/Fake_Store.JPG",
    img_alt: "Fake Store",
    github: "https://github.com/JasonWandrag/vue-ecommerce",
    live: "https://vue-fake-store.netlify.app/",
  },
  {
    title: "User List",
    desc: "I challenged myself to create a fully Vanilla, web friendly list. Take a look at the Github read me for more details",
    stack: "HTML/CSS/JS",
    img: "./images/User_List.JPG",
    img_alt: "User List",
    github: "https://github.com/JasonWandrag/vanilla-user-search",
    live: "https://im-proud-of-this.netlify.app/",
  },
  {
    title: "Generic Blog Frontend",
    desc: "I created this project to show students how to create the frontend for a MEVN-stack project",
    stack: "Vue.js",
    img: "./images/Generic_Blog.JPG",
    img_alt: "Generic Blog",
    github: "https://github.com/JasonWandrag/Generic-Blog-Vue",
    live: "https://generic-vue-blog.netlify.app/",
  },
  {
    title: "Generic Blog Backend",
    desc: "The backend for the MEVN stack blog. This is a RESTful api that includes password encryption and authorization with bcrypt, as well as authentication using JWT",
    stack: "MongoDB, Node.js, Express, JWT, bcrypt",
    img: "./images/Generic_Blog_API.JPG",
    img_alt: "Generic Blog",
    github: "https://github.com/JasonWandrag/generic_blog_api",
    live: "https://generic-blog-api.herokuapp.com/",
  },
];

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i].title);
}

const totalSlides = projects.length;
// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Function to create slides
function createSlide(project, index) {
  const slide = `
        <div class="carousel-slide${index == 0 ? " active" : ""}">
            <div class="carousel-content">
                <h3>${project.title}</h3>
                <h4>Made with: ${project.stack}</h4>
                <p>${project.desc}</p>
                <div class="carousel-btns">
                    <a class="form-submit" target="_blank" href="${
                      project.live
                    }">Live</a>
                    <a class="form-submit" target="_blank" href="${
                      project.github
                    }">Github</a>
                </div>
            </div>
            <img class="carousel-img" src=${project.img} alt=${
    project.img_alt
  } />
        </div>
    `;
  // Add slide to container
  slidesContainer.innerHTML += slide;
}

// Function to create bullets
function createBullet(index) {
  // Create button to be clicked on and add attributes
  let bulletButton = document.createElement("button");
  bulletButton.classList.add("carousel-bullet");
  bulletButton.setAttribute("onclick", `bulletSlider(${index})`);

  // Create bullet with active classes
  let bullet = document.createElement("i");
  bullet.classList.add("fas");
  bullet.classList.add("fa-circle");
  if (index == 0) bullet.classList.add("active");

  // Add bullet to bulletButton
  bulletButton.appendChild(bullet);

  // Add bulletButton to buttonContainer
  bulletsContainer.appendChild(bulletButton);
}

// Bullet press functionality
let bulletSlider = (index) => {
  let bullets = document.getElementsByClassName("fa-circle");
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < totalSlides; i++) {
    if (index == i) {
      bullets[i].classList.add("active");
      slides[i].classList.add("active");
    } else {
      bullets[i].classList.remove("active");
      slides[i].classList.remove("active");
    }
  }
};

// Side Caret functionality
let changeSlide = (toSlide) => {
  let bullets = document.getElementsByClassName("fa-circle");
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < totalSlides; i++) {
    if (slides[i].classList.contains("active")) {
      let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
      let beginningOfArray = i + toSlide < 0 ? true : false;
      slides[i].classList.remove("active");
      bullets[i].classList.remove("active");
      if (endOfArray) {
        slides[0].classList.add("active");
        bullets[0].classList.add("active");
      } else if (beginningOfArray) {
        bullets[totalSlides - 1].classList.add("active");
        slides[totalSlides - 1].classList.add("active");
      } else {
        bullets[i + toSlide].classList.add("active");
        slides[i + toSlide].classList.add("active");
      }
      break;
    }
  }
};

projects.forEach((project, index) => {
  createBullet(index);
  createSlide(project, index);
});
