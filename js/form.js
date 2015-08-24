$(function() {
	var form = $('#contactForm');
	var formMessage = $('#form-message');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})

		.done(function(response) {
			$(formMessage).removeClass('error');
			$(formMessage).addClass('success');
			$(formMessage).text(response);
			$('#contactName').val('');
			$('#contactEmail').val('');
			$('#contactSubject').val('');
			$('#contactMessage').val('');
		})

		.fail(function(data) {
			$(formMessage).removeClass('success');
			$(formMessage).addClass('error');

			if(data.responseText !== '') {
				$(formMessage).text(data.responseText);
			} else {
				$(formMessage).text('Oops! An error occured and your message could not be sent');
			}
		})
	})
})