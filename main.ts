input.onButtonPressed(Button.A, function () {
    if (!(playerx == 1)) {
        playerx += -1
    }
    if (playerx == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
    } else {
        if (playerx == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # # # # #
                `)
        } else {
            if (playerx == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # # # # #
                    `)
            } else {
                if (playerx == 5) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . #
                        # # # # #
                        `)
                } else {
                    if (playerx == 4) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . # .
                            # # # # #
                            `)
                    } else {
                    	
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (playerx == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
    } else {
        if (playerx == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                . . . . .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # # # # #
                `)
        } else {
            if (playerx == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    . . . . .
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    `)
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    . . . . .
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # # # # #
                    `)
            } else {
                if (playerx == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . # .
                        . . . . .
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . . . .
                        . . . . .
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . # .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . . . .
                        . . . . .
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . # .
                        . . . . .
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . # .
                        # # # # #
                        `)
                } else {
                    if (playerx == 5) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . #
                            . . . . .
                            # # # # #
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . . .
                            . . . . .
                            # # # # #
                            `)
                        basic.showLeds(`
                            . . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # # # # #
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . . .
                            . . . . .
                            # # # # #
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . #
                            . . . . .
                            # # # # #
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . #
                            # # # # #
                            `)
                    } else {
                    	
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(playerx == 5)) {
        playerx += 1
    }
    if (playerx == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
    } else {
        if (playerx == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # # # # #
                `)
        } else {
            if (playerx == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # # # # #
                    `)
            } else {
                if (playerx == 5) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . #
                        # # # # #
                        `)
                } else {
                    if (playerx == 4) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . # .
                            # # # # #
                            `)
                    } else {
                    	
                    }
                }
            }
        }
    }
})
let playerx = 0
playerx = 3
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    # # # # #
    `)
basic.forever(function () {
	
})
