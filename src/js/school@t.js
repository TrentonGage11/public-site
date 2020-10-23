function cr() {
	console.log("cr");
	let text = "";
	for (i = 0; i < 100; i++) {
		console.log("i - " + String(i));
		for (a = 0; a < 100; a++) {
			console.log("a  - " + String(a));
			for (c = 0; c < 100; c++) {
				console.log("c - " + String(c));
				text += fcc(rhv());
			}
		}
	}
	console.log(text);
}
setInterval(setTime, 1000);
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime() {
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}

function pi(hin) {
	return parseInt("0x" + hin);
}

function fcc(cc) {
	return String.fromCharCode(pi(cc));
}

function rhv() {
	return Math.floor(Math.random()*281474976710655).toString(16);
}

function kbe(key) {
	var keyboardEvent = document.createEvent("KeyboardEvent");
	var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
	keyboardEvent[initMethod](
		"keydown", 				// event type: keydown, keyup, keypress
		true,      				// bubbles
		true,      				// cancelable
		window,    				// view: should be window
		false,     				// ctrlKey
		false,     				// altKey
		false,     				// shiftKey
		false,     				// metaKey
		key.charCodeAt(0),		// keyCode: unsigned long - the virtual key code, else 0
		0          				// charCode: unsigned long - the Unicode character associated with the depressed key, else 0
	);
	document.dispatchEvent(keyboardEvent);
}

function simulateKeyPress(character) {
	event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

//winner
function triggerClick() {
	var event = new MouseEvent('click', {
		'view': window,
		'bubbles': true,
		'cancelable': true
	});
	var cb = document.querySelector('input[type=submit][name=btnK]'); 
	var canceled = !cb.dispatchEvent(event);
	if (canceled) {
	// preventDefault was called and the event cancelled
		console.log(canceled + " preventDefault was called and the event cancelled.")
	} else {
	// insert your event-logic here...
		console.log("Some event logic.");
	}
}

function simulateKeyPress2(character) {
	var evt = document.createEvent("KeyboardEvent");
	evt.initKeyboardEvent("keypress", true, true, window,
		0, 0, 0, 0,
		0, character.charCodeAt(0))
	var body = document.body;
	var canceled = !body.dispatchEvent(evt);
	if(canceled) {
    // A handler called preventDefault
		alert("canceled");
	} else {
	// None of the handlers called preventDefault
		alert("not canceled");
	}
}

function simulateKeydown (keycode,isCtrl,isAlt,isShift){
	var e = new KeyboardEvent( "keydown", { bubbles:true, cancelable:true, char:String.fromCharCode(keycode), key:String.fromCharCode(keycode), shiftKey:isShift, ctrlKey:isCtrl, altKey:isAlt } );
	Object.defineProperty(e, 'keyCode', {get : function() { return this.keyCodeVal; } });     
	e.keyCodeVal = keycode;
	document.dispatchEvent(e);
}