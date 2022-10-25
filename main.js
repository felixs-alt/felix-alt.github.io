window.onload = async function(){
    google.accounts.id.initialize({
      client_id: '459313808683-iih3v35lut4d3qlortmikj8mt2go8bnv.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
    let f = getCookie("mac");
    if (f != "") {
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
function onSignIn() {
  console.log(id)
  document.cookie = "mac="+id;
  window.location.reload();
}
function trol() {
    window.location = "https://felixs-alt.github.io/trolled.html"
}
