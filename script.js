window.addEventListener("load",function(){

    document.getElementById("submit").addEventListener("click",add);
    document.getElementById("doc").addEventListener("click",doc);
});

function add(){
    var url = document.getElementById("url_input").value;
    if(url!==""){
        var req = new XMLHttpRequest();
        req.open("GET",""+url);

        req.onerror = function(){
            console.log("Loading failure");
        }

        req.onload = function(){
            if(req.status===200){
            	
                console.log("ddddd");
                var xmldoc = req.responseXML;
                var titre = xmldoc.getElementById("title");
                var descr = xmldoc.getElementById("description");
                var lien = xmldoc.getElementById("url");

                var row = document.createElement('tr');
                row.appendChild(document.createElement('td').innerHTML = titre);
                row.appendChild(document.createElement('td').innerHTML = descr);
                row.appendChild(document.createElement('td').innerHTML = lien);

                document.getElementById("content").appendChild(row);
            }
            else{
                console.log("Error"+req.status);
            }
        }
    }
}
function doc(){
    if(document.getElementById("doc").checked){
        document.getElementById("doctext").innerHTML="<pre>Documentation:\nhuhhhh</pre>";
    }
    else{
        document.getElementById("doctext").innerHTML="";
    }
}