input.onButtonPressed(Button.A, function () {
    if (s == 0) {
        x1 += -1
        basic.showNumber(x1)
    } else if (s == 1) {
        y1 += -1
        basic.showNumber(y1)
    } else if (s == 2) {
        x2 += -1
        basic.showNumber(x2)
    } else if (s == 2) {
        y2 += -1
        basic.showNumber(y2)
    }
})
input.onButtonPressed(Button.AB, function () {
    s += 1
    if (s == 1) {
        basic.showString("y1")
        basic.showNumber(y1)
    } else if (s == 2) {
        basic.showString("x2")
        basic.showNumber(x2)
    } else if (s == 3) {
        basic.showString("y2")
        basic.showNumber(y2)
    } else if (s == 4) {
        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1
        basic.showString("y=" + m + "x+" + b)
    }
})
input.onButtonPressed(Button.B, function () {
    if (s == 0) {
        x1 += 1
        basic.showNumber(x1)
    } else if (s == 1) {
        y1 += 1
        basic.showNumber(y1)
    } else if (s == 2) {
        x2 += 1
        basic.showNumber(x2)
    } else if (s == 2) {
        y2 += 1
        basic.showNumber(y2)
    }
})
input.onGesture(Gesture.Shake, function () {
    start()
})
function start () {
    b = 0
    m = 0
    x1 = 0
    x2 = 0
    y1 = 0
    y2 = 0
    s = 0
    basic.showString("x1")
}
let b = 0
let m = 0
let y2 = 0
let x2 = 0
let y1 = 0
let x1 = 0
let s = 0
start()
