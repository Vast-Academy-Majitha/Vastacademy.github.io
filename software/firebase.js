// JavaScript source code
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB5-ow4YS3r98QIcfMyT4JLJJmzjDfmCbc",
  authDomain: "authentication-608f0.firebaseapp.com",
  projectId: "authentication-608f0",
  storageBucket: "authentication-608f0.appspot.com",
  messagingSenderId: "574744795723",
  appId: "1:574744795723:web:aedc90dce5a85278a58bce",
  measurementId: "G-EBFQEFYH2P"
};

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Access Firestore and Realtime Database
const firestore = firebase.firestore();
const database = firebase.database();

// Get the current user after authentication
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userUID = user.uid;

    // Create or update student details in Firestore
    const studentRef = firestore.collection('students').doc(userUID);
    studentRef.set({
      name: 'John Doe',
      email: 'johndoe@example.com',
      // Other student details
    });

    // Store attendance record in Realtime Database
    const attendanceRef = database.ref(`attendance/${userUID}`);
    attendanceRef.push({
      date: '2023-12-05',
      status: 'present',
    });

    // Similarly, handle academic scores, courses, and fees

  } else {
    // User is not logged in
  }
});
