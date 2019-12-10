const newpost1 = document.getElementById("newpost1");
const titleshow = document.getElementById("titleshow");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(newpost1.classList);
    newpost1.classList.remove("newpost1");
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
firebase
  .firestore()
  .collection("post")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      titleshow.innerHTML += `<div><a href='detail.html?id=${doc.id}'>${
        doc.data().title
      }</a></div>`;
    });
  });
