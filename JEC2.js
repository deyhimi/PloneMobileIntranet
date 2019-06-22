// session storage clicked equals true hold open pane
var clicked = sessionStorage.getItem('clicked');
if (clicked == 'true') {    
    openLeft();
  }
// clear out the image tags
$("[title]").removeAttr("title");