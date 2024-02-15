const skills = document.getElementById('skills');
const contact = document.getElementById('contact');
const home = document.getElementById('home');

home.addEventListener('click', () => {
    window.location.href = 'index.html';
})

skills.addEventListener('click', () => {
    window.location.href = 'skill.html';
});

contact.addEventListener('click', () => {
    window.location.href = 'contact.html';
})