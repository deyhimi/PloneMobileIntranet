// response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
// response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
// response.setHeader("Expires", "0"); // Proxies.


//function keepLeftOpen() {
//  var clicked = sessionStorage.getItem('clicked');
//  if (clicked == 'true') 
//    {openLeft();}
//}


function openLeft() {
    document.getElementById("LeftPanelID").style.width = "40%";
//    document.getElementById("mCenterPanelID").style.marginLeft = "5%";
    sessionStorage.setItem('clicked', 'true');
  }
  

function closeLeft() {
    document.getElementById("LeftPanelID").style.width = "0";
//    document.getElementById("CenterPanelID").style.marginLeft = "0";
    sessionStorage.setItem('clicked', 'false');
  }


function openRight() {
    document.getElementById("RightPanelID").style.width = "50%";
//    document.getElementById("CenterPanelID").style.marginRight = "5%";
  }
  

function closeRight() {
    document.getElementById("RightPanelID").style.width = "0";
//    document.getElementById("CenterPanelID").style.marginRight = "0";
  }