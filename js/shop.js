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

async function getProducts(db) {
  const empCol = collection(db, "Products");
  const empSnapshot = await getDocs(empCol);
  return empSnapshot;
}

function showData(Products) {
  //   console.log(Products);

  const row = table.insertRow(-1);
  const nameCol = row.insertCell(0);
  const priceCol = row.insertCell(1);
  const deleteCol = row.insertCell(2);
  row.classList.add("table-light");

  // Add an event listener to the form

  // Populate input fields with product data
  const nameInput = document.getElementById("nameInput");
  const priceInput = document.getElementById("priceInput");

  nameCol.textContent = Products.data().name;
  priceCol.textContent = Products.data().price;
  const img = document.createElement("img");
  img.setAttribute("ID", "myimgip15");
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

const tables = document.querySelector(".table");
const tableRows = tables.querySelectorAll("tbody tr");

// Create an empty array to store the product names and prices.
const productData = [];

// Loop through the table rows and extract the name and price of each product.
tableRows.forEach((row) => {
  const name = row.querySelector("td:first-child").textContent;
  const price = row.querySelector("td:nth-child(2)").textContent;

  // Add the product name and price to the array.
  productData.push({ name, price });
});
const productDataWithoutEmptyItems = productData.filter((item) => {
  return item.name !== "";
});
// Print the product data to the console.
console.log(productDataWithoutEmptyItems);


// Display the product names and prices in the HTML.
const productList = document.querySelectorAll(".product-item");

console.log(productList);

for (let i = 0; i < productDataWithoutEmptyItems.length; i++) {
  const productName = productList[i].querySelector("h3");
  const productPrice = productList[i].querySelector("strong");
  productName.textContent = productDataWithoutEmptyItems[i].name;
  productPrice.textContent = productDataWithoutEmptyItems[i].price;
  // Display the product name and price in the HTML.
  // You can use any HTML element to display the product name and price.
  // For example, you can use a `div` element, a `paragraph` element, or a `span` element.

  productList[i].innerHTML = `
  <img src="" class="img-fluid product-thumbnail" id="pd${i}">
    <h3>${productName.textContent}</h3>
    <p>${productPrice.textContent}</p>
   
   <span class="icon-cross">
                <img src="./../images/cross.svg" class="img-fluid">
              </span>
  `;
  

}
