<?php

session_start();

$_SESSION["login"] = "test";

require "config.php";

$headTitle = "Accueil AfpaLab";
$page = "index";

require $aConfig["PATHS"]["PATH_HOME"] . $aConfig["PATHS"]["PATH_VIEW"] . "default_layout.html";
