window.onload = function(){
    document.cookie.mac = NaN;
    x = document.cookie.mac;
    if (x = "04:56:E5:3E:D2:80") {
        alert("Get Trolled");
        window.location = "./trolled.html";

}
}
function SaveMac()  {
    macadd = document.getElementById("pd");
    document.cookie = "mac="+macadd.value
    location.reload
}
document.getElementById("deez").onclick = function() {SaveMac()};
