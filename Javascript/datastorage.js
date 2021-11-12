const name = document.getElementById('name');
const mail = document.getElementById('mail');
const msg = document.getElementById('msg');

const store = () => {
  const input = {
    name: name.value,
    mail: mail.value,
    msg: msg.value,
  };
  localStorage.setItem('formInput', JSON.stringify(input));
};
