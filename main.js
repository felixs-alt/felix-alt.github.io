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
async function getIp() {
    fetch('https://api.myip.com/'{ mode: 'no-cors'})
    let url = 'users.json';
    try {
        let res = await fetch(url);
            alert(res.ip) 
            window.location = "https://felixs-alt.github.io/troll.html";
    }
  }
