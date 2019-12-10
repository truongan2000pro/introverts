const login = document.getElementById("logincheck");
const mail = document.getElementById("InputEmail");
const pass = document.getElementById("InputPassword");
const sp1 = document.getElementById("span1");
const inout = document.getElementById("inout");
console.dir(mail);
console.dir(pass);
login.addEventListener("click", () => {
  if (mail.value == "") {
    sp1.innerText = "please fill all fields";
    sp1.classList.remove("hidden");
  } else if (pass.value == "") {
    sp1.innerText = "please fill all fields";
    sp1.classList.remove("hidden");
  } else {
    sp1.classList.add("hidden");
    firebase
      .auth()
      .signInWithEmailAndPassword(mail.value, pass.value)
      .then(data => {})
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        sp1.innerText = errorCode;
        sp1.classList.remove("hidden");
        // ...
      });
  }
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "/project/introverts/html/project.html";
    inout.innerHTML = `<li id="login" class="nav-item active">
    <a id="login1" class="nav-link " href=""
      >SignOut <span class="sr-only">(current)</span></a
    >
  </li>`;
    const out = document.getElementById("login1");
    out.addEventListener("click", () => {
      firebase.auth().signOut();
      window.location.href = `/project/introverts/html/project.html`;
    });
  } else {
    // alert("haha");
  }
});
