<?php
// List of classes needed for this class
require_once "Initialize.php";

Class Stagiaires extends Initialize
{

	public $result;

	public function __construct()
	{
		// SESSION
		 session_start();
		// Call Parent Constructor
		parent::__construct();

		// init variables result
		$this->result = [];

		// execute main function
		$this->main();
	}

	public function __destruct()
	{
		parent::__destruct();
	}

	private function main()
	{
		$this->VARS_HTML["page"] = "stagiaires";
		$this->VARS_HTML["headTitle"] = "Stagiaires";
		$this->VARS_HTML["libJs"][0] = "owl.carousel";
		$this->VARS_HTML["libJs"][1] = "send_mail";
	} // end of private function main()
}

?>
