function rotation(id){
	var angle = 0;
	setInterval(function(){
		angle++;
		$("#"+id).rotate(angle);
	},5);
}

$( document ).ready(function(){
	rotation("radarImg");
});