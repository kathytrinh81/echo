<?php

function echoS()
{
	$args = func_get_args();
	foreach ($args as $i)
	
	{
  	echo $i;
  	echo'<br>';
  	}
  	
}

echoS();
echoS('bla');
echoS('foo', 'bar', 'baz');

?>