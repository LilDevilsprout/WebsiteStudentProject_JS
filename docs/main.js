const burgerBtn = document.getElementById('burgerBtn')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')
const menuLinks = document.querySelectorAll('nav a')

// OPEN AND CLOSE MENU
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')    //if open then add "active" else remove it
    menu.classList.toggle('open')
    overlay.classList.toggle('active')
});

// CLOSE MENU BY CLICKING ON OVERLAY
overlay.addEventListener('click', () => {
    burgerBtn.classList.remove('active')
    menu.classList.remove('open')
    overlay.classList.remove('active')
});

// CLOSE MENU BY CLICKING ON PAGE
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active')
        menu.classList.remove('open')
        overlay.classList.remove('active')
    });
});

// FAQ PAGE
function toggleAnswer(element) {
    const answer = element.nextElementSibling;  // returns the next element at the same level
    const icon = element.querySelector('.faq-icon')
    
    // CLOSE OTHER ANSWERS
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active')
        }
    });
    
    document.querySelectorAll('.faq-icon').forEach(item => {
        if (item !== icon) {
            item.classList.remove('active')
        }
    });
    
    // SHOW / HIDE THE ANSWER
    answer.classList.toggle('active')
    icon.classList.toggle('active')
}

// DARK MODE
function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.dark-mode-toggle')
    
    body.classList.toggle('dark-mode')
    
    // CHANGE NAME BUTTON
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode'
    } else {
        button.textContent = 'Dark Mode'
    }
    
    // SAVE PREFS WHEN GOING ON ANOTHER PAGE
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled')     //localStorage : save data permanently as 'key:value'
    } else {
        localStorage.setItem('darkMode', 'disabled')
    }
}

document.addEventListener('DOMContentLoaded', function() {      //DOMContentLoaded : when the html page is fully loaded
    const darkMode = localStorage.getItem('darkMode')
    const button = document.querySelector('.dark-mode-toggle')
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode')
        if (button) {
            button.textContent = 'Light Mode'
        }
    }
});