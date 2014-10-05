$.get("TXT/file.txt", function(data) {
/*---------------------------------*/
/*---------------------------------*/
	//data = data.replace(/(\r\n|\n|\r)/gm,"");
	//items = data.split("]]");
	$( "body" ).append( data );
});










