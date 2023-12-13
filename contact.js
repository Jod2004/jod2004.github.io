document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');

  form.addEventListener("submit", function(e) {
      e.preventDefault();
      sendEmail();
  });

  function sendEmail() {
      Email.send({
          Host: "smtp.elasticemail.com",
          Username: "newheightsire@gmail.com",
          Password: "383A7EBA9B6FB1C29BEB9BCB4C5AD022F5F8",
          To: 'newheightsire@gmail.com',
          From: "newheightsire@gmail.com",
          Subject: "this is the subject",
          Body: "And this is the body"
      }).then(
          
          () => alert("Message sent, a member of our team should be in contact soon.")
      ).catch(
          
          (error) => alert("Failed to send message: " + error)
      );
  }
});
