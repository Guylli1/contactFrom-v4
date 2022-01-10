const button = document.getElementById('btn')

button.addEventListener('click', event => {
  event.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const spanErrorName = document.getElementById('spanErrorName')
  const spanErrorEmail = document.getElementById('spanErrorEmail')

  if (name.value == '') {
    spanErrorName.style.display = 'block'
  } else {
    spanErrorName.style.display = 'none'
  }

  if (email.value == '') {
    spanErrorEmail.style.display = 'block'
  } else {
    spanErrorEmail.style.display = 'none'
  }

  if (name.value == '') {
    name.classList.add('errorInput')
  } else {
    name.classList.remove('errorInput')
  }

  if (name.value == '') {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  if (
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    (email.value.indexOf('.') == 1 - email.value.indexOf('@')) == 1
  ) {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }
})

button.onclick = () => validation()

function validation() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  console.log('Nome:', name, 'Email:', email)
}
