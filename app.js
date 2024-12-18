// Firebase configuration (replace with your Firebase project settings)
const firebaseConfig = {
  apiKey: "AIzaSyC9zIiagFA9MqJfQf-mh5-YrqKmKwZUrJs",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "gamerewards-d4131",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// User points
let points = 0;

// Update points on the dashboard
function updatePoints() {
  document.getElementById("user-points").textContent = points;
}

// Spin Wheel
document.getElementById("spin-wheel").addEventListener("click", () => {
  const earnedPoints = Math.floor(Math.random() * 100) + 10; // Random points
  points += earnedPoints;
  alert(`You earned ${earnedPoints} points!`);
  updatePoints();
});

// Watch Ad
document.getElementById("watch-ad").addEventListener("click", () => {
  // Simulate watching an ad
  setTimeout(() => {
    const earnedPoints = 50; // Fixed points for ad
    points += earnedPoints;
    alert("Ad completed! You earned 50 points!");
    updatePoints();
  }, 3000); // 3 seconds delay
});

// Download App
document.getElementById("download-app").addEventListener("click", () => {
  alert("Redirecting to app download...");
  const earnedPoints = 100; // Fixed points for app download
  points += earnedPoints;
  updatePoints();
});

// Redeem Points
document.getElementById("redeem").addEventListener("click", () => {
  if (points >= 1000) {
    points -= 1000;
    alert("You redeemed 1000 points for a $10 gift card!");
    updatePoints();
  } else {
    alert("Not enough points to redeem.");
  }
});


