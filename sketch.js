let capture
let tracker

function setup() {

    createCanvas(800, 600).parent('p5')

    // start capturing video
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)

}

function draw() {

    // draw background stuff
    background(36, 36, 36, 30)

    // show the mirrored video feed
    // showFlippedCapture()

    // get new data from tracker
    let features = tracker.getCurrentPosition()

    // sometimes the tracker doesn't capture anything
    // in that case, we want to stop the function right here using 'return'
    if (features.length == 0) {
        return
    }

    // 'features' is an array of objects with x, y properties
    for (let feature of features) {
        stroke(255)
        fill(255)
        circle(feature.x, feature.y, 4)
        circle(feature.label, feature.x, feature.y)
    }

    // the nose is feature 62
    let nose = features[62]
    fill(255, 0, 0)
    // circle(nose.x, nose.y, 30)

    circle(features[25].x, features[25].y, 5)  // access the array directly
    circle(features[65].x, features[65].y, 5)
    circle(features[26].x, features[26].y, 5)  // access the array directly
    circle(features[66].x, features[66].y, 5)
    circle(features[23].x, features[23].y, 5)


    //left eye//
    circle(features[28].x, features[28].y, 5)  // access the array directly
    circle(features[70].x, features[70].y, 5)
    circle(features[31].x, features[31].y, 5)
    circle(features[69].x, features[69].y, 5)
    circle(features[30].x, features[30].y, 5)


    // // the eyes are elements 32 and 27
    // fill(0, 0, 255)
    circle(features[59].x, features[59].y, 10)
    circle(features[60].x, features[60].y, 10)
    circle(features[61].x, features[61].y, 10)
    circle(features[58].x, features[58].y, 10)
    circle(features[57].x, features[57].y, 10)
    circle(features[56].x, features[56].y, 10)

    // the eyes are elements 32 and 27
    // fill(0, 0, 255)
    // circle(features[32].x, features[32].y, 20)  // access the array directly
    // circle(features[27].x, features[27].y, 20)

}

// this function flips the webcam and displays it
function showFlippedCapture() {
    push()
    translate(capture.width, 0)
    scale(-1, 1)
    image(capture, 0, 0, capture.width, capture.height)
    pop()
}
