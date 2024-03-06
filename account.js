// Function to toggle password visibility
function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

// Function to handle form submission
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form inputs
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var street = document.getElementById('street').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var password = document.getElementById('password').value;

  // Create new user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // Save additional user data to Firestore or Realtime Database
      // For example:
      firebase.firestore().collection('users').doc(user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        street: street,
        city: city,
        state: state
      })
      .then(() => {
        // Redirect to dashboard or another page upon successful signup
        window.location.href = 'dash.html';
      })
      .catch((error) => {
        console.error('Error saving user data:', error);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Error creating user:', errorMessage);
      // Handle errors or display them to the user
    });
});
