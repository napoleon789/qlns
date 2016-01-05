<?php
$a = array(
    "thang" => 10,
    "nam" => 20,

);
 $b = array(
     "thang" => 100,
     "nam" => 40
 );
$c = array(
    "thang" => 10,
    "nam" => 200
);
$m = array_diff ($a,$b,$c);
print_r($m);
