async function loginFormHandler(event) {
  event.preventDefault();
  console.log('Trying to login');

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/'); // should this be dashboard
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#form-login').addEventListener('submit', loginFormHandler);