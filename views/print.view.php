<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate Slip | Alron</title>
    <style>
        <?php require("css/print.css"); ?>
    </style>
</head>
<body>
    
    <div id="slip">
        <div class="logo">
            <img src="public/images/ice-cream.png" height="70px" widht="70px" alt="icecream-logo">
        </div>
        <div class="address">
            <h3>AL-RON ICECREAM & JUICE POINT NEAR ZAMAN SONS</h3>
            <h4>Contact: 03029889322</h4>
        </div>
        <div class="date-time">
            <p id="date"> </p>
            <p id="time"></p>
        </div>
        <div class="summary">
            <div class="head-names">
                <h4>Item</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
            </div>
            <div class="items">
                <div class="item">
                    <p id="name"><?= $name1 ?></p>
                    <p id=""><?= $quantity1 ?></p>
                    <p id=""><?php
                        if($quantity1 !== "" && $price1 !== ""){
                            echo $price1*$quantity1;
                        }else{
                            $price1 = 0;
                            $quantity1 = 0;
                        }
                    ?></p>
                </div>
                <div class="item">
                    <p id="name"><?= $name2 ?></p>
                    <p id=""><?= $quantity2 ?></p>
                    <p id=""><?php
                    
                    if($quantity2 !== "" && $price2 !== ""){
                        echo $price2*$quantity2;
                     }else{
                        $price2 = 0;
                        $quantity2 = 0;
                     }

                    ?></p>
                </div>
                <div class="item">
                    <p id="name"><?= $name3 ?></p>
                    <p id=""><?= $quantity3 ?></p>
                    <p id=""><?php 
                    
                    if($quantity3 !== "" && $price3 !== ""){
                        echo $price3*$quantity3;
                     }else{
                        $price3 = 0;
                        $quantity3 = 0;
                     }
                    
                    ?></p>
                </div>
                <div class="item">
                    <p id="name"><?= $name4 ?></p>
                    <p id=""><?= $quantity4 ?></p>
                    <p id=""><?php 
                    
                    if($quantity4 !== "" && $price4 !== ""){
                        echo $price4*$quantity4;
                     }else{
                        $price4 = 0;
                        $quantity4 = 0;
                     }

                    ?></p>
                </div>
                
            </div>
            
        </div>
        <div class="total-price">
            <p>Total </p>
            <p><?= ($price1*$quantity1)+($price2*$quantity2)+($price3*$quantity3)+($price4*$quantity4); ?></p>
        </div>
        <div class="greet">
            <p>Thanks for comming here.</p>
        </div>
        <div class="software">
            <p>Software by Hilal & Co</p>
        </div>

    </div>


    <button id="PrintButton" onclick="PrintPage()">Print</button>

    <script type="text/javascript">

        function PrintPage() {
            window.print();
        }


        // Date and time 

        let currentDate = document.getElementById("date");
        let currentTime = document.getElementById("time");

        var date = new Date();
        var current_date = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear() ;
        currentDate.innerHTML = current_date;

        // time 

        var date = new Date();
        var current_time = date.getHours()+":"+date.getMinutes();
        currentTime.innerHTML = current_time;

    </script>
</body>
</html>