const post = document.getElementById("post1");
const title = document.getElementById("tilte");
const text = document.getElementById("mood");
post.addEventListener("click", () => {
  firebase
    .firestore()
    .collection("post")
    .add({
      title: title.value,
      post: text.value
    })
    .then(() => {
      window.location.href = "/project/introverts/html/forum.html";
    });
});
