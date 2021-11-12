const name = document.getElementById('name');
const mail = document.getElementById('mail');
const msg = document.getElementById('message');

const store = () => {
  const input = {
    name: name.value,
    mail: mail.value,
    msg: msg.value,
  };
  localStorage.setItem('formInput', JSON.stringify(input));
};

name.addEventListener('change', () => {
  store();
});

mail.addEventListener('change', () => {
  store();
});

msg.addEventListener('change', () => {
  store();
});

const populateForm = () => {
  const storage = localStorage.getItem('formInput');
  name.value = JSON.parse(storage).name;
  mail.value = JSON.parse(storage).mail;
  msg.value = JSON.parse(storage).msg;
};
populateForm();
