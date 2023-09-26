<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
        }

        .modal-content {
            background-color: #fff;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
            position: relative;
        }

        .close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            cursor: pointer;
        }

        /* Style for input fields and button as needed */
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>

    <main class="d-flex flex-column">
        <div class="container my-3">
            <h2 class="text-center">WEY STORE</h2>
            <form id="addForm">
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class="form-control" name="name">
                </div>
                <div class="form-group">
                    <label for="price">price</label>
                    <input type="text" class="form-control" name="price">
                </div>
                <div class="form-group my-3">
                    <button type="submit" class="btn btn-success">submit</button>
                </div>
            </form>
            <hr>
            <div id="updateModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <form id="updateForm" action="/update" method="post">
                        <!-- Input fields for product data -->
                        <input type="text" name="nameu" id="nameInput">
                        <input type="number" name="priceu" id="priceInput">
                        <!-- Submit button -->
                        <button type="submit">อัปเดต</button>
                    </form>
                </div>
            </div>
            

            <table class="table table-bordered" id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </table>
        </div>


    </main>
    <script type="module" src="./myapp.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>

</html>
