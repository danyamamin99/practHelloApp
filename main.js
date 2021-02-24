window.onload = function() {
	function form() {
		const form = document.getElementById('form');
		const error = document.getElementById('error')
		const name = document.getElementById('name');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		form.addEventListener('submit',(e) =>{
			let counter = 0;
			let messages = [];
			if (name.value === '' || name.value == null){
				counter++;
				messages.push(`Name is required`);
			}
			if (email.value === '') {
				counter++;
				messages.push(`Email is required`);
			}
			if (phone.value === '') {
				counter++;
				messages.push(`Phone is required`);
			}
			if (messages.length > 0) {
				e.preventDefault();
				error.innerHTML = messages.join(`!<br>`);
				// if(counter == 1)
					error.style.paddingTop = '22px';
				// if(counter == 2)
					error.style.paddingTop = '15px';
			}
			else {
				alert('Регистрация прошла успешно!')
			}
		});

	}
	form();}