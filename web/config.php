<?php

$aRootParse = explode("/", $_SERVER["DOCUMENT_ROOT"]);
$sConfigDir = "/";

$i = 1;
while (!is_dir($sConfigDir. "files") and $i < count($aRootParse)) {
	$sConfigDir .= $aRootParse[$i] . "/";
	$i++;
}

$sConfigDir .= "files/";

if (is_dir($sConfigDir)) {
	$sConfigFile = $sConfigDir . "config.ini";
	if (is_file($sConfigFile)) {
		$aConfig = parse_ini_file($sConfigFile,true);
	} else {
		echo "File config.ini not found";
	}
} else {
	echo "Dir files not found.";
}
