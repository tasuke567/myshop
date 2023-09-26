import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc ,  doc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAyAz42eDHUGqbr85JjdqFUy6KZHL61HVY",
    authDomain: "myshopwey.firebaseapp.com",
    projectId: "myshopwey",
    storageBucket: "myshopwey.appspot.com",
    messagingSenderId: "45589448356",
    appId: "1:45589448356:web:c4b2f24ffc7e0c916a4831",
    measurementId: "G-JYPVT0XN17"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const table = document.getElementById("table")
const form = document.getElementById("addForm")

async function getProducts(db) {
    const empCol = collection(db, 'Products')
    const empSnapshot = await getDocs(empCol)
    return empSnapshot
}

function showData(Products) {
    const row = table.insertRow(-1);
    const nameCol = row.insertCell(0);
    const priceCol = row.insertCell(1);
    const deleteCol = row.insertCell(2);

    nameCol.textContent = Products.data().name;
    priceCol.textContent = Products.data().price;

    // สร้างปุ่มลบ
    const btn = document.createElement('button');
    btn.textContent = 'ลบข้อมูล';
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('data-id', Products.id);
    deleteCol.appendChild(btn);

    btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        // ถามเตือนก่อนลบเอกสาร
        const confirmed = confirm('Are you sure you want to delete this product?');
        if (confirmed) {
            deleteDoc(doc(db, 'Products', id));
            // refreshData()
        }
    });
}


//ดึงกลุ่ม document
const data = await getProducts(db)
data.forEach(Products => {
    showData(Products)
})


//ดึงข้อมูลจากแบบฟอร์ม
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(collection(db, 'Products'), {
        name: form.name.value,
        price: form.price.value
    })
    form.name.value = ""
    form.price.value = ""
    // refreshData()
    alert("บันทึกข้อมูลเรียบร้อย")
})

async function refreshData() {
    // ดึงข้อมูลผลิตภัณฑ์ทั้งหมดจาก Firestore
    const products = await getProducts(db);

    // รีเซ็ตตาราง
    const table = document.getElementById('table');

    table.classList.add('table', 'table-bordered');
    table.id = 'table';

    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'name';
    headerRow.appendChild(nameHeader);

    const priceHeader = document.createElement('th');
    priceHeader.textContent = 'price';
    headerRow.appendChild(priceHeader);

    const deleteHeader = document.createElement('th');
    deleteHeader.textContent = 'ลบข้อมูล';
    headerRow.appendChild(deleteHeader);

    table.appendChild(headerRow);

    // แสดงข้อมูลผลิตภัณฑ์ในตาราง
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.appendChild(document.createElement('th')).textContent = product.data().name;
        row.appendChild(document.createElement('th')).textContent = product.data().price;
        table.appendChild(row);
    });
}
