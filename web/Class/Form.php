<?php

Class Form	{
	public function getFormsAndSessionsVariables()	{
		// put all variables $_SESSION, $_POST et $_GET into the array $VARS_HTML
		$VARS_HTML= [];

		foreach($_POST as $key => $val)	{
			$VARS_HTML[$key]= $val;
		}

		foreach($_GET as $key => $val)	{
			$VARS_HTML[$key]= $val;
		}

		if ( (!(isset($VARS_HTML["page"]))) || ($VARS_HTML["page"] == "") )	{
			$VARS_HTML["page"]= "accueil";
		}

		return $VARS_HTML;
	}
}

?>
