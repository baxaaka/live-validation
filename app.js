"use strict"


const signupForm = document.querySelector('#signup-form')
const username = document.querySelector('#username')
const p = document.querySelector('p')
const regEX = /[a-zA-Z0-9]{6,12}/

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputVal = signupForm.username.value

  if (regEX.test(inputVal)) {
    p.textContent = "Ma'lumot to'g'ri kiritildi"
  } else {
    p.textContent =
      "Kiritilyotgan ma'lumot 6 va 12 orasida bo'lshi kerak. Shuningdek kichik va katta lotin harflaridan iborat bo'lshi zarur. Raqamlar ham ishitiok eshitishi mumkin."
  }
})

// live feedback
signupForm.username.addEventListener('keyup', (e) => {
  if (regEX.test(e.target.value)) {
    signupForm.username.setAttribute('class', 'success')
  } else {
    signupForm.username.setAttribute('class', 'error')
  }

})