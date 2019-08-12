 function wm() {
   var word = document.getElementById("st").value;
   voice(word);
   $.getJSON('https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=2bb7ce61-85ed-49f4-9be2-0a78b5f5eda5', function(data) {
     var c = data[0];
     // alert(typeof(c));
     if(typeof(c) != undefined) {
       var text = data[0].shortdef[0];
       var f = data[0].fl;
       voice(text);
       document.getElementById("k").innerHTML = text;
       document.getElementById("h").innerHTML = f;
     }
     //console.log(JSON.stringify(data[0].shortdef[0], null, 1));
     //console.log(JSON.stringify(data[0].fl, null, 1));
     else {
       document.getElementById("h").innerHTML = "Invalid Word";
     }
     f = "";
     text = "";
   });
 };

 function voice(text) {
   responsiveVoice.speak(text, "UK English Female", {
     rate: 0.92,
     pitch: 0.93
   });
 }
 console.log = function() {}
 console.log = function() {
   return null;
 };

 function shsp() {
   document.getElementById("wos").style.display = "block";
   document.getElementById("word").style.display = "none";
   document.getElementById("team").style.display = "none";
 }

 function ws() {
   document.getElementById("wos").style.display = "none";
   document.getElementById("word").style.display = "block";
   document.getElementById("team").style.display = "none";
 }

 function team() {
   document.getElementById("wos").style.display = "none";
   document.getElementById("word").style.display = "none";
   document.getElementById("team").style.display = "block";
 }

 function wo() {
   var word = document.getElementById("stu").value;
   //console.log(word);
   //alert(word);
   voice(word);
   $.getJSON('https://dictionaryapi.com/api/v3/references/spanish/json/' + word + '?key=316b8347-2b67-4672-9d33-c72e48e6a23f', function(data) {
     var c = data;
     console.log(typeof(c));
     if(c != undefined) {
       var text = data[0].shortdef[0];
       voice(text);
       document.getElementById("m").innerHTML = text;
     }
     //console.log(JSON.stringify(data[0].shortdef[0], null, 1));
     //console.log(JSON.stringify(data[0].fl, null, 1));
     else {
       document.getElementById("m").innerHTML = "Invalid Word";
     }
     text = "";
   });
 };