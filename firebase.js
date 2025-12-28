
<!-- firebase.js (ES module) -->
<script type="module">
// Firebase CDN v12 (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Your Firebase config — the one you shared
const firebaseConfig = {
  apiKey: "AIzaSyBcHCDBg7FMk9ItN1851vujLqhQaLQ7wCY",
  authDomain: "cat-rnsit.firebaseapp.com",
  projectId: "cat-rnsit",
  storageBucket: "cat-rnsit.firebasestorage.app",
  messagingSenderId: "811409086978",
  appId: "1:811409086978:web:6b085ea58b59e39415651b",
  measurementId: "G-08WRHKJ4EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Export Firestore
export const db = getFirestore(app);
</script>
