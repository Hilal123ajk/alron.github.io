<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => 'controllers/index.php',
    '/print' => 'controllers/print.php'
];



function routeToController($uri,$routes){

    if(array_key_exists($uri,$routes)){

        require $routes[$uri];
    
    }else{
    
        abortNotFond();
    
    }
}

function abortNotFond($code = 404){

    http_response_code(404);

    require "views/{$code}.view.php";
}

routeToController($uri,$routes);