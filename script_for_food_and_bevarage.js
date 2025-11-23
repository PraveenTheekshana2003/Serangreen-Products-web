function Zoom1(img, zoom1) {
  var img, loupe, width, height, back;
  img = document.getElementById("six");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom1) + "px " + (img.height * zoom1) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position1(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom1)) {x = img.width - (width / zoom1);}
    if (x < width / zoom1) {x = width / zoom1;}
    if (y > img.height - (height / zoom1)) {y = img.height - (height / zoom1);}
    if (y < height / zoom1) {y = height / zoom1;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom1) - width + back) + "px -" + ((y * zoom1) - height + back) + "px";
  }
  function position1(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom1("six", 3);




function Zoom2(img, zoom2) {
  var img, loupe, width, height, back;
  img = document.getElementById("five");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom2) + "px " + (img.height * zoom2) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom2)) {x = img.width - (width / zoom2);}
    if (x < width / zoom2) {x = width / zoom2;}
    if (y > img.height - (height / zoom2)) {y = img.height - (height / zoom2);}
    if (y < height / zoom2) {y = height / zoom2;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom2) - width + back) + "px -" + ((y * zoom2) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom2("five", 3);




function Zoom3(img, zoom3) {
  var img, loupe, width, height, back;
  img = document.getElementById("four");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom3) + "px " + (img.height * zoom3) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom3)) {x = img.width - (width / zoom3);}
    if (x < width / zoom3) {x = width / zoom3;}
    if (y > img.height - (height / zoom3)) {y = img.height - (height / zoom3);}
    if (y < height / zoom3) {y = height / zoom3;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom3) - width + back) + "px -" + ((y * zoom3) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom3("four", 3);




function Zoom4(img, zoom4) {
  var img, loupe, width, height, back;
  img = document.getElementById("three");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom4) + "px " + (img.height * zoom4) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom4)) {x = img.width - (width / zoom4);}
    if (x < width / zoom4) {x = width / zoom4;}
    if (y > img.height - (height / zoom4)) {y = img.height - (height / zoom4);}
    if (y < height / zoom4) {y = height / zoom4;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom4) - width + back) + "px -" + ((y * zoom4) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom4("three", 3);




function Zoom5(img, zoom5) {
  var img, loupe, width, height, back;
  img = document.getElementById("two");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom5) + "px " + (img.height * zoom5) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom5)) {x = img.width - (width / zoom5);}
    if (x < width / zoom5) {x = width / zoom5;}
    if (y > img.height - (height / zoom5)) {y = img.height - (height / zoom5);}
    if (y < height / zoom5) {y = height / zoom5;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom5) - width + back) + "px -" + ((y * zoom5) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom5("two", 3);




function Zoom6(img, zoom6) {
  var img, loupe, width, height, back;
  img = document.getElementById("one");

  loupe = document.createElement("div");
  loupe.setAttribute("class", "magnifier-glass");

  img.parentElement.insertBefore(loupe, img);
  loupe.style.backgroundImage = "url('" + img.src + "')";
  loupe.style.backgroundRepeat = "no-repeat";
  loupe.style.backgroundSize = (img.width * zoom6) + "px " + (img.height * zoom6) + "px";
  back = 2;
  width = loupe.offsetWidth / 2;
  height = loupe.offsetHeight / 2;

  loupe.addEventListener("mousemove", moveLoupe);
  img.addEventListener("mousemove", moveLoupe);
  loupe.addEventListener("touchmove", moveLoupe);
  img.addEventListener("touchmove", moveLoupe);
  
  function moveLoupe(e) {
    var pos, x, y;

    e.preventDefault();

    pos = position(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (width / zoom6)) {x = img.width - (width / zoom6);}
    if (x < width / zoom6) {x = width / zoom6;}
    if (y > img.height - (height / zoom6)) {y = img.height - (height / zoom6);}
    if (y < height / zoom6) {y = height / zoom6;}

    loupe.style.left = (x - width) + "px";
    loupe.style.top = (y - height) + "px";
    loupe.style.backgroundPosition = "-" + ((x * zoom6) - width + back) + "px -" + ((y * zoom6) - height + back) + "px";
  }
  function position(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

Zoom6("one", 3);







// When the user clicks on div, open the popup
function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}