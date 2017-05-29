$(document).ready(function(){

var $charCount = $('#char-count')
var characterCount = 140;
var $tweetCompose = $('.tweet-compose')
var $tweetActions = $('.tweet-actions')
var $tweetText = $('.tweet-text')


//Hide
$('#tweet-controls').hide();

$tweetCompose.on('click', function() {
  $tweetCompose.css('height', '5em'); //expand
  $('#tweet-controls').show(); //reveal button and count
});

$tweetCompose.keyup(function() {
   var length = $(this).val().length

   //140
   characterCount = 140 - length
   $charCount.text(characterCount)

})
