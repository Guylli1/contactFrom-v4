const button = document.getElementById('btn')

button.addEventListener('click', event => {
  event.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')

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
})

button.onclick = () => validation()

function validation() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  console.log('Nome:', name, 'Email:', email)

  if (name === '') alert('Fill in the blank field!')
  if (email === '') alert('Fill in the blank field!')
}
