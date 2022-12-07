<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alron Ice Cream | Resturant</title>
    <style>
        <?php require("css/index.css"); ?>
    </style>
</head>
<body>
    <div class="container">
        <div class="nav flex">
            <h1>Alron Icecream</h1>
            <img src="public/images/drink.png" alt="juice-icon" height="80px" width="80px">
        </div>

        <form action="print" method="get">

            <div class="table">
                <table id="products">

                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td><input id="category1" type="text" placeholder="Enter Category"></td>
                        <td><input id="name1" name="name1" type="text"></td>
                        <td><input id="quantity1" name="quantity1" type="text"></td>
                        <td><input id="price1" name="price1" type="number"></td>
                        
                    </tr>  
                    <tr>
                        <td><input id="category2" type="text" placeholder="Enter Category"></td>
                        <td><input id="name2" name="name2" type="text"></td>
                        <td><input id="quantity2" name="quantity2" type="text"></td>
                        <td><input id="price2" name="price2" type="number"></td>
                        
                    </tr>
                    <tr>
                        <td><input id="category3" type="text" placeholder="Enter Category"></td>
                        <td><input id="name3" name="name3" type="text"></td>
                        <td><input id="quantity3" name="quantity3" type="text"></td>
                        <td><input id="price3" name="price3" type="number"></td>
                        
                    </tr>
                    <tr>
                        
                            <td><input id="category4" type="text" placeholder="Enter Category"></td>
                            <td><input id="name4" name="name4" type="text"></td>
                            <td><input id="quantity4" name="quantity4" type="text"></td>
                            <td><input id="price4" name="price4" type="number"></td>
                        
                </table>
            </div>

            <input type="submit" id="generate-button" value="Generate Slip">

            </form>

        
    </div>

    <script>
        <?php require("index.js"); ?>
    </script>

</body>
</html>