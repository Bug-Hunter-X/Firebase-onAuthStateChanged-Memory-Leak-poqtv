const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/auth/web/user-properties
  const uid = user.uid;
  console.log(uid);
} else {
  // User is signed out
  // ...
}}) 
unsubscribe(); //this line is important to prevent memory leak