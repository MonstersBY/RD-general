$('.competitive .competitive-slide__back').each(function(x){
    // console.log(x%4)
    switch (x%4) {
        case 0:
            $('.competitive .competitive-slide__back')[x].style.backgroundImage = "url('./img/main/competitive/back-1j.jpg')"
            break
        case 1:
            $('.competitive .competitive-slide__back')[x].style.backgroundImage = "url('./img/main/competitive/back-2j.jpg')"
            break
        case 2:
            $('.competitive .competitive-slide__back')[x].style.backgroundImage = "url('./img/main/competitive/back-3j.jpg')"
            break
        case 3:
            $('.competitive .competitive-slide__back')[x].style.backgroundImage = "url('./img/main/competitive/back-4j.jpg')"
            break
      }
})

if($('.competitive .competitive-slide').length) {
	$('.competitive .competitive-slide__number').each(function(x){
		x<9 ? $(this).html('0'+(x+1)) : $(this).html(x+1)
	})
}

if($('.popular-question-item').length) {
    $('.popular-question-item').on('click', function(){
        $(this).find('.popular-question-item__head').toggleClass('active')
        $(this).find('.popular-question-item__body').slideToggle()
    })
}

$('.input-numbers').on( "keypress", function(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
});