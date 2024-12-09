# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error encountered when using Firebase's `onAuthStateChanged` function: memory leaks.  The `onAuthStateChanged` listener needs to be unsubscribed from when it's no longer needed.  Failure to do so will keep the listener active, even after the component is unmounted, potentially leading to memory leaks and unexpected behavior. 
The `firebaseAuthBug.js` file illustrates the erroneous code, while `firebaseAuthSolution.js` provides the corrected version demonstrating proper unsubscription.
## How to reproduce the bug
1. Clone this repository.
2. Run the buggy code (firebaseAuthBug.js).
3. Observe the behavior in the browser's developer tools (console) while the component is mounted and unmounted repeatedly. You might notice that the listener continues to log events, even after the component should be inactive. This indicates a memory leak.
## How to solve the bug
Use the corrected code in `firebaseAuthSolution.js`. The crucial change is including a call to the `unsubscribe()` function when the component or the listener is no longer required, thus cleanly releasing the listener from memory.