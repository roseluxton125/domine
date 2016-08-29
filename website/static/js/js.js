//REPLACE FOR JQUERY READY
//listen for changes to document.readyState - onreadystatechange is fired when readyState value is changed
//Alternative to 'DOMContentLoaded' - when readyState=='interactive' the event DOMContentLoaded was fired
document.onreadystatechange = function () {
	// check the value - if it's 'interactive' then the DOM has loaded
	if(document.readyState === 'interactive') {

		/*####### SLIDES PPG ACTIVO #######*/
		var next = document.getElementById('next');
		if(next) {
			next.addEventListener('click', function(e){
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
		}

		var prev = document.getElementById('prev');
		if(prev) {
			prev.addEventListener('click', function(e){
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
		}
		/*#######################################*/

		/*####### SLIDER DE FRASES FOOTER #######*/
		var interval = 4500; // You can change this value to your desired speed. The value is in milliseconds, so if you want to advance a slide every 5 seconds, set this to 5000.
		var switching = setInterval(toggleSlide, interval);
		function toggleSlide() {
			var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
			// Find the LI that's currently displayed
			var visibleID = getVisible(elements);
			Velocity(elements[visibleID], 'transition.slideRightOut', {stagger: 40});
			toggleClass(elements[visibleID], 'active');
			// elements[visibleID].style.display = "none"; // hide the currently visible LI
			var makeVisible = nextslide(visibleID, elements.length); // get the next slide
			Velocity(elements[makeVisible], 'transition.slideRightIn', {stagger: 40});
			toggleClass(elements[makeVisible], 'active');
			// elements[makeVisible].style.display = "block"; // show the previous or next slide
		}
		function getVisible(elements) {
			var visibleID = -1;
			for(var i = 0; i < elements.length; i++) {
				//if(elements[i].style.display == "block") {
				if(hasClass(elements[i], 'active')) {
					visibleID = i;
				}
			}
			return visibleID;
		}
		function nextslide(num, arrayLength) {
			if(num == arrayLength-1) return 0;
			else return num+1;
		}
		/*#######################################*/


		/*########### RESPONSIVE MENU ###########*/
		var burguer = document.getElementsByClassName('burguer')[0];
		burguer.addEventListener('click', function(e){
			e.preventDefault();
			el = document.querySelectorAll('nav')[0];
			toggleClass(el, 'open');
			if(hasClass(el, 'open')) {
				Velocity(
					document.querySelectorAll('nav > ul')[0], 
					'slideDown', 
					{stagger: 40}
				);
			} else {
				Velocity(
					document.querySelectorAll('nav > ul')[0], 
					'slideUp', 
					{stagger: 40,
					complete: function(){document.querySelectorAll('nav > ul')[0].style.removeProperty('display');}
					}
				);
			}
		});
		/*####### CAPACITACIONES SUBMENU ########*/
		var training = document.querySelectorAll('.training-subnav > a')[0];
		training.addEventListener('click', function(e){
			e.preventDefault();
			console.log("pase por aqui");
			el = document.querySelectorAll('.training-subnav > ul')[0];
			toggleClass(el, 'open');
			if(hasClass(el, 'open')) {
				Velocity(
					document.querySelectorAll('.training-subnav > ul')[0], 
					'slideDown', 
					{stagger: 40}
				);
			} else {
				Velocity(
					document.querySelectorAll('.training-subnav > ul')[0], 
					'slideUp', 
					{stagger: 40,
					complete: function(){document.querySelectorAll('.training-subnav > ul')[0].style.removeProperty('display');}
					}
				);
			}
		});

		//VER SI SE PUEDE USAR PARA NO MOSTRAR EL SUBMENU CUANDO LA PANTALLA SE AGRANDA ESTANDO EL SUBMENU ABIERTO
		// window.addEventListener("resize", function(){
		// 	if(window.innerWidth > 830){
		// 		document.querySelectorAll('.training-subnav > ul')[0].style.removeProperty('display');
		// 	}
		// });



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