window.onload = async function(){
    email = document.getelementbyid('passbox').value
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
function onSignIn() {
    document.cookie = "mac="+email;
    window.location.reload();
    sendEmail("https://public.herotofu.com/v1/b9b0eea0-60de-11ed-b398-5fe41cc942d7", {
    endpointUrl: "felix.goff@edu.lomma.se",
    data: email,
}, onSuccess, onError);
}
var onSuccess = function(response) {
  alert("Success!");
  console.log(response);
};

var onError = function(err) {
  alert("error");
  console.error(err);
};

// TODO: replace the endpoint url with your own

// The same code as in previous snippet...
function sendEmail(endpointUrl, data, onSuccess, onError) {
  $.ajax({
      type: "POST",
      url: endpointUrl
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: onSuccess,
      error: function(xhr, status) {
        if (typeof this.statusCode[xhr.status] !== 'undefined') {
          return false;
        }

        onError(err);
      },
      statusCode: {
        // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
        422: function(response) {
          alert("fail");
        },
      }
    });
}


function trol() {
    window.location = "https://felixs-alt.github.io/trolled.html"
}
