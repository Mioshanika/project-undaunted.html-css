const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const phone = document.getElementById('user-tel').value.trim();
  const comment = document.getElementById('user-comment').value.trim();

  if (name && email && phone && comment) {
    alert(
      `Congratulations ${name}! We have received your order: "${comment}". A confirmation email will be sent to ${email} shortly. Our manager will call you at ${phone} within the next hour.`
    );
  } else {
    alert('Please fill out all fields.');
  }
});
