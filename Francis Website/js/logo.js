<script>
	$(document).ready(function(){
		$(".f1").click(function(){
			document.getElementById("fade1").style.display = "none";
			document.getElementById("fade2").style.display = "";
		});
		$(".f2").click(function(){
			document.getElementById("fade2").style.display = "none";
			document.getElementById("fade3").style.display = "";
		});
	});
	</script>