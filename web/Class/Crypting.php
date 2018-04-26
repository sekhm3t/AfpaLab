<?php

class Crypting {
	// A UTILISER, et on compare, on ne peut pas décrypter à l'inverse.
	function __construct($maCleDeCryptage, $maChaineACrypter, $bSalt = 0) {
		if ($bSalt) {
			// Set a random salt
			$salt = openssl_random_pseudo_bytes(8);
		} else {
			// Or empty salt so that we'll be able to compare again
			$salt= "";
		}
		$salted = '';
		$dx = '';
		// Salt the key(32) and iv(16) = 48
		while (strlen($salted) < 48) {
			$dx = md5($dx.$maCleDeCryptage.$salt, true);
			$salted .= $dx;
		}
		$key = substr($salted, 0, 32);
		$iv  = substr($salted, 32,16);
		$encrypted_data = openssl_encrypt($maChaineACrypter, 'aes-256-cbc', $key, true, $iv);
		return base64_encode('Salted__' . $salt . $encrypted_data);
	}
}

?>
