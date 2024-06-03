$(document).ready(function(){
  $('.child-div').hover(function(){
      var gameInfo = $(this).find('.game-info').html();
      var offset = $(this).offset();
      $('#game-info-text').html(gameInfo);
      $('#game-info-popup').css({
          top: offset.top + $(this).height() + 10 + 'px',
          left: offset.left + 'px'
      }).removeClass('hidden');
  }, function(){
      $('#game-info-popup').addClass('hidden');
  });
});