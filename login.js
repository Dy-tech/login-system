var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){
  document.querySelector("#res").innerHTML=this.response.replace("\n","<br>");
  var logins=this.response.split("\n");
  var success=0;
  for(var i=0;i<logins.length;i++){if((window.location.search.split("?user=")[1].split("&pass=")[0]==logins[i].split(":")[0])&&(window.location.search.split("&pass=")[1].split("&")[0]==logins[i].split(":")[1])){console.log("yep");success=1;break;}else{alert("Incorrect.");window.location.replace("/login");};}}
  if(success){alert("Correct!");window.location.replace("example.org");}
}};
xhttp.open("GET","logins.db",1);
xhttp.send();
