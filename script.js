document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_email.php', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Email sent successfully!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Error sending email. Please try again later.');
    }
  };
  xhr.send(formData);
});
