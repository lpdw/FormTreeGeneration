function animateIt(elementId) {

				var elem = document.getElementById(elementId);

				var length = elem.getTotalLength();
				elem.style.stroke = "#ffffff ";
				elem.style.strokeDasharray = length;
				elem.style.strokeDashoffset = length;
				var half = length/2;
				var step = 0;
				var start = length + half;
				var end = length-10;
				var animation = function timer() {

					if (step < end) {


				 step += 10;
				 elem.style.strokeDashoffset = start + step;
				 window.requestAnimationFrame(animation);
				}


					else {
						cancelAnimationFrame(animation);

					}
				}
				window.requestAnimationFrame(animation);


			}


			animateIt('i1');
			setTimeout(function(){animateIt('i2')},300);
			setTimeout(function(){animateIt('i3')},400);
			setTimeout(function(){animateIt('i4')},1600);
			setTimeout(function(){animateIt('i5')},2500);
			setTimeout(function(){animateIt('i6')},3000);
