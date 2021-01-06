console.log('Hello');

setTimeout(function callback() {
    console.log('Ohh!');
}, 0);

// compared to "setTimeout" this callback gets its own task-space
Promise.resolve().then(() => {
    console.log('First!');
});

console.log('World');
