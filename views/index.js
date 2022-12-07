        let itemName = "";
        let price = "";
        
        function findItem(item){
            if(item === 'PAWC'){
                itemName = "Pistachio Almond Waffle Cone";
                price = 150;
            }else if(item === 'CWC'){
                itemName = "Chocolate Waffle Cone";
                price = 130;
            }else if(item === 'SWC'){
                itemName = "Strawberry Waffle Cone";
                price = 130;
            }else if(item === 'PWC'){
                itemName = "Pistachio Waffle Cone";
                price = 130;
            }else if(item === 'KWC'){
                itemName = "Kulfa Waffle Cone";
                price = 130;
            }else if(item === 'VOWC'){
                itemName = "Vanilla Oreo Waffle Cone";
                price = 130;
            }else if(item === 'VWC'){
                itemName = "Vanilla Waffle Cone";
                price = 130;
            }else if(item === 'VIS'){
                itemName = "Vanilla Icecream Shake";
                price = 270;
            }else if(item === 'SIS'){
                itemName = "Strawberry Icecream Shake";
                price = 270;
            }else if(item === 'ASIS'){
                itemName = "Alron Special Icecream Shake";
                price = 350;
            }else if(item === 'PIS'){
                itemName = "Pista Icecream Shake";
                price = 350;
            }else if(item === 'VOIS'){
                itemName = "Vanilla Waffle Cone";
                price = 270;
            }else if(item === 'CIS'){
                itemName = "Chocolate Icecream Shake";
                price = 270;
            }else if(item === 'KIS'){
                itemName = "Chocolate Icecream Shake";
                price = 270;
            }else if(item === 'PFP3'){
                itemName = "Person Family Pack 3";
                price = 540;
            }else if(item === 'PFP5'){
                itemName = "Person Family Pack 5";
                price = 900;
            }else if(item === 'PFP8'){
                itemName = "Person Family Pack 8";
                price = 1440;
            }else if(item === 'PFP10'){
                itemName = "Person Family Pack 10";
                price = 1800;
            }else if(item === 'PARC'){
                itemName = "Pistachio Almond Regular Cone";
                price = 100;
            }else if(item === 'BRC'){
                itemName = "Blueberry Regular Cone";
                price = 100;
            }else if(item === 'CRC'){
                itemName = "Chocolate Regular Cone";
                price = 80;
            }else if(item === 'SRC'){
                itemName = "Strawberry Regular Cone";
                price = 80;
            }else if(item === 'PRC'){
                itemName = "Pistachio Regular Cone";
                price = 80;
            }else if(item === 'KRC'){
                itemName = "Kulfa Regular Cone";
                price = 80;
            }else if(item === 'VORC'){
                itemName = "Vanilla Oreo Regular Cone";
                price = 80;
            }else if(item === 'VRC'){
                itemName = "Vanilla Regular Cone";
                price = 80;
            }else if(item === 'VI'){
                itemName = "Vanilla Icecream";
                price = 180;
            }else if(item === 'VI-S'){
                itemName = "Vanilla Icecream Small";
                price = 120;
            }else if(item === 'SI'){
                itemName = "Strawberry Icecream";
                price = 180;
            }else if(item === 'SI-S'){
                itemName = "Strawberry Icecream Small";
                price = 120;
            }else if(item === 'PI'){
                itemName = "Pista Icecream";
                price = 180;
            }else if(item === 'SI-S'){
                itemName = "Pista Icecream Small";
                price = 120;
            }else if(item === 'ASI'){
                itemName = "Alron Special Icecream";
                price = 350;
            }else if(item === 'MI'){
                itemName = "Max Icecream";
                price = 220;
            }else if(item === 'BKI'){
                itemName = "Badami Kulfa Icecream";
                price = 180;
            }else if(item === 'BKI-S'){
                itemName = "Badami Kulfa Icecream Small";
                price = 120;
            }else if(item === 'CI'){
                itemName = "Chocolate Icecream";
                price = 180;
            }else if(item === 'CI-S'){
                itemName = "Chocolate Icecream Small";
                price = 120;
            }else if(item === 'VOI'){
                itemName = "Vanilla Oreo Icecream";
                price = 180;
            }else if(item === 'VOI-S'){
                itemName = "Vanilla Oreo Icecream Small";
                price = 120;
            }else if(item === 'MI-3'){
                itemName = "Max Icecream 3 Scoop";
                price = 200;
            }else if(item === 'MI-2'){
                itemName = "Max Icecream 2 Scoop";
                price = 130;
            }else if(item === 'PAI-3'){
                itemName = "Pistachio Almond Icecream 3 Scoop";
                price = 210;
            }else if(item === 'PAI-2'){
                itemName = "Pistachio Almond Icecream 2 Scoop";
                price = 140;
            }else if(item === 'BI-3'){
                itemName = "Blueberry Icecream 3 Scoop";
                price = 210;
            }else if(item === 'PAI-2'){
                itemName = "Pistachio Almond Icecream 2 Scoop";
                price = 140;
            }else if(item === 'DFS'){
                itemName = "Dry Fruit Shake";
                price = 800;
            }else if(item === 'QBS'){
                itemName = "Qamari Banana Shake";
                price = 300;
            }else if(item === 'QBS-M'){
                itemName = "Qamari Banana Shake Medium";
                price = 250;
            }else if(item === 'QMS'){
                itemName = "Qamari Mango Shake";
                price = 300;
            }else if(item === 'QMS-M'){
                itemName = "Qamari Mango Shake Medium";
                price = 250;
            }else if(item === 'PS'){
                itemName = "Pineapple Shake";
                price = 300;
            }else if(item === 'PS-M'){
                itemName = "Pineapple Shake";
                price = 250;
            }else if(item === 'BKS'){
                itemName = "Banana Khajoor Shake";
                price = 200;
            }else if(item === 'BKS-M'){
                itemName = "Banana Khajoor Shake Medium";
                price = 150;
            }else if(item === 'ABS'){
                itemName = "Apple Banana Shake";
                price = 200;
            }else if(item === 'ABS-M'){
                itemName = "Apple Banana Shake Medium";
                price = 150;
            }else if(item === 'BS'){
                itemName = "Banana Shake";
                price = 200;
            }else if(item === 'BS-M'){
                itemName = "Banana Shake Medium";
                price = 150;
            }else if(item === 'AMS'){
                itemName = "Apple Milk Shake";
                price = 200;
            }else if(item === 'AMS-M'){
                itemName = "Apple Milk Shake Medium";
                price = 150;
            }else if(item === 'Q4S'){
                itemName = "Qamari Charmix Shake";
                price = 350;
            }else if(item === 'Q4S-M'){
                itemName = "Qamari Charmix Shake Medium";
                price = 300;
            }else if(item === 'AQS'){
                itemName = "Alron Qamari Signature";
                price = 350;
            }else if(item === 'AQS-M'){
                itemName = "Alron Qamari Signature Medium";
                price = 300;
            }else if(item === '4S'){
                itemName = "Charmix Shake";
                price = 250;
            }else if(item === '4S-M'){
                itemName = "Charmix Shake Medium";
                price = 200;
            }

        }

        let category1 = document.getElementById("category1");
        category1.addEventListener("input", function () {
            
            let name1 = document.getElementById("name1");
            let price1 = document.getElementById("price1");
            findItem(category1.value);
            name1.value = itemName;
            price1.value = price;
        });

        let category2 = document.getElementById("category2");
        category2.addEventListener("input", function () {
            
            let name2 = document.getElementById("name2");
            let price2 = document.getElementById("price2");
            findItem(category2.value);
            name2.value = itemName;
            price2.value = price;
        });

        let category3 = document.getElementById("category3");
        category3.addEventListener("input", function () {
            
            let name3 = document.getElementById("name3");
            let price3 = document.getElementById("price3");
            findItem(category3.value);
            name3.value = itemName;
            price3.value = price;
        });
    
   
        let category4 = document.getElementById("category4");
        category4.addEventListener("input", function () {
            
            let name4 = document.getElementById("name4");
            let price4 = document.getElementById("price4");
            findItem(category4.value);
            name4.value = itemName;
            price4.value = price;
        });


        // Quantity input fields 
        

    

