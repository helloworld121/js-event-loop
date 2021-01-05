// 1)
// a) command "console.log" will be placed on "Call Stack"
// b) command "console.log" will be executed and removed from "Call Stack"
console.log('Hello');

// 2)
// a) command "setTimeout" will be placed on the "Call Stack"
// b) "JS Engine API" will handle this command and due to the fact of timeout = 0
//    it will place the method "callback" on the "Task Queue"
// c) after placing the method on the "Task Queue" "setTimeout" is handled and removed
//    from the "Call Stack"
setTimeout(function callback() {
    console.log('Ohh!');
}, 0);

// 3)
// => same as 1)
console.log('World');

// 4)
// a) the "Event Loop" checks if the "Call Stack" is free
// b) if the "Call Stack" is free it will move the function "callback" to the "Call Stack"
