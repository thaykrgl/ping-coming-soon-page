const emailInput = document.querySelector('#email');
const notify = document.querySelector('#notify');
const nextSibling = emailInput.nextElementSibling;

const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/

notify.addEventListener('click', () => {

  const value = emailInput.value;

  if (emailRegex.test(value)) {
    nextSibling.classList.add('d-none');
    emailInput.classList.remove('border');
  } else {
    nextSibling.classList.remove('d-none');
    emailInput.classList.add('border');
  }
})