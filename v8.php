<?php

$mysqli = new mysqli("localhost", "bikini", "bikini", "bikini");

V8Js::registerExtension('string', file_get_contents('string.js'), array('function'));
V8Js::registerExtension('function', file_get_contents('function.js'));

$v8 = new V8Js('PHP', array(), array('function', 'string'));
$v8->sprintf = function ($string) {
    return call_user_func_array('sprintf', func_get_args());
};

$v8->query = function($query) use ($mysqli) {
    $res = $mysqli->query($query);
	if ($res === true || $res === false) {
		return $res;		
	}

    $data = array();

    while ($row = $res->fetch_assoc()) {
        $data[] = $row;
    }

    return $data;
};

function v8_exec($v8, $path) {
    return $v8->executeString(file_get_contents($path), basename($path));
}

v8_exec($v8, 'main.js');
