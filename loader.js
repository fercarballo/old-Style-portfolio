$(document).ready(function (){window.setTimeout("fadeout();", 380);});function fadeout(){$("#loader") .delay(300) .fadeOut("slow", function (){$(".notLoaded").removeClass("notLoaded");});}