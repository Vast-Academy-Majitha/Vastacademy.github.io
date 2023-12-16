
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-ow4YS3r98QIcfMyT4JLJJmzjDfmCbc",
  authDomain: "authentication-608f0.firebaseapp.com",
  databaseURL: "https://authentication-608f0-default-rtdb.firebaseio.com",
  projectId: "authentication-608f0",
  storageBucket: "authentication-608f0.appspot.com",
  messagingSenderId: "574744795723",
  appId: "1:574744795723:web:aedc90dce5a85278a58bce",
  measurementId: "G-EBFQEFYH2P"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Function to display student details on the frontend
function displayStudentDetails(studentData) {
  const studentDashboardSection = document.getElementById('studentdashboard');
  
  // Clear any existing content
  studentDashboardSection.innerHTML = '';

  // Create elements to display student details
  const nameElement = document.createElement('p');
  nameElement.textContent = `Name: ${studentData.name}`;

  const emailElement = document.createElement('p');
  emailElement.textContent = `Email: ${studentData.email}`;

  // Append elements to the section
  studentDashboardSection.appendChild(nameElement);
  studentDashboardSection.appendChild(emailElement);

  // Add more elements for other student details as needed
}

// Get the current user after authentication
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userUID = user.uid;

    // Access student details from Firestore based on the authenticated user's UID
    const studentRef = firestore.collection('students').doc(userUID);
    studentRef.get().then((doc) => {
      if (doc.exists) {
        const studentData = doc.data();
        console.log("Student Data:", studentData); // Log student data for verification
        displayStudentDetails(studentData); // Display student details in the studentdashboard section
      } else {
        console.log("No student data found for the authenticated user");
      }
    }).catch((error) => {
      console.error("Error getting student document:", error);
    });

    // Fetching document using a specific documentId
    const documentId = "SYnAdoi0WaNmioGRWl1GuNx71Qu1"; // Replace with your actual document ID
    firestore.collection("Students").doc(documentId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          console.log("User data:", userData);
          // Access userData properties as needed
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
        // Handle errors
      });
  } else {
    console.log("User is not logged in");
  }
});
