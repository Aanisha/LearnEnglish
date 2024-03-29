var givemeaningbtn, lang, partofspeech, definition;
$(document).ready(function() {
  givemeaningbtn = $('#givemeaning');
  lang = $('#lang')[0];
  partofspeech = $('#partofspeech')[0];
  definition = $('#def')[0];
  givemeaningbtn.click(() => {
    $('#loading').css('display', 'block');
    $('#search').css('display', 'none');
    let ttl = lang.textContent;
    givemeaning(ttl);
  })
})

function voice(text) {
  responsiveVoice.speak(text, "UK English Female", {
    rate: 0.92,
    pitch: 0.93
  });
}
// console.log = function() {}
// console.log = function() {
//   return null;
// };
function shsp() {
  $('#word').css('display', 'block');
  $('#team').css('display', 'none');
  lang.textContent = 'Spanish';
  partofspeech.innerHTML = "";
  definition.innerHTML = '';
}

function ws() {
  $('#word').css('display', 'block');
  $('#team').css('display', 'none');
  lang.textContent = 'English';
  partofspeech.innerHTML = "";
  definition.innerHTML = '';
}

function team() {
  $('#word').css('display', 'none');
  $('#team').css('display', 'block');
}
// $.getJSON('https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=2bb7ce61-85ed-49f4-9be2-0a78b5f5eda5', function(data) {
//$.getJSON('https://dictionaryapi.com/api/v3/references/spanish/json/' + word + '?key=316b8347-2b67-4672-9d33-c72e48e6a23f', function(data) {
function givemeaning(lang) {
  let word = $('#st').val();
  voice(word);
  let apiurl = 'notfound'
  if(lang == 'English') {
    apiurl = 'https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=2bb7ce61-85ed-49f4-9be2-0a78b5f5eda5';
  } else if(lang == 'Spanish') {
    apiurl = 'https://dictionaryapi.com/api/v3/references/spanish/json/' + word + '?key=316b8347-2b67-4672-9d33-c72e48e6a23f';
  }
  $.getJSON(apiurl, function(data) {
    var c = data[0];
    // alert(typeof(c));
    try {
      console.log(c, typeof(c))
      var text = data[0].shortdef[0];
      var f = data[0].fl;
      voice(text);
      definition.innerHTML = text;
      partofspeech.innerHTML = f;
    } catch (e) {
      partofspeech.innerHTML = "Invalid Word";
      definition.innerHTML = '';
    } finally {
      f = "";
      text = "";
      $('#loading').css('display', 'none');
      $('#search').css('display', 'block');
    }
    //console.log(JSON.stringify(data[0].shortdef[0], null, 1));
    //console.log(JSON.stringify(data[0].fl, null, 1));
  });
};