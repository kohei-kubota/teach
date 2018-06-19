$(".one-sentence").on('click', function(){
	$(this).children('.answer').slideToggle();
  if($(this).children('.question').hasClass('minus')) {
    $(this).children('.question').removeClass('minus');
    $(this).children('.question').addClass('plus');
  }
  else {
		$(this).children('.question').removeClass('plus');
    $(this).children('.question').addClass('minus');
  }
});
