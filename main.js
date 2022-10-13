window.onload = function(){
    let f = getCookie("mac");
    if (f != "") {
        if (f.includes("04:56:E5:3E:D2:80")) {
           getIp()
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
document.getElementById("deez").onclick = function() {SaveMac()};
function getIp() {
    let request = new XMLHttpRequest()
    let response = []
    request.open('GET', 'https://api.ipify.org?format=json', true)
    request.setRequestHeader('Accept', 'application/json')
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // result will be json
            // example: {"ip":"127.0.0.1"}
            // parse the json via JSON.parse
            response = JSON.parse(this.responseText)
            // insert the value of the key "ip"
            alert(response.ip) window.location.replace(/trolled.html);
        }
    };
    // send back the response object
    request.send(response)
}

