function animationForm() {
  var header = document.getElementById("header");
  var textbox1 = document.getElementById("textbox1");
  var textbox2 = document.getElementById("textbox2");
  var buttonid = document.getElementById("buttonid");
  var linkdiv = document.getElementById("linkdiv");
  var spanId = document.getElementById("spanId");
  var header2 = document.getElementById("header2");
  var prg = document.getElementById("prg");
  var inputBoxRegister2 = document.getElementById("inputBoxRegister2");
  var inputBoxRegister1 = document.getElementById("inputBoxRegister1");
  var inputBoxRegister3 = document.getElementById("inputBoxRegister3");
  var btnRegister = document.getElementById("btnRegister");
  var logInLink = document.getElementById("logInLink");
  var RegInfo = document.getElementById("RegInfo");
  var SignTitle = document.getElementById("SignTitle");

  header.classList.toggle("animation1");
  textbox1.classList.toggle("animation2");
  textbox2.classList.toggle("animation3");
  buttonid.classList.toggle("animation4");
  linkdiv.classList.toggle("animation5");
  spanId.classList.toggle("animation6");
  header2.classList.toggle("animation7");
  prg.classList.toggle("animation8");
  inputBoxRegister1.classList.toggle("animation12");
  inputBoxRegister2.classList.toggle("animation13");
  inputBoxRegister3.classList.toggle("animation14");
  btnRegister.classList.toggle("animation15");
  logInLink.classList.toggle("animation16");
  RegInfo.classList.toggle("animation17");
  SignTitle.classList.toggle("animation11");

  header.classList.remove("animation1Sign");
  textbox1.classList.remove("animation2Sign");
  textbox2.classList.remove("animation3Sign");
  buttonid.classList.remove("animation4Sign");
  linkdiv.classList.remove("animation5Sign");
  spanId.classList.remove("animation6Sign");
  SignTitle.classList.remove("animation11Sign");
  inputBoxRegister1.classList.remove("animation12Sign");
  inputBoxRegister2.classList.remove("animation13Sign");
  inputBoxRegister3.classList.remove("animation14Sign");
  btnRegister.classList.remove("animation15Sign");
  logInLink.classList.remove("animation16Sign");
  header2.classList.remove("animation7Sign");
  prg.classList.remove("animation8Sign");
  RegInfo.classList.remove("animation17Sign");

  return false;
}

function SignUp() {
  var header = document.getElementById("header");
  var textbox1 = document.getElementById("textbox1");
  var textbox2 = document.getElementById("textbox2");
  var buttonid = document.getElementById("buttonid");
  var linkdiv = document.getElementById("linkdiv");
  var SignTitle = document.getElementById("SignTitle");
  var inputBoxRegister2 = document.getElementById("inputBoxRegister2");
  var inputBoxRegister1 = document.getElementById("inputBoxRegister1");
  var inputBoxRegister3 = document.getElementById("inputBoxRegister3");
  var btnRegister = document.getElementById("btnRegister");
  var logInLink = document.getElementById("logInLink");
  var header2 = document.getElementById("header2");
  var prg = document.getElementById("prg");
  var RegInfo = document.getElementById("RegInfo");

  header.classList.toggle("animation1Sign");
  textbox1.classList.toggle("animation2Sign");
  textbox2.classList.toggle("animation3Sign");
  buttonid.classList.toggle("animation4Sign");
  linkdiv.classList.toggle("animation5Sign");
  spanId.classList.toggle("animation6Sign");
  SignTitle.classList.toggle("animation11Sign");
  inputBoxRegister1.classList.toggle("animation12Sign");
  inputBoxRegister2.classList.toggle("animation13Sign");
  inputBoxRegister3.classList.toggle("animation14Sign");
  btnRegister.classList.toggle("animation15Sign");
  logInLink.classList.toggle("animation16Sign");
  header2.classList.toggle("animation7Sign");
  prg.classList.toggle("animation8Sign");
  RegInfo.classList.toggle("animation17Sign");

  header.classList.remove("animation1");
  textbox1.classList.remove("animation2");
  textbox2.classList.remove("animation3");
  buttonid.classList.remove("animation4");
  linkdiv.classList.remove("animation5");
  spanId.classList.remove("animation6");
  SignTitle.classList.add("animation11");
  inputBoxRegister1.classList.remove("animation12");
  inputBoxRegister2.classList.remove("animation13");
  inputBoxRegister3.classList.remove("animation14");
  btnRegister.classList.remove("animation15");
  logInLink.classList.remove("animation16");
  header2.classList.remove("animation7");
  prg.classList.remove("animation8");
  RegInfo.classList.remove("animation17");

  return false;
}
