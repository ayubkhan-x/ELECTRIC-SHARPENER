<?php
  if(isset($_POST['submitButton'])){
  $apiToken = "5736702325:AAFI_RO3X1kKIumqCBCvPXwcSOWmS2Ea1NA";
  $data = [
    'chat_id' => '-1001539398172', 
    'text' => $_POST['name'],['phone']
  ];
  $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" .
                                 http_build_query($data) );
  }    
?>