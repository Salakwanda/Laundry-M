function expand() {
  var OptionsDiv = document.getElementById("OptionsDiv");

  OptionsDiv.classList.toggle("OptionsDivAddedClass");
}

function dropDown() {
  var ListClass = document.getElementById("ListClass");
  var accountInfoDiv = document.getElementById("accountInfoDiv");
  var list1 = document.getElementById("list1");
  var list2 = document.getElementById("list2");
  var list3 = document.getElementById("list3");
  var list4 = document.getElementById("list4");

  ListClass.classList.toggle("ShowAndHide");
  accountInfoDiv.classList.toggle("AccontInfoAnimation1");
  list1.classList.toggle("List1Animate");
  list2.classList.toggle("List2Animate");
  list3.classList.toggle("List3Animate");
  list4.classList.toggle("List4Animate");

  return false;
}
function updateTime() {
  fetch("/home")
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("current-time").innerText = data.time;
    });
}
setInterval(updateTime, 1000);
updateTime();
