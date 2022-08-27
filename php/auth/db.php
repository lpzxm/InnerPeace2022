<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'inner_peace_db');

// Conexion a la base de datos
$con = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);


if ($con === false) {
    die("ERROR: NO SE PUEDE CONECTAR. ".$con->connect_error);
}

class Database {
    private $servername;
    private $username;
    private $password;
    private $dbname;

    protected function connect() {
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "inner_peace_db";

        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        return $conn;
    }
}    




?>