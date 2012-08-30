<?php

$extensions = array();
$dir = new DirectoryIterator(__DIR__ . '/ext/js/');
foreach ($dir as $file) {
	if ($file->isDot()) {
		continue;
	}

	$extensions[] = $extension = $file->getBasename('.js');
	V8Js::registerExtension($extension, file_get_contents($file->getPathname()));
}

$v8 = new V8Js('global', array(), $extensions);

require __DIR__ . '/ext/php/DB.php';
$v8->db = new DB("localhost", "bikini", "bikini", "bikini");

$v8->sprintf = function($string) {
    return call_user_func_array('sprintf', func_get_args());
};

$v8->executeString(file_get_contents('main.js'), 'main.js');
