$("#find").click(function(){
  if($('#txtEnglish').val().length !== 0){
  console.log($('#txtEnglish').val());
 $('.content').each(function(){
 var search_value = $("#txtEnglish").val();
 var res = search_value.split(" ");
 for(i =0; i< res.length; i++){
  if($( "article.main-container" ).text().indexOf(res[i]) < 0){
  var search_regexp = new RegExp(res[i], "g");
  console.log(search_regexp);
  console.log("seach value"+ search_value);
  $(this).html($(this).html().replace(search_regexp,"<span class = 'highlight'>"+res[i]+"</span>"));
  }
 }
 });
}
});