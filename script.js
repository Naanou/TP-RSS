window.addEventListener("load",function(){

	document.getElementById("submit").addEventListener("click",add);
});

function add(){
	var url = document.getElementById("url_input").value;
	if(url!==""){
		var req = new XMLHttpRequest();
		req.open(url);

		req.onerror = function(){
			console.log("Loading failure");
		}

		req.onload = function(){
			if(req.status===200){
				var data = 
			}
		}
	}
}
