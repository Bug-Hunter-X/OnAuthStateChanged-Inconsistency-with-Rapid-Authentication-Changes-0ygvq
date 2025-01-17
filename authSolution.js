function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

firebase.auth().onAuthStateChanged(debounce((user) => {
  // Update UI based on user
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    // ...
  } else {
    // User is signed out
    console.log('User is signed out');
    // ...
  }
}, 500)); // Adjust debounce wait time as necessary