<?php // Permanent 301 Redirect via PHP
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: javascript:alert(1)");
	exit();
?>