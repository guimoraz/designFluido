function openMenu() {
    document.querySelector('.menu').style.left = '0';
}

function closeMenu() {
    document.querySelector('.menu').style.left = '-350px';
}

function scrollToSection(sectionId) {
    const section = document.getElementsByName(sectionId)[0];
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function flipCard(card) {
    card.classList.toggle('flipped');
}