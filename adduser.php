<?php

$json_data = $_POST["data"];

print $json_data;
$ch = curl_init('http://localhost:3030/addNewUser');  

                                                                    
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($json_data))                                                                       
);                                                                                                                   
$result = curl_exec($ch);

print $result;

?>