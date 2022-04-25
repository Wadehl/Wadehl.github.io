//prevent loading error
	document.getElementById('warning').remove();

	//short getElementById
	elem = function (id){ return document.getElementById(id); }
	
  //get next year
  var nextYear = new Date().getFullYear() + 1;

	//count until date
	var newYearDate = new Date("Jan 1, "+ nextYear + " 00:00:00").getTime();
	
	//title angles
	var todayDate = new Date().getTime();	
	/**///todayDate = new Date("Apr 3, 2021 00:00:00").getTime();
	var todaySecondsLeft = (newYearDate - todayDate) / 1000;
	var todayDays = parseInt(todaySecondsLeft / 86400);
	
	var plaDeg = parseInt(todayDays-365);
	var degMax = Math.abs(plaDeg) + 15;
	var degMin = Math.abs(plaDeg) - 15; 
	
	//planets positions
	var randMer = Math.floor(Math.random() * (degMax - degMin + 1)) + degMin;
	var randVen = Math.floor(Math.random() * (degMax - degMin + 1)) + degMin;
	var randMar = Math.floor(Math.random() * (degMax - degMin + 1)) + degMin;
	var style = document.createElement('style'); style.innerHTML = '.orbit-mercury {transform: translate(-50%, -50%) rotate('+randMer+'deg)} .orbit-venus {transform: translate(-50%, -50%) rotate('+randVen+'deg)} .orbit-mars {transform: translate(-50%, -50%) rotate('+randMar+'deg)} .planet-mercury {transform:rotate(-'+randMer+'deg)} .planet-venus {transform:rotate(-'+randVen+'deg)} .planet-mars {transform:rotate(-'+randMar+'deg)} .planet-earth {transform:rotate('+parseInt(todayDays-365)+'deg)} .planet-venus {transform:rotate(-'+randVen+'deg)} '; document.head.appendChild(style);

	/*screen position*/
	function qSel(sel){	return document.querySelector(sel); }
	var screenPos = qSel('.solar-system').classList;
	if(todayDays<367){ screenPos.add('left-pos');     }
	if(todayDays<335){ screenPos.add('top-pos'); 	  }
	if(todayDays<280){ screenPos.remove('left-pos');  } 
	if(todayDays<230){ screenPos.add('right-pos');    }
	if(todayDays<185){ screenPos.remove('top-pos');   }
	if(todayDays<158){ screenPos.add('bot-pos');      }
	if(todayDays<120){ screenPos.remove('right-pos'); }
	if(todayDays<60) { screenPos.add('left-pos'); 	  }
	if(todayDays<30) { screenPos.remove('bot-pos');   }

	
	/*arrows*/
	function goUp(){ 
		arrowOn('up');
		if(screenPos.contains('bot-pos')){screenPos.remove('bot-pos');} else {screenPos.add('top-pos');}
	}
	function goDown(){
		arrowOn('down');
		if(screenPos.contains('top-pos')){screenPos.remove('top-pos');} else {screenPos.add('bot-pos');}
	}
	function goRight(){
		arrowOn('right');
		if(screenPos.contains('left-pos')){screenPos.remove('left-pos');} else {screenPos.add('right-pos');}
	}
	function goLeft(){	
		arrowOn('left');
		if(screenPos.contains('right-pos')){screenPos.remove('right-pos');} else {screenPos.add('left-pos');}
	}
	function arrowOn(id){
		elem(id).classList.add('active');
		setTimeout(function(){ elem(id).classList.remove('active'); }, 1000);
	}
	
	//detecting arrow key presses
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
			case 37: goLeft();  break;
			case 38: goUp();   break;
			case 39: goRight();	break;
			case 40: goDown();	break;
		}
	});
	
	
	//countdown vars
	var days, hours, minutes, seconds;
	
	//countdown interval
	var countDown = setInterval(function() {

		var rightNow = new Date().getTime();
		/**///rightNow = new Date("Apr 3, 2021 00:00:00").getTime();
		var timeTo = newYearDate - rightNow;
		
		days = Math.floor(timeTo / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeTo % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeTo % (1000 * 60)) / 1000);
		
		if(hours<10)hours="0"+hours; 
        if(minutes<10)minutes="0"+minutes; 
        if(seconds<10)seconds="0"+seconds; 
		
		/*new year*/
		var newYearDays;
		if (days<0){ elem("cronoNewYear").style.display='none';	newYearDays = days.toString().substr(1); } else { newYearDays="-"+days; }
		elem("cronoNewYear").innerHTML = days + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";		
		
		/*leap year*/
		var leapYear = new Date().getFullYear();
		if(((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0)) {
			rotationDeg = newYearDays * 0.9836065573770491;
		} else {
			rotationDeg = newYearDays * 0.9863013698630136;
		}
		
		/*earth position*/
		elem("position-earth").style.transform = 'translate(-50%, -50%) rotate('+rotationDeg+'deg';
		
		/*winter solstice*/
		var winSolsDays;
		var wsDays=days-11;			
		if (wsDays<0){ elem("cronoWinterSolstice").style.display='none'; } else { winSolsDays=wsDays	}
		elem("cronoWinterSolstice").innerHTML = winSolsDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		
		/*spring equinox*/
		var sprEquiDays;
		var seDays=days-287;			
		if (seDays<0){ elem("cronoSpringEquinox").style.display='none';	} else { sprEquiDays=seDays	}
		elem("cronoSpringEquinox").innerHTML = sprEquiDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		
		/*summer solstice*/
		var sumSolsDays;
		var ssDays=days-194;			
		if (ssDays<0){ elem("cronoSummerSolstice").style.display='none'; } else { sumSolsDays=ssDays	}
		elem("cronoSummerSolstice").innerHTML = sumSolsDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		
		/*autumn equinox*/
		var autEquiDays;
		var aeDays=days-101;			
		if (aeDays<0){ elem("cronoAutumnEquinox").style.display='none';	} else { autEquiDays=aeDays	}
		elem("cronoAutumnEquinox").innerHTML = autEquiDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		
		/*initial opacity*/
		var opacityList = document.querySelectorAll('.planet');
		for(i=0;i<opacityList.length;i++){
			opacityList[i].style.opacity = '1';
		}
	
		if (timeTo < 0) {
			clearInterval(countDown);
		}
		
	}, 1000);