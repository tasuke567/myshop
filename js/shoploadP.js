import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyAz42eDHUGqbr85JjdqFUy6KZHL61HVY",
  authDomain: "myshopwey.firebaseapp.com",
  databaseURL:
    "https://myshopwey-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myshopwey",
  storageBucket: "myshopwey.appspot.com",
  messagingSenderId: "45589448356",
  appId: "1:45589448356:web:c4b2f24ffc7e0c916a4831",
  measurementId: "G-JYPVT0XN17",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const table = document.getElementById("table");
const storage = getStorage(app);

const ip15pm = ref(storage, "images/ip5.webp");
const ss23 = ref(
  storage,
  "images/th-galaxy-s23-s918-sm-s918blibthl-534856828 (1).png"
);
const ip14 = ref(storage, "images/download.jpg");
const ip15 = ref(storage, "images/images(1).jpg");
const oppon2 = ref(storage, "images/download.webp");
const zflip5 = ref(storage, "images/zflip5.jpg");
const ss22 = ref(storage, "images/ss22.jpg");
const ggp7 = ref(storage, "images/download (1).jpg");

downloadAndInsertImagepd0(ip15pm);
downloadAndInsertImagepd1(ss23);
downloadAndInsertImagepd2(ip14);
downloadAndInsertImagepd3(ip15);
downloadAndInsertImagepd4(oppon2);
downloadAndInsertImagepd5(zflip5);
downloadAndInsertImagepd6(ss22);
downloadAndInsertImagepd7(ggp7);

function downloadAndInsertImagepd0(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd0");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd1(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd1");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}



function downloadAndInsertImagepd2(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd2");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd3(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd3");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd4(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd4");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd5(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd5");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd6(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd6");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagepd7(imageRef) {
  // Get the download URL for the image file
  getDownloadURL(imageRef)
    .then((url) => {
      // Download the image directly
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Insert the image into an <img> element
      const img = document.getElementById("pd7");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}
