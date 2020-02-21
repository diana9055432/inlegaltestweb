

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("nav").style.padding = "0px";
    document.getElementsByClassName("navbg").style.padding = "0px";
    document.getElementsByTagName(h1).style.fontSize = "40px";
  } else {
    document.getElementsByClassName("nav").style.padding = "90px 10px";
    document.getElementsByClassName("navbg").style.padding = "90px 10px";
    document.getElementsByTagName(h1).style.fontSize = "100px";
  }
}
//end