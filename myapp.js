import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'ลบข้อมูล';
    btnDelete.classList.add('btn', 'btn-danger', 'm-1');
    btnDelete.setAttribute('data-id', Products.id);
    deleteCol.appendChild(btnDelete);
    // สร้างปุ่มอัปเดต
    const btnUpdate = document.createElement('button');
    btnUpdate.textContent = 'อัปเดต';
    btnUpdate.classList.add('btn', 'btn-primary', 'm-1');
    btnUpdate.setAttribute('data-id', Products.id);
    deleteCol.appendChild(btnUpdate);

    btnDelete.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        // ถามเตือนก่อนลบเอกสาร
        const confirmed = confirm('Are you sure you want to delete this product?');
        if (confirmed) {
            deleteDoc(doc(db, 'Products', id));

        }
    });

    // เพิ่มเหตุการณ์ click
    btnUpdate.addEventListener('click', (e) => {
        // รับ ID ของเอกสาร
        let id = e.target.getAttribute('data-id');
        console.log(id)
        // แสดงแบบฟอร์มอัปเดต
        showUpdateForm(id);

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

    alert("บันทึกข้อมูลเรียบร้อย")
})

function showUpdateForm(id) {

    // Get the document to update
    const productRef = doc(db, "Products", id);
    console.log(id)

    // Fetch the specific product document
    getDoc(productRef)
        .then(async (productSnapshot) => {
            if (productSnapshot.exists()) {
                const product = productSnapshot.data();

                // Populate input fields with product data
                const nameInput = document.getElementById('nameInput');
                const priceInput = document.getElementById('priceInput');
                nameInput.value = product.name;
                priceInput.value = product.price;


                const btnSubmit = document.createElement('button');
                btnSubmit.type = 'submit';
                btnSubmit.textContent = 'อัปเดต';
                btnSubmit.classList.add('btn', 'btn-primary', 'm-1');
                btnSubmit.setAttribute('data-id', product.id);


                // Show the modal
                const modal = document.getElementById('updateModal');
                modal.style.display = 'block';

                const closemadal = document.querySelector("span")
                closemadal.addEventListener('click', (e) => {
                    // Hide the modal
                    const modal = document.getElementById('updateModal');
                    modal.style.display = 'none';


                })
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
        // Update the document in Firestore
        // Use the updated field names "nameu" and "priceu"
        const productRef = doc(db, "Products", id);
        updateDoc(productRef, { name, price })
            .then(() => {
                alert("บันทึกข้อมูลเรียบร้อย")
                closeModal();
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    }

    // Add an event listener to the form
    const updateForm = document.getElementById('updateForm');
    updateForm.addEventListener('submit', updateProduct);
}



function closeModal() {
    // Hide the modal
    const modal = document.getElementById('updateModal');
    modal.style.display = 'none';

}







const btnSubmit = document.createElement('button');
btnSubmit.type = 'submit';
btnSubmit.textContent = 'อัปเดต';
btnSubmit.classList.add('btn', 'btn-primary', 'm-1');
form.appendChild(btnSubmit);