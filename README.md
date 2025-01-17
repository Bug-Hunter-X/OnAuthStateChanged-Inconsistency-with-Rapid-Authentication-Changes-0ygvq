# Firebase onAuthStateChanged Listener Inconsistency

This repository demonstrates a bug where the Firebase `onAuthStateChanged` listener fails to consistently update when the user's authentication state changes rapidly.  This is particularly noticeable with rapid sign-in/sign-out sequences.  The provided code reproduces the issue, and the solution offers a more robust approach to handling authentication state changes.

## Reproducing the Bug

1. Clone this repository.
2. Install the necessary packages using `npm install`.
3. Run the application using `npm start`. 
4. Observe that the authentication state updates are not always correctly reflected in the UI under rapid sign-in/sign-out cycles.

## Solution

The solution utilizes debouncing to limit the frequency of calls to the state update function, preventing the listener from being overwhelmed by rapid authentication changes.