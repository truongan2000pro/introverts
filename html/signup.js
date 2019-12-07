const db = firebase.firestore();
const username = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
const signup = document.getElementById("signup1");
const newElement = () => {
  signup.addEventListener("click", () => {
    alert("haha");
    firebase
      .firestore()
      .collection("signup")
      .add({
        name: "Toyo",
        country: "Jpan"
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  });
};
newElement();
