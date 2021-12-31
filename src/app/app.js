'use strict';

/*
    a - 65
    s - 83
    d - 68
    f - 70
*/

if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

const timeoutInterval = 20;

const staff_key_on = 65;
const staff_key_off = 83;

const cape_key_on = 68;
const cape_key_off = 70;

let staffOnIntervals = [];
let capeOnInvervals = [];

function doKeyPress(e){
    console.log(e);

	if (e.keyCode == staff_key_on){ 
		console.log("Staff on triggered!");

        const staffOnInterval = setInterval(()=> {
            window.dispatchEvent(new KeyboardEvent('keydown', {
                'isTrusted': true,
                'altKey': false,
                'bubbles': true,
                'cancelBubble': false,
                'cancellable': true,
                'charCode': 0,
                'code': 'Digit1',
                'composed': true,
                'ctrlKey': false,
                'currentTarget': null,
                'defaultPrevented': false,
                'detail': 0,
                'eventPhase': false,
                'isComposing': false,
                'key': '1',
                'keyCode': 49,
                'location': 0,
                'metaKey': false
            }));

            window.dispatchEvent(new KeyboardEvent('keyup', {
                'isTrusted': true,
                'altKey': false,
                'bubbles': true,
                'cancelBubble': false,
                'cancellable': true,
                'charCode': 0,
                'code': 'Digit1',
                'composed': true,
                'ctrlKey': false,
                'currentTarget': null,
                'defaultPrevented': false,
                'detail': 0,
                'eventPhase': false,
                'isComposing': false,
                'key': '1',
                'keyCode': 49,
                'location': 0,
                'metaKey': false
            }));

            console.log('Key 1 pressed');
        }, timeoutInterval);

        staffOnIntervals.push(staffOnInterval);

    }
    else if (e.keyCode == staff_key_off){
        console.log("Staff off triggered!");

        for(let ci in staffOnIntervals){
            const inteval = staffOnIntervals[ci];

            clearInterval(inteval);
        }

    }
    else if (e.keyCode == cape_key_on){
        console.log("Cape on triggered!");

        const capeOnInverval = setInterval(()=> {
            window.dispatchEvent(new KeyboardEvent('keydown', {
                'isTrusted': true,
                'altKey': false,
                'bubbles': true,
                'cancelBubble': false,
                'cancellable': true,
                'charCode': 0,
                'code': 'Digit2',
                'composed': true,
                'ctrlKey': false,
                'currentTarget': null,
                'defaultPrevented': false,
                'detail': 0,
                'eventPhase': false,
                'isComposing': false,
                'key': '2',
                'keyCode': 50,
                'location': 0,
                'metaKey': false
            }));

            window.dispatchEvent(new KeyboardEvent('keyup', {
                'isTrusted': true,
                'altKey': false,
                'bubbles': true,
                'cancelBubble': false,
                'cancellable': true,
                'charCode': 0,
                'code': 'Digit2',
                'composed': true,
                'ctrlKey': false,
                'currentTarget': null,
                'defaultPrevented': false,
                'detail': 0,
                'eventPhase': false,
                'isComposing': false,
                'key': '2',
                'keyCode': 50,
                'location': 0,
                'metaKey': false
            }));

            console.log('Key 2 pressed');
        }, timeoutInterval);

        capeOnInvervals.push(capeOnInverval);
    }
    else if (e.keyCode == cape_key_off){
        console.log("Cape off triggered!");

        for(let ci in capeOnInvervals){
            const inteval = capeOnInvervals[ci];

            clearInterval(inteval);
        }
    }
    
}
	

