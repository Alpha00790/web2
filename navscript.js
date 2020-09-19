var menubtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-500px";
menubtn.onclick = function(){
  if(sideNav.style.right =="-500px"){
      sideNav.style.right = "0px";
  }
  else{
    sideNav.style.right = "-500px";
  }
};
