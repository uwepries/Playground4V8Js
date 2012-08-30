<?php
class DB extends MySQLi {
	public function query($sql) {
    	$result = parent::query($sql);
		if ($result === true || $result === false) {
			return $res;	
		}

		$data = array();

		while($row = $result->fetch_assoc())
			$data[] = $row;

		return $data;
	}
}


