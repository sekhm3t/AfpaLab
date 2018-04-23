<?php

// List of classes needed for this class
require_once "Configuration.php";
require_once "Db.php";
require_once "Form.php";


Class Initialize
{
	// Database instance object
	protected $obj_bdd;
	// All globals from INI
	private $obj_conf;
	public $GLOBALS_INI;
	// Form instance object
	private $obj_form;
	public $VARS_HTML = ["headTitle" => "AfpaLab"];

	public function __construct()
	{
		// Instance of Config
		$this->obj_conf = new Configuration();
		$this->GLOBALS_INI = $this->obj_conf->getGlobalsINI();

		// Instance of BDD
		$this->obj_bdd = new Db($this->GLOBALS_INI["DATABASE"]["DB_HOST"],
				$this->GLOBALS_INI["DATABASE"]["DB_LOGIN"],
				$this->GLOBALS_INI["DATABASE"]["DB_PSW"],
				$this->GLOBALS_INI["DATABASE"]["DB_NAME"]);

		// Instance of Form
		$this->obj_form = new Form();
		$this->VARS_HTML = $this->obj_form->getFormsAndSessionsVariables();
	}

	public function __destruct()
	{
		// destroy Instance of Conf
		unset($this->obj_conf);
		// destroy Instance of Form
		unset($this->obj_form);
		// disconnect of BDD
		// destroy Instance of BDD
		unset($this->obj_bdd);
	}

}

?>
