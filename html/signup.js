const db = firebase.firestore();
const username = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
const signup = document.getElementById("signup1");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const sp1 = document.getElementById("span1");
console.log(span1);
signup.addEventListener("click", () => {
  // event.preventDefault();
  // console.log(username.value, pass.value);
  if (username.value == "") {
    sp1.innerText = "please fill all fields";
    sp1.classList.remove("hidden");

    // sp1.style(visi);
    if (pass.value == "") {
      sp1.innerText = "please fill all fields";
      sp1.classList.remove("hidden");
    } else if (fname.value == "") {
      sp1.innerText = "please fill all fields";
      sp1.classList.remove("hidden");
    } else if (lname.value == "") {
      sp1.innerText = "please fill all fields";
      sp1.classList.remove("hidden");
    }
  } else {
    sp1.classList.add("hidden");

    firebase
      .auth()
      .createUserWithEmailAndPassword(username.value, pass.value)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        sp1.innerText = errorCode;
        sp1.classList.remove("hidden");
      });
  }
});
