const form = document.getElementById('email-form');
const email = document.getElementById('email');
const small = form.querySelector('small');
const toggle = document.getElementById('toggle')
const toggleIcon = document.getElementById('toggle-icon')
const menu = document.getElementById('menu')

let showMenu = false

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        toggleIcon.src = 'images/icon-close.svg'
        menu.classList.add('show')

        showMenu = true;
    } else {
        toggleIcon.src = 'images/icon-hamburger.svg'
        menu.classList.remove('show')

        showMenu = false;
    }
}


// email validation 

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess()
    } else {
        showError('Please insert a valid email')
    }
};

// show Error Message
function showError(message) {
    form.classList.add('error')
    small.innerText = message
};

// show success
function showSuccess() {
    form.className = 'email-form'
    small.innerText = ''
    email.value = ''
};


// email submit

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (email.value != '') {
        checkEmail(email)
    } else {
        showError('Email field is empty')
    }

});

// Slideshow

let cardIndex = 1;
const cards = document.getElementsByClassName('card');
const dots = document.getElementsByClassName('dot');

showCards(cardIndex);

// dot image controls

function currentCard(n) {
    showCards(cardIndex = n)
}

//  cycle through cards

function nextCard() {
    cardIndex++;

    if (cardIndex > cards.length) {
        cardIndex = 1
    }

    showCards(cardIndex)
}

// show selected Card

function showCards(n) {
    let i;

    if (n > cards.length) {
        cardIndex = 1
    }
    if (n < 1) {
        cardIndex = cards.length
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    cards[cardIndex - 1].classList.add('active-card')
    dots[cardIndex - 1].classList.add('active')
    
}

setInterval(nextCard, 15000);