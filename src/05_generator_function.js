// 1) a generator function will pause on calling "yield"
// 2) to resume we cann call ".next" on the generator function

// using "yield" the generator function sends messages out
// using ".next()" we send messages back in

function* counter() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

const gen = counter();

console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
