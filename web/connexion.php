<?php
session_start(); // on peut appeler les variables $_SESSION sur n'importe quel fichier par le biais de session_start()
include_once('includes.php');

if(isset($_SESSION['pseudo'])){
	header('Location: accueil.php'); //redirection vers la page d'accueil 
	// en étant connecté. 
	// C'est inutile de revenir en arrière donc on cible cette page accueil 
	// que l'on ne veut plus revoir après avoir validé le début de la session
	exit; // exit fait en sorte de rendre la page d'accueil inaccessible 
	// une fois qu'on est connecté 
}

if(!empty($_POST)){
	extract($_POST);
	$valid = true;
	
	$Pseudo = htmlspecialchars(trim($Pseudo));
	$Password = trim($Password);
		
	if(empty($Pseudo)){
		$valid = false;
		$_SESSION['flash']['warning'] = "Veuillez renseigner votre pseudo !";
	}
	
	if(empty($Password)){
		$valid = false;
		$error_password = "Veuillez renseigner un mot de passe !";
	}
	
	
	$req = $DB->query('Select * from user where pseudo = :pseudo and password = :password', 
	array('pseudo' => $Pseudo, 'password' => crypt($Password, '$2a$10$1qAz2wSx3eDc4rFv5tGb5t'))); 
	// On vérifie que le mail et le mot de passe existe bien dans la Base de données et le query 
	// permet de sélectionner les informations && l'étoile * permet de 
	// sélectionner toutes les informations
	$req = $req->fetch(); 
	// le fetch sert à récupérer 
	// une ligne pour 
	// vérifier si ça existe 
		
	if(!$req['pseudo']){                       
		$valid = false; // si il ne trouve pas le mail c'est faux
		$_SESSION['flash']['danger'] = "Votre pseudo ou mot de passe ne correspondent pas";
	}
	
	
	if($valid){          
		
		
		// si ça correspond, on va charger une nouvelle session
		//$_SESSION['id'] = $req['id']; // on charge la requête id
		$_SESSION['id'] = $req['idpublic'];
		$_SESSION['pseudo'] = $req['pseudo'];
		$_SESSION['mail'] = $req['mail'];
		$_SESSION['password'] = $req['password'];
		
		
		$_SESSION['flash']['info'] = "Bonjour " . $_SESSION['pseudo'];
		header('Location: accueil.php'); // une redirection vers la 
		// page accueil pour confirmer le succès de la connexion
		exit; // exit sert à ne pas revenir en arrière 
			
	}
	
}	
?>





<!DOCTYPE html>
<html lang="fr">
	<header>
		
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
		<link href="bootstrap/js/bootstrap.js" rel="stylesheet" type="text/css"/>
		<link href="style.css" rel="stylesheet" type="text/css" media="screen"/>
		
		<title>Connexion</title>
	</header>
	
	<body>
		
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="./">Exercices</a>
		    </div>
		
		    
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="inscription.php">Inscription</a></li>
		        <li class="active"><a href="connexion.php">Connexion <span class="sr-only">(current)</span></a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		
		<?php 
		    if(isset($_SESSION['flash'])){ 
		        foreach($_SESSION['flash'] as $type => $message): ?>
				<div id="alert" class="alert alert-<?= $type; ?> infoMessage"><a class="close">X</span></a>
					<?= $message; ?>
				</div>	
		    
			<?php
			    endforeach;
			    unset($_SESSION['flash']); // la fonction unset() détruit la variable
			}
		?> 

	
		<div class="container-fluid">
				
	        <div class="row">
		        
	            <div class="col-xs-1 col-sm-2 col-md-3"></div>
	            <div class="col-xs-10 col-sm-8 col-md-6">
		            
		            <h1 class="index-h1">Connexion</h1>
		            
		            <br/>
	                
	                <form class="con-form" method="post" action="">
	                    
                        <label>Pseudo</label>
	
                    	<input class="input" type="text" name="Pseudo" placeholder="Pseudo" value="<?php if (isset($Pseudo)) echo $Pseudo; ?>" required="required">	

						<br/>
						
	                    <label>Mot de passe</label>
	                    	
                    	<br/>
						<?php
							if(isset($error_password)){
								echo $error_password."<br/>";
							}	
						?>

                        <input class="input" type="password" name="Password" placeholder="Mot de passe" value="<?php if (isset($Password)) echo $Password; ?>" required="required">

	
	                    <div class="row">
	                        <div class="col-xs-0 col-sm-10 col-md-2"></div>
	                        <div class="col-xs-12 col-sm-2 col-md-8">
								<button type="submit">Se connecter</button>
	                        </div>
	                        <div class="col-xs-0 col-sm-1 col-md-2"></div>                                
	                   </div>
	
	                </form>
	                
	            </div>
	
	            <div class="col-xs-0 col-sm-2 col-md-3"></div>
	        </div>
        </div>
		<script src="bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>
