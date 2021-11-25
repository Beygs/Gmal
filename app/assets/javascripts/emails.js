class Email {
  constructor(email) {
    this.email = email;
    this.url = email.querySelector('.email__object').getAttribute('href');
  }

  clickListener() {
    this.email.addEventListener('click', () => {
      fetch(this.url)
      .then(response => response.text())
      .then(script => eval(script))
    });
  }
}

function init() {
  const emails = document.querySelectorAll('.email-list>.email');

  emails.forEach(email => {
    const m = new Email(email);
    m.clickListener();
  });
}

function addEmail() {
  const email = document.querySelector('.email-list>.email');
  const m = new Email(email);
  m.clickListener();
}

init();