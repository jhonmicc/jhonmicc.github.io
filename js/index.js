let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")
}

window.onscroll = () => {
    navbar.classList.remove("open-menu")
    menu.classList.remove("move")
}

// EmailJS
const validate = () => {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror()
        } else {
            sendmail(name.value, email.value, msg.value)
            success()
        }
    })
}

validate()

const sendmail = (name, email, msg) => {
    emailjs.send("service_j2d2bze", "template_k7vmzkz", {
        from_name: name,
        to_name: email,
        message: msg,
    });
}

const emptyerror = () => {
    swal({
        title: "Oh Sorry😥",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

const success = () => {
    swal({
        title: "Email sent successfully😀",
        text: "We try to reply in 24 hours",
        icon: "success",
    });
}

// Header background change on scroll
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
})

// Scroll Top
let scrollTop = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 100)
})