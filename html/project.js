firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
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
