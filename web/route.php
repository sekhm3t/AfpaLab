<?php

require "config.php";

$page = $_GET["page"];

require $page . ".php";

require $aConfig["PATHS"]["PATH_HOME"] . $aConfig["PATHS"]["PATH_VIEW"] . "default_layout.html";
