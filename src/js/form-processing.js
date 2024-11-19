const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (name && email && phone && comment) {
    alert(
      `Congratulations ${name}! We have received your order: "${comment}". A confirmation email will be sent to ${email} shortly. Our manager will call you at ${phone} within the next hour.`
    );
  } else {
    alert('Please fill out all fields.');
  }
});
