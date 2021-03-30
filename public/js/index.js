
$(window).scroll(function(){
    var scTop = $(this).scrollTop()
    console.log(scTop)
    if(scTop > 200){
        // $('.header-wrapper').css('transform','translateY(-100%)')/* 위로 올라가 무시될수 있음*/
        // $('.header-wrapper').css('transform')/* -100값을 인식시킴 */
        // $('.header-wrapper').addClass('active')
        // $('.header-wrapper').css('transform','translateY(0)')/* 0으로 바꿔줌 */
        if(!$('.header-wrapper').hasClass('active')){
        $('.header-wrapper').css('top', '-60px')/* 위로 이동 */
        $('.header-wrapper').stop().animate({'top':0},300)/* 원위치로 3초동안 이동 */
        $('.header-wrapper').addClass('active')
        }
    }
    else{
        // $('.header-wrapper').css('transform','translateY(0)')
        $('.header-wrapper').removeClass('active')
    }
})
/*scroll top 문서가 얼만큼 올라갔는지 찾아줌 */

$('.mo-bars').click(function() {
	$('.monavi-wrapper').toggleClass('active')
})/* monavi active 토글 클래스 만들음 */

// $(window).scroll(function () {
// 	var scTop = $(this).scrollTop()
// 	if (scTop > 200) {
// 		$('.header-wrapper').css('transform', 'translateY(-100%)')
// 		$('.header-wrapper').css('transform')
// 		$('.header-wrapper').addClass('active')
// 		$('.header-wrapper').css('transform', 'translateY(0)')
// 	} else {
// 		$('.header-wrapper').css('transform', 'translateY(0)')
// 		$('.header-wrapper').removeClass('active')
// 	}
// })

$('.modal-wrapper').click(function() {
	$(this).css('display', 'none')
})

$('.pf-wrap > .pf > img').click(function() {
	var src = $(this).attr('src')
	var desc = $(this).attr('alt')
	$('.modal-wrapper').css('display', 'block')
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(0)')
	$('.modal-wrapper .modal-wrap').css('transform')
	$('.modal-wrapper .modal-img').attr('src', src)
	$('.modal-wrapper .modal-title').text(desc)
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(1)')
})