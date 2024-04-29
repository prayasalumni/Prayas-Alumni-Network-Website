
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Paste the code from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDilfgXIqXgQgtmTWrJoi26g7ytBVTZ7mU",
  authDomain: "prayasalumnicontactform.firebaseapp.com",
  projectId: "prayasalumnicontactform",
  storageBucket: "prayasalumnicontactform.appspot.com",
  messagingSenderId: "640868620183",
  appId: "1:640868620183:web:1cc1d501239a144af256d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        
    });
   // console.log(name);

    alert('Your message has been sent');
    document.getElementById('contact').reset();
});
