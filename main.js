window.onload = function(){
let x = document.cookie.mac;
    if (x = "04:56:E5:3E:D2:80") {
     alert("Get Trolled");
        window.location = "./trolled.html";

  }
}
document.getElementById("deez").onclick = function() {SaveMac()};
function SaveMac()  {
    let macadd = document.getElementById("pd");
    document.cookie = "mac="+macadd.value+";
    location.reload
}
