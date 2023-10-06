// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Selecting the error modal
const errorModal = document.querySelector('#modal');

// Adding click event listeners to all like buttons
document.querySelectorAll('.like-glyph').forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // If server request is successful, toggle heart appearance
        if (likeButton.innerText === EMPTY_HEART) {
          likeButton.innerText = FULL_HEART;
          likeButton.classList.add('activated-heart');
        } else {
          likeButton.innerText = EMPTY_HEART;
          likeButton.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        // If server request fails, display error modal with error message
        const errorMessage = document.querySelector('#modal-message');
        errorMessage.innerText = error;
        errorModal.classList.remove('hidden');

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Adding the hidden class to the error modal on page load
errorModal.classList.add('hidden');



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
