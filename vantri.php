<?php
$x =     array("nid" => 1, "ht" => 2);
$y =     array("nid" => 1, "ht" => 4);
$a = array(
    array("nid" => 1, "ht" => 2),
    array("nid" => 2 , "ht" => 4),
    array("nid" => 1, "ht" => 10)
);
$m = array_intersect_assoc ($x,$y);
print_r ($m);
for($i =0 ;$i <3; $i++) {

}