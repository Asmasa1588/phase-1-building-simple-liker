// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const init = () => {
  const likeButtons = document.getElementsByClassName("like");
  for (button of likeButtons) {
    button.addEventListener("click", (event) => {
      mimicServerCall()
        .then(() => {
          console.log({ event: event.path });
          if (event.target.classList.contains("like")) {
            event.target.classList.toggle("activated-heart");
          } else {
            const likeElement = event.path[1];
            likeElement.classList.toggle("activated-heart");
          }
        })
        .catch((error) => {
          const modalElement = document.getElementById("modal");
          const modalErrorElement = document.getElementById("modal-message");
          modalErrorElement.innerHTML = error;
          modalElement.classList.remove("hidden");
          setTimeout(() => {
            modalElement.classList.add("hidden");
          }, 3000);
        });
    });
  }
};

document.addEventListener("DOMContentLoaded", init);
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
