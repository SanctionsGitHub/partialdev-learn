---
title: JavaScript
layout: docs
---

# JavaScript

Luxaura.js has three built-in JavaScript pre-processors (use in `content` folder).

## CoffeeScript

- **File Extension:** `.coffee`
- **Example:**
```coffeescript
# my-script.coffee

list = [1, 2, 3, 4, 5]

square = (x) -> x * x

math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

cubes = (math.cube num for num in list)
```

- **Outputs into** `my-script.js`

## LiveScript

- **File Extension:** `.ls`
- **Example:**
```livescript
# ls-script.ls

<- $ 'h1' .on 'click'
alert 'boom!'
```

- **Outputs into** `ls-script.js`

## TypeScript

- **File Extension:** `.ts`
- **Example:**
```typescript
/** ts-script.ts */
class Animal {
    constructor(public name) { }
    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)
```

- **Outputs into** `ts-script.js`