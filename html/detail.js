const href = window.location.href;
const pathname = href.split("?");
const idonly = pathname[1].split("=");
const id = idonly[1];
// const details = document.getElementById("details");
console.log(id);

firebase
  .firestore()
  .collection("post")
  .doc(id)
  .get()
  .then(data => {
    console.log(data.data().post);
    details.innerHTML = `${data.data().post}`;
  })
  .catch(er => {
    console.log(er);
  });
