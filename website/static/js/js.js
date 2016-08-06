//REPLACE FOR JQUERY READY
//listen for changes to document.readyState - onreadystatechange is fired when readyState value is changed
//Alternative to 'DOMContentLoaded' - when readyState=='interactive' the event DOMContentLoaded was fired
document.onreadystatechange = function () {
	// check the value - if it's 'interactive' then the DOM has loaded
	if(document.readyState === 'interactive') {

		document.getElementById('next').addEventListener('click', function(e){
			e.preventDefault();
			//getElementById devuelve un objeto y getElementsByClassName devuelve un array
			if(hasClass(document.getElementsByClassName('pageone')[0], 'active')) {
				Velocity(document.getElementsByClassName('pageone'), 'transition.slideRightOut', {stagger: 50});
				Velocity(document.getElementsByClassName('pagetwo'), 'transition.slideRightIn', {stagger: 50});
				Velocity(document.getElementsByClassName('prev-button'), 'transition.slideRightIn', {stagger: 50});
				toggleClass(document.getElementsByClassName('pageone')[0], 'active');
				toggleClass(document.getElementsByClassName('pagetwo')[0], 'active');
			} else {
				if(hasClass(document.getElementsByClassName('pagetwo')[0], 'active')) {
					Velocity(document.getElementsByClassName('pagetwo'), 'transition.slideRightOut', {stagger: 50});
					Velocity(document.getElementsByClassName('pagethree'), 'transition.slideRightIn', {stagger: 50});
					toggleClass(document.getElementsByClassName('pagetwo')[0], 'active');
					toggleClass(document.getElementsByClassName('pagethree')[0], 'active');
				} else {
					if(hasClass(document.getElementsByClassName('pagethree')[0], 'active')) {
						Velocity(document.getElementsByClassName('pagethree'), 'transition.slideRightOut', {stagger: 50});
						Velocity(document.getElementsByClassName('pagefour'), 'transition.slideRightIn', {stagger: 50});
						Velocity(document.getElementsByClassName('next-button'), 'transition.slideRightOut', {stagger: 50});
						toggleClass(document.getElementsByClassName('pagethree')[0], 'active');
						toggleClass(document.getElementsByClassName('pagefour')[0], 'active');
					}
				}
			}
			
		});

		document.getElementById('prev').addEventListener('click', function(e){
			e.preventDefault();
			//getElementById devuelve un objeto y getElementsByClassName devuelve un array
			if(hasClass(document.getElementsByClassName('pagefour')[0], 'active')) {
				Velocity(document.getElementsByClassName('pagefour'), 'transition.slideRightOut', {stagger: 50});
				Velocity(document.getElementsByClassName('pagethree'), 'transition.slideRightIn', {stagger: 50});
				Velocity(document.getElementsByClassName('next-button'), 'transition.slideRightIn', {stagger: 50});
				toggleClass(document.getElementsByClassName('pagefour')[0], 'active');
				toggleClass(document.getElementsByClassName('pagethree')[0], 'active');
			} else {
				if(hasClass(document.getElementsByClassName('pagethree')[0], 'active')) {
					Velocity(document.getElementsByClassName('pagethree'), 'transition.slideRightOut', {stagger: 50});
					Velocity(document.getElementsByClassName('pagetwo'), 'transition.slideRightIn', {stagger: 50});
					toggleClass(document.getElementsByClassName('pagethree')[0], 'active');
					toggleClass(document.getElementsByClassName('pagetwo')[0], 'active');
				} else {
					if(hasClass(document.getElementsByClassName('pagetwo')[0], 'active')) {
						Velocity(document.getElementsByClassName('pagetwo'), 'transition.slideRightOut', {stagger: 50});
						Velocity(document.getElementsByClassName('pageone'), 'transition.slideRightIn', {stagger: 50});
						Velocity(document.getElementsByClassName('prev-button'), 'transition.slideRightOut', {stagger: 50});
						toggleClass(document.getElementsByClassName('pagetwo')[0], 'active');
						toggleClass(document.getElementsByClassName('pageone')[0], 'active');
					}
				}
			}
			
		});



		function hasClass(elem, className) {
			return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		}

		function toggleClass(elem, className) {
			var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
			if (hasClass(elem, className)) {
				while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
					newClass = newClass.replace( ' ' + className + ' ' , ' ' );
				}
				elem.className = newClass.replace(/^\s+|\s+$/g, '');
			} else {
				elem.className += ' ' + className;
			}
		}

	}
}