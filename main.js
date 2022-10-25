window.onload = async function(googleUser){
    var profile = googleUser.getBasicProfile();
    let f = getCookie("mac");
    if (f != ""()) {
        if (f.includes("felix.wuorenheimo@edu.lomma.se")) {
               $.getJSON('https://ipapi.co/json/', function(data) {$.when(alert(JSON.stringify(data, null, 2))).then(trol())})
} else { window.loction = "/"
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
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
    document.cookie = "mac="+profile.getEmail();
    window.location.reload();
}
function trol() {
    window.location = "https://felixs-alt.github.io/trolled.html"
}
