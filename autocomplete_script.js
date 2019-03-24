var sanskritWords = new Array();
  sanskritWords = ['Karmanye', 'Vadhikaraste', 'Ma', 'phaleshou', 'kada', 'chana',' Karma', 'Phala', 'Hetur', 'Bhurmatey', 'Sangostva', 'Akarmani'];

  var options = '';

  for(var i = 0; i < sanskritWords.length; i++)
    options += '<option value="'+sanskritWords[i]+'" />';

  document.getElementById('words').innerHTML = options;