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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const table = document.getElementById("table");
const storage = getStorage(app);
const storageRef = ref(storage);

const spaceRef = ref(
  storage,
  "gs://myshopwey.appspot.com/android-svgrepo-com.svg"
);

const android = ref(storage, "images/android-svgrepo-com.svg");

const ios = ref(storage, "images/ios-svgrepo-com.svg");

const ip15 = ref(storage, "images/ip5.webp");

downloadAndInsertImagea(android);
downloadAndInsertImagei(ios);

function downloadAndInsertImagea(imageRef) {
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
      const img = document.getElementById("myimgandriod");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}
function downloadAndInsertImageip15(imageRef) {
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
      const img = document.getElementById("myimgip15");
      const rows = table.querySelectorAll("tbody tr");

      for (const row of rows) {
        const firstName = row.querySelector("td:nth-child(1)");

        console.log(firstName.textContent);
           
          img.setAttribute("src", url);
        
        
      }
      
    })
    .catch((error) => {
      // Handle any errors
    });
}

function downloadAndInsertImagei(imageRef) {
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
      const img = document.getElementById("myimgios");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

async function getProducts(db) {
  const empCol = collection(db, "Products");
  const empSnapshot = await getDocs(empCol);
  return empSnapshot;
}

const form = document.getElementById("addForm1");
const btnaddd = document.getElementById("btnadda");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "Products"), {
      name: form.namea.value,
      price: form.pricea.value,
    });
    alert("บันทึกข้อมูลเรียบร้อย");
    form.namea.value = "";
    form.pricea.value = "";
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

function showData(Products) {
  const row = table.insertRow(-1);
  const nameCol = row.insertCell(0);
  const priceCol = row.insertCell(1);
  const deleteCol = row.insertCell(2);
  row.classList.add("table-light");
  const btnadda = document.getElementById("btnadd");
  //ดึงข้อมูลจากแบบฟอร์ม
  btnadda.addEventListener("click", (e) => {
    const btnadd = document.createElement("button");
    btnadd.type = "submit";
    btnadd.textContent = "เพิ่ม";
    btnadd.classList.add("btn", "btn-primary", "m-1");
  });
  // Add an event listener to the form

  // Populate input fields with product data
  const nameInput = document.getElementById("nameInput");
  const priceInput = document.getElementById("priceInput");

  nameCol.textContent = Products.data().name;
  priceCol.textContent = Products.data().price;
  const img = document.createElement("img");
  img.setAttribute("ID","myimgip15")
   nameCol.appendChild(img);
   img.classList.add("ratio", "ratio-16x9");
  // downloadAndInsertImageip15(ip15);
  

  // สร้างปุ่มลบ
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "DELETE";
  btnDelete.classList.add("btn", "btn-danger", "m-1");
  btnDelete.style.width = "80px";
  btnDelete.setAttribute("data-id", Products.id);
  deleteCol.appendChild(btnDelete);
  // สร้างปุ่มอัปเดต
  const btnUpdate = document.createElement("button");
  btnUpdate.textContent = "EDIT";
  btnUpdate.style.width = "80px";
  btnUpdate.classList.add("btn", "btn-primary", "m-1");
  btnUpdate.setAttribute("data-id", Products.id);
  btnUpdate.setAttribute("data-bs-target", "#Modalupdate");
  btnUpdate.setAttribute("data-bs-toggle", "modal");
  deleteCol.appendChild(btnUpdate);

  btnDelete.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");

    // ถามเตือนก่อนลบเอกสาร
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      deleteDoc(doc(db, "Products", id));
    }
  });

  // เพิ่มเหตุการณ์ click
  btnUpdate.addEventListener("click", (e) => {
    // รับ ID ของเอกสาร
    let id = e.target.getAttribute("data-id");
    console.log(id);
    // แสดงแบบฟอร์มอัปเดต
    showUpdateForm(id);
  });
}

//ดึงกลุ่ม document
const data = await getProducts(db);
data.forEach((Products) => {
  showData(Products);
});

function showUpdateForm(id) {
  // Get the document to update
  const productRef = doc(db, "Products", id);
  console.log(id);

  // Fetch the specific product document
  getDoc(productRef)
    .then(async (productSnapshot) => {
      if (productSnapshot.exists()) {
        const product = productSnapshot.data();

        // Populate input fields with product data
        const nameInput = document.getElementById("nameInput");
        const priceInput = document.getElementById("priceInput");
        nameInput.value = product.name;
        priceInput.value = product.price;

        const btnSubmit = document.createElement("button");
        btnSubmit.type = "submit";
        btnSubmit.textContent = "UPDATE";
        btnSubmit.classList.add("btn", "btn-success", "me-md-2");
        btnSubmit.setAttribute("data-id", product.id);

        console.log(btnSubmit);
      } else {
        console.log("Product not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
  // Update product function
  function updateProduct(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[name="nameu"]').value;
    const price = e.target.querySelector('input[name="priceu"]').value;
    console.log(name);
    console.log(price);
    // Update the document in Firestore
    // Use the updated field names "nameu" and "priceu"
    const productRef = doc(db, "Products", id);
    updateDoc(productRef, { name, price })
      .then(() => {
        alert("บันทึกข้อมูลเรียบร้อย");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  }

  // Add an event listener to the form
  const updateForm = document.getElementById("updateForm");
  updateForm.addEventListener("submit", updateProduct);
}

// function closeModal() {
//     // Hide the modal
//     const modal1 = document.getElementById('updateModal');
//     const modal2 = document.getElementById('addModal');
//     modal2.style.display = 'none';
//     modal1.style.display = 'none';

// }

// const btnSubmit = document.createElement('button');
// btnSubmit.type = 'submit';
// btnSubmit.textContent = 'อัปเดต';
// btnSubmit.classList.add('btn', 'btn-primary', 'm-1');
// form.appendChild(btnSubmit);
