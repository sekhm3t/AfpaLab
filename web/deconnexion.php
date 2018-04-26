<?php

// SESSION v�rifi�e qu'elle a bien �t� d�marr�e au pr�alable
session_start();
// SESSION d�truite qui a �t� d�mar�e
session_destroy();

header('Location: route.php?page=accueil'); // permet la redirection
exit; // exit fait en sorte de rendre la page pr�c�dente inaccessible pour que l'utilisateur ne fasse pas le malin � naviguer entre les diff�rentes pages
// apr�s avoir d�truit sa session, non mais et puis quoi encore

?>