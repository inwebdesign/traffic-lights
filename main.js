// selecting elements representing lights

let redLight = document.querySelector('#red');
let yellowLight = document.querySelector('#yellow');
let greenLight = document.querySelector('#green');

// traffic lights changing

	
changingLight();

function changingLight(){
	setTimeout(function(){
	
		yellowLight.style.backgroundColor = 'yellow';
},1000)
	setTimeout(function(){
		redLight.style.backgroundColor = '#fff';
		yellowLight.style.backgroundColor = '#fff';
		greenLight.style.backgroundColor = 'green';
	},2000);
	setTimeout(function(){
		if(greenLight.style.backgroundColor === 'green'){
		yellowLight.style.backgroundColor = 'yellow';
		}
	},4000)
	setTimeout(function(){
		yellowLight.style.backgroundColor = '#fff';
	},5000)
		setTimeout(function(){
		if(greenLight.style.backgroundColor === 'green'){
		yellowLight.style.backgroundColor = 'yellow';
		}
	},6000)
		setTimeout(function(){
		yellowLight.style.backgroundColor = '#fff';
	},7000)
		setTimeout(function(){
		if(greenLight.style.backgroundColor === 'green'){
		yellowLight.style.backgroundColor = 'yellow';
		}
	},8000)
	setTimeout(function(){
		if((yellowLight.style.backgroundColor === 'yellow') && (greenLight.style.backgroundColor === 'green')){
			redLight.style.backgroundColor = 'red';
			yellowLight.style.backgroundColor = '#fff';
			greenLight.style.backgroundColor = '#fff';
		}
	},9000)
}

// changing lights in intervals

setInterval(changingLight,12000);


