window.addEventListener("load",function(){

    document.getElementById("submit").addEventListener("click",add);
    document.getElementById("doc").addEventListener("click",doc);
});

function add(e){
    e.preventDefault();
    var url = document.getElementById("url_input").value;
    if(url!==""){
        console.log(url);
        var req = new XMLHttpRequest();
        var proxy="https://crossorigin.me/";
        req.open("GET",proxy+url);

        req.onerror = function(){
            console.log("Loading failure");
        }

        req.onload = function(){
            if(req.status===200){
                var xmldoc = req.responseXML;
                var titre = xmldoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                var descr = xmldoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
                var lien = xmldoc.getElementsByTagName("enclosure")[0].attributes[0].nodeValue;
                var type = xmldoc.getElementsByTagName("enclosure")[0].attributes[2].nodeValue;
                
                console.log(titre);
                console.log(descr);
                console.log(lien);
                console.log(type);
                
                var row = document.createElement('tr');
                var cell1 = document.createElement('td');
                cell1.innerHTML = titre;
                row.appendChild(cell1);
                var cell2 = document.createElement('td');
                cell2.innerHTML = descr;
                row.appendChild(cell2);
                var cell3 = document.createElement('td');
                cell3.innerHTML = '<input type="submit" value="File" onclick="reader('+lien+','+type+')"></input>';
                row.appendChild(cell3);

                document.getElementById("content").appendChild(row);
            }
            else{
                console.log("Error"+req.status);
            }
        }
        req.send();
    }
}
function reader(link,type){
    console.log("type"+type);
    console.log("link"+link);
    if(type==="audio/mpeg"){
        var audio = document.createElement('audio');
        audio.setAttribute("src",link);
        document.getElementById('reader').appendChild(audio);
        console.log("audio");
    }
    else{
        var video = document.createElement('video');
        video.setAttribute("src",link);
        document.getElementById('reader').appendChild(video);
        console.log("video");
    }
}
function doc(){
    if(document.getElementById("doc").checked){
        document.getElementById("doctext").innerHTML="<pre>\nURL:\
        \nhttp://iutdoua-web.univ-lyon1.fr/~p1511158/Prog%20Riche%20Web%20Client/TP-RSS-master/\
        \nAdd a valid link in the text field, then click on 'Ajouter'\
        \nThe list of the podcast will appear in the table below, and if you want to read it,\
        \nyou have to click on the 'File' button situated to the right of the table.\
        \nWe had difficulties implemting the parameters for the reader function\
        \nThank you!</pre>";
    }
    else{
        document.getElementById("doctext").innerHTML="";
    }
}