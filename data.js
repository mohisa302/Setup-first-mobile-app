const projectsData = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/img1.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    button: 'see project',
    technologies: ['html', 'css', 'Bootstrap', 'Ruby'],
  },
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/card2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    name: 'Multi-post stories',
    featuredImage: './img/card3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    name: 'Multi-post stories',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 5,
    name: 'Multi-post stories',
    featuredImage: './img/card3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 6,
    name: 'Multi-post stories',
    featuredImage: './img/card4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
];

const cardsContainer = document.querySelector('.cards-container');
const workContainer = document.querySelector('.recent-work');

cardsContainer.innerHTML = 
`<div class="work1">
<img
  class="work-img"
  src= ${projectsData[0].featuredImage}
  alt="image of one project"
/>
</div>
<div class="work2">
<h2 class="wtext1">${projectsData[0].name}</h2>
<p class="wtext2"> ${projectsData[0].description}
</p>
<ul class="bottun">
  <li class="icon1-holder">
    <nav class="icon1">${projectsData[0].technologies[1]}</nav>
  </li>
  <li class="icon2-holder">
  <nav class="icon1">${projectsData[0].technologies[0]}</nav>
  </li>
  <li class="icon3-holder">
  <nav class="icon1">${projectsData[0].technologies[2]}</nav>
  </li>
  <li class="icon4-holder">
  <nav class="icon1">${projectsData[0].technologies[3]}</nav>
  </li>
  </ul>
  <button class="link-button pop-class ltext1" type="button"> ${projectsData[0].button} </button>
  </div>
    <div class="modal-wrapper">
    <div class="modal hide">
      <div class="modal-header">
       <h3>${projectsData[0].name}</h3>
       <img src="./img/blackcross.png" alt="cross icon" class="close-icon">
      </div>
      <ul class="cardb">
        <li class="bot button1">${projectsData[0].technologies[0]}</li>
        <li class="bot button2">${projectsData[0].technologies[2]}</li>
        <li class="bot button3">${projectsData[0].technologies[1]}</li>
      </ul>
      <div class="modal-con">
        <img src=${projectsData[0].featuredImage} alt="project image" class="pop-window"/>  
       <div class="modaltext">
        <p class="modal-text">
          ${projectsData[0].description}
        </p>
        <button class="link-button ltext1" type="button">${projectsData[0].button}</button>
        </div>
        </div>
      </div>
  </div>`;
  
projectsData.forEach((project, index) => {
  if (index > 0) {
    const {
      id,
      name,
      featuredImage,
      description,
      button,
      technologies,
    } = project;

    cardsContainer.innerHTML += `
  <div class="card card1">
    <title class="cardt">${name}</title>
    <title class="cardt-des">Data</title>
    <title class="cardt-des">Healthcare</title>
    <p class="cardp-des">
      ${description}
    </p>
    <p class="cardp">
      A daily selection of privately personalized reads; no
      accounts or sign-ups required. has been the industry's
      standard
    </p>
    <!--<ul class="cardb">
      <li class="button1">${technologies[0]}</li>
      <li class="button2">${technologies[2]}</li>
      <li class="button3">${technologies[1]}</li>
    </ul>-->
      <button class="ltext1 link-button2 pop-class" type="button">${button}</button>
    <!-- modal -->
  <div class='modal-wrapper'>  
    <div class="modal modal-content hide">
    <div class="modal-header">
    <h3>${name}</h3>
    <img src="./img/blackcross.png" alt="cross icon" class="close-icon">
    </div>
    <ul class="cardb">
      <li class="bot button1">${technologies[0]}</li>
      <li class="bot button2">${technologies[2]}</li>
      <li class="bot button3">${technologies[1]}</li>
    </ul>
    <div class="modal-con">
    <img src=${featuredImage} alt="project image" class="pop-window"/>
    <div class="modaltext">
    <p class="modal-text">
    ${description}
    </p>
      <button class="link-button ltext1" type="button">${button}</button>
      </div>
      </div>
      </div>
  </div>  
  `;
  }
});

const openPopupButton = document.querySelectorAll('.pop-class');
const modals = document.querySelectorAll('.modal');
const closeBtnPop = document.querySelectorAll('.close-icon');

openPopupButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.remove('hide');
  });
});

closeBtnPop.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.add('hide');
  });
});