
window.stop = () => $('body').raindrop('stop');
$(() => {
	$('.umbrella_open').click(() => {
		$('.umbrella_open').hide(); 
		$('.umbrella_close').show(); 
		createRain();
	});
	$('.umbrella_close').click(() => {
		$('.umbrella_open').show(); 
		$('.umbrella_close').hide();
		stopRain();
	});
});

// number of drops created.
var nbDrop = 100;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-2500,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}
}

function stopRain() {
	$('.drop').remove();
}
