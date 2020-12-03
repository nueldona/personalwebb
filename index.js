
// SECTION NAV
function sectionNav() {
  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll("nav a")

  sections.forEach(section => {
    section.addEventListener("mouseenter", function () {
      const id = this.getAttribute("id")
      const navActive = document.querySelector(`a[href="#${id}"]`);
      navLinks.forEach(navLink => {
        navLink.classList.remove("active")
      });
      navActive.classList.add("active");
    });
  });
};
sectionNav();


// STICKY HEADER

window.addEventListener('scroll', ()=> {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
})


// PORTFOLIO cARDS
const cards = document.getElementById('workSection')
const workCards = [
  {title: 'Github profile clone', desc: 'a github profile clone', githubLink: 'https://github.com/nueldona/githubprofileclone', liveLink: 'https://musing-mirzakhani-765a1b.netlify.app/', color: '#563d7c', language: 'html' }, 
  {title: 'Heathatonic', desc: 'heathatonic is a website for an health clinic', githubLink: 'https://github.com/nueldona/heathatonic', liveLink: '', color: '#f1e05a', language: 'Vue.js'},
  {title: 'TransMonitor', desc: '', githubLink: 'https://github.com/nueldona/TransMonitor', liveLink: '', color: '#e34c26', language: 'React.js'},
  {title: 'Cleanwater', desc: 'Coming soon page', githubLink: 'https://github.com/nueldona/cleanwater', liveLink: 'https://vibrant-torvalds-f1fedb.netlify.app/', color: '#4F5D95', language: 'php'}
];

workCards.forEach((workCard, i) => {
  cards.innerHTML += `
    <section class="card">
      <section class="card-header">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-w-20 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" cursor="pointer"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
        
        <div class="preview-links">

          <a href="${workCard.githubLink}" class="">
            <center>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

              <p>Github</p>
            </center>
          </a>

          <a href="${workCard.liveLink}">
            <center>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>

              <p>live Link</p>
            </center>
          </a>

        </div>
      </section>

      <section class="card-body">
        <h2>${workCard.title}</h2>
        <p>${workCard.desc}</p>
      </section>
      <section class="card-footer">
        <div class="dot" style="background-color: ${workCard.color}"></div>
        <span><p>${workCard.language}</p></span>
      </section>
      
    </section>
  `
});


// ABOUT BACKGROUND-COLOR

function AboutBg() {
  if (this.scrollY > this.innerHeight / 2.7) {
    document.querySelector(".profile").style.backgroundColor = '#fff';
    document.querySelector(".about-section").style.backgroundColor = ' #0d1946';
  } else {
    document.querySelector(".about-section").style.backgroundColor = '#fff';
    document.querySelector(".profile").style.backgroundColor = '#0d1946';
  }
}

window.addEventListener('scroll', AboutBg)