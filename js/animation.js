$(document).ready(function(){
	$('li.fields').filter(':nth-child(n+4)').addClass('hide');/*First, the li.fields picks out the li elements with the class .fields, which turns out to be the 2nd, 4th, and 6th child elements of the ul. (To clarify, the 1st, 3rd and 5th child elements have the .title class.) Remember that n takes on the values of 0, 1, 2,...The filtering by :nth-child(n+4) then picks out the 4th, 5th, 6th... child elements, which means that the 4th and 6th li elements are assigned the .hide class, which hides them.*/
	$('ul').on('click', 'li.title', function() {
		$(this)
			.next()
				.slideDown(200)
				.siblings('li.fields')
					.slideUp(200);
	});
});