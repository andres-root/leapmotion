'user strict';

var controllerOptions = { enableGestures: true };

Leap.loop( controllerOptions, function ( frame ) {
	console.log( frame.hands.length );
});