window.onload = async function(){
    document.getElementById("deez").onclick = function() {SaveMac()};
    let f = getCookie("mac");
    if (f != "") {
        if (f.includes("david.lundgren@edu.lomma.se")) {
               $.getJSON('https://ipapi.co/json/', function(data) {alert(JSON.stringify(data, null, 2)).then(window.location = "https://felixs-alt.github.io/trolled.html")})
} else { return
}
}
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function SaveMac()  {
    let macadd = document.getElementById("pd");
    document.cookie = "mac="+macadd.value;
    window.location.reload();
}
