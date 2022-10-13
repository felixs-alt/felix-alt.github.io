window.onload = function(){
    let x = getCookie("mac");
    if (mac != "") {
        if (x = "04:56:E5:3E:D2:80") {
            alert("Get Trolled");
            window.location = "./trolled.html";
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
    document.cookie = "mac="+macadd.value
    location.reload
}
document.getElementById("deez").onclick = function() {SaveMac()};
