// No Copyright (c) 2017 Maaz Khan.



function click(e) {
  chrome.tabs.executeScript(null,
      {code:"var x = document.querySelectorAll('" + (e.target).getAttribute('name') + "');for(var i = 0; i < x.length; i++) {x[i].style.borderStyle='solid';x[i].style.borderWidth='1px';x[i].style.borderColor = '" + e.target.id + "';}"});
  //window.close();
}
function validate(evt) {
	chrome.tabs.executeScript(null,
      {code:"var y = document.querySelectorAll('"+evt.value+"');for(var j = 0; j < y.length; j++) {y[j].style.borderStyle='solid';y[j].style.borderWidth='1px';y[j].style.borderColor = '" + evt.getAttribute('name') + "';}"});
  
   
}

document.addEventListener('DOMContentLoaded', function () {
	var colors = ['#d50000', '#1b5e20', '#0d47a1', '#e65100', '#ffff00', '551A8B', '#311b92', '#004d40', '#880e4f', '#18ffff', '#263238', '#e64a19', '#f50057'];
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
  
  var textbx = document.getElementById("custom");
  var ran = Math.floor((Math.random() * 13));
		textbx.setAttribute("name",colors[ran]);
		textbx.style.borderColor = colors[ran];
		textbx.style.color = "white";
textbx.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(textbx);
		ran = Math.floor((Math.random() * 13));
		textbx.setAttribute("name",colors[ran]);
		textbx.style.borderColor = colors[ran];
		textbx.style.color = "white";
		textbx.value = "";
    }
});
  });
	

