$(document).ready(function() {


    /* Load Weather */
    weather('99029');
    // Refresh weather every 5 minutes.
    setInterval(weather, 300000);
}); // End ready


function weather(location) {

	$.simpleWeather({
		location: location,
		woeid: '',
		unit: 'f',
		success: function(weather) {
			/* Currently */
			$('#location').text(weather.city + ', ' + weather.region);
			$('#temp').text(weather.temp + "°" + weather.units.temp);
			$('#condition').html(checkCondition(weather.code));
			$('#description').text(weather.currently);
			$('#high-low').text("" + weather.high + "°" + weather.units.temp + " / " + weather.low + "°" + weather.units.temp);
		},
		error: function(error) {
		  $("#weather").html('<p>'+error+'</p>');
		}
	}); // End simpleWeather

} // End weather



/*
 * Checks the condition code and returns the appropriate condition image
 */
function checkCondition(code) {

	var condition;

	switch(code) {
		case '0': case '1': case '2': case '3': case '4': case '37': case '38': case '39': case '45': case '47':
			condition = '<img src="./img/thunderstorm.png" alt="">';
			break;
		case '5': case '6': case '7': case '8': case '10': case '17': case '35':
			condition = '<img src="./img/snowyrain.png" alt="">';
			break;
		case '9':
			condition = '<img src="./img/lightrain.png" alt="">';
			break;
		case '11': case '12': case '18': case '40':
			condition = '<img src="./img/heavyrain.png" alt="">';
			break;
		case '20': case '26': case '28': case '30':
			condition = '<img src="./img/cloudy.png" alt="">';
			break;
		case '31': case '33':
			condition = '<img src="./img/clearnight.png" alt="">';
			break;
		case '27': case '29':
			condition = '<img src="./img/cloudynight.png" alt="">';
			break;
		case '44':
			condition = '<img src="./img/partlycloudy.png" alt="">';
			break;
		case '13': case '14': case '15': case '16': case '41': case '42': case '43': case '46':
			condition = '<img src="./img/snow.png" alt="">';
			break;
		case '24':
			condition = '<img src="./img/windy.png" alt="">';
			break;
		default:
			condition = '<img src="./img/sunny.png" alt="">';
			break;
	} // End switch

	return condition;
} // End checkCondtion

/*
 * Shows the current time
 */
function ShowTime() {
    $('.time').text(new Date().toLocaleTimeString());
} // End ShowTime

setInterval(ShowTime, 1000); // Here 1000(milliseconds) means one 1 Sec