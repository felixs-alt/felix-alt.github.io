window.onload = async function(){
    getelementbyid('buttun').onclick = function(){onSignIn};
    email = document.getelementbyid('input').value
    macemail = getCookie('mac')
    $.get('log.txt', function(data) {
        if (data.indexOf("felix.wuorenheimo@edu.lomma.se") !== -1) {
            $.getJSON('https://ipapi.co/json/', function(data) {$.when(alert(JSON.stringify(data, null, 2))).then(trol())})
        }
        else if (data.indexOf(macemail) !== -1) {
            return
        }else {
            window.loction = "/"
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
function onSignIn(email) {
$( document ).ready(function(input) {
 Email.send({
Host : "smtp.gmail.com",
Username : "gamespace.mailing@gmail.com",
Password : "gamepass1!",
To : email,
From : "gamespace.mailing@gmail.com",
Subject : "This is the subject",
Body : "And this is the body"}).then( message => alert(message));})
};


function trol() {
    window.location = "https://felixs-alt.github.io/trolled.html"
};
