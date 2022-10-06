// document.querySelectorAll('.cart__row button').forEach(i => {
//     i.addEventListener("click", (e) => {
//         const inputCart = e.target.parentNode.childNodes[3]

//         if (i.classList[0] === "cart__button_inc") {
//             inputCart.value = (+(inputCart.value) + 1)
//         } else if (i.classList[0] === "cart__button_dec") {
//             if (+(inputCart.value) > 1) {
//                 inputCart.value = (+(inputCart.value) - 1)
//             } else {
//                 inputCart.value = "1"
//             }
//         }

//         console.log(+(inputCart.value)--)
//     })
// })

const bodyActiveToggle = () => {
    document.body.classList.toggle("active-body")
    document.body.style.height = "100vh"
}

const setActive = (id, className, bodyBackground = false) => {
    document.getElementById(id).onclick = () => {
        document.querySelector(className).classList.toggle("active")
        bodyActiveToggle()

        bodyBackground
            ?
            document.querySelector('.body-background').style.display = "none"
            :
            document.querySelector('.body-background').style.display = "block"
    }
}

const turnOffBg = (c) => {
    document.querySelector(c).addEventListener("click", (e) => {
        e.stopPropagation()

        document.body.style.overflow = ""
        document.querySelector(".cart").classList.remove("active")
        document.querySelector("#item-popup-1").classList.remove("active")
        document.querySelector("#item-popup-2").classList.remove("active")
        document.querySelector('body').classList.toggle("active-body")
    })
}

turnOffBg('.body-background')
turnOffBg('.item-popup-cross-1')
turnOffBg('.item-popup-cross-2')

setActive("nav-item", ".cart")
setActive("button-popup-1", ".item-popup-1")
setActive("button-popup-2", ".item-popup-2")