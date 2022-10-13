window.onload = function(){
    if (let x = document.cookie.mac; = "04:56:E5:3E:D2:80") {
     alert("Get Trolled");
        window.location = "./trolled.html";

  }
}
function SaveMac()  {
    let macadd = document.getElementById("pd");
    document.cookie = "mac="+macadd.value+";
    location.reload
}
