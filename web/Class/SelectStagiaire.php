<?php
// List of classes needed for this class
require_once "Initialize.php";

Class SelectStagiaire extends Initialize
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
		
	} // end of private function main()

	private function getStudent(){
		$spathSQLSelect = $this->GLOBALS_INI["PATHS"]["PATH_HOME"] . $this->GLOBALS_INI["PATHS"]["PATH_MODEL"] . "select_stagiaire.sql";

		$this->result["liste_stagiaires"] = $this->obj_bdd->getSelectDatas(
			$spathSQLSelect,
			array(
				'id_session' => $this->id_session
				),
				0
		);
	}
}

?>
