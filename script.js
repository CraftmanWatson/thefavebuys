const navBtn = document.querySelector('.navBtn');
const navScreen = document.querySelector('.navScreen');
const home = document.querySelector('.hero');
const about = document.querySelector('.about');
const catalog = document.querySelector('.catalog');
const testimonial = document.querySelector('.testimonial');

const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const catalogBtn = document.querySelector('.catalogBtn');
const testimonialBtn = document.querySelector('.testimonialBtn');
const catalogBtn2 = document.querySelector('.CTA');
const homeBtn2 = document.querySelector('.logo');

navBtn.addEventListener('click', () => {
  navScreen.classList.toggle('active');
  navBtn.classList.toggle('active');
});

homeBtn.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
});

aboutBtn.addEventListener('click', () => {
  about.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
});

testimonialBtn.addEventListener('click', () => {
  testimonial.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
});

catalogBtn.addEventListener('click', () => {
  catalog.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
}); 

catalogBtn2.addEventListener('click', () => {
  catalog.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
});

homeBtn2.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' });
  navScreen.classList.remove('active');
  navBtn.classList.remove('active');
});
