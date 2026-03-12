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

// FORM

let form = document.querySelector("form")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let loader = document.querySelector(".loader");
    loader.classList.add("visible");

    setTimeout(function(){
        console.log("Envoi du form détecté !")

        let email = document.querySelector("#email")
        let pseudo = document.querySelector("#pseudo")
        let password = document.querySelector("#password")
        let passwordRepeat = document.querySelector("#password2")
        let errorContainer = document.querySelector(".message-error")
        let successContainer = document.querySelector(".message-succes")
        let errorList = document.querySelector(".message-error")
        let newsletterOui = document.querySelector("#oui")
        let newsletterNon = document.querySelector("#non")

        errorList.replaceChildren()
        errorContainer.classList.remove("visible")
        successContainer.classList.remove("visible")
        loader.classList.remove("visible")

        if (email.value == "") {
            console.log("invalide")
        } else {
            email.classList.add("success")
        }

        if (pseudo.value.length < 6) {
            errorContainer.classList.add("visible");
            pseudo.classList.remove("success");

            let err = document.createElement("li");
            err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";

            errorList.appendChild(err);
        } else {
            pseudo.classList.add("success")
        }

        let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

        // Si le mdp n"a pas 10 caractère ou ne respecte pas la regex
        if (password.value.length < 10 || passCheck.test(password.value) == false) {
            errorContainer.classList.add("visible");
            password.classList.remove("success");

            let err = document.createElement("li");
            err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

            errorList.appendChild(err)
        } else {
            password.classList.add("success")

            if (password.value == password2.value) {
                passwordRepeat.classList.add("success");
            } else {
                errorContainer.classList.add("visible");
                passwordRepeat.classList.remove("success");
                let err = document.createElement("li");
                err.innerText = "Les mots de passe sont différents"

                errorList.appendChild(err)
            }
        }

        if (newsletterNon.checked || newsletterOui.checked) {
            newsletterOui.classList.add("success");
            newsletterNon.classList.add("success");
        } else {
            errorContainer.classList.add("visible")
            let err = document.createElement("li");
                err.innerText = "Veuillez choisir si vous souhaitez recevoir la newsletter"

                errorList.appendChild(err)
        }

        successContainer.classList.remove("visible")
        
        if (pseudo.classList.contains("success") &&
            email.classList.contains("success") &&
            password.classList.contains("success") &&
            passwordRepeat.classList.contains("success") &&
            newsletterOui.classList.contains("success") &&
            newsletterNon.classList.contains("success"))
            {

            errorContainer.classList.remove("visible")
            successContainer.classList.add("visible")
        }
        }, 2000);
})


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
