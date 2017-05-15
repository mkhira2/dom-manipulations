document.querySelector("#thanks button").addEventListener('click', function() {
    // TASK #1
    alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click', function() {
    // TASK #2
    var pNode = document.querySelector('#compoundInvestment')   // create variable for paragraph node
    var doubleUp = parseInt(pNode.innerHTML)                    // create variable for paragraph text
    doubleUp = doubleUp += doubleUp                             // make text variable double itself
    pNode.innerHTML = doubleUp                                  // make text double itself on click

})


document.querySelector("#color-circle button").addEventListener('click', function() {
    // TASK #3
    var circleNode = document.querySelector('#circle-bw')   // create variable for circle
    if (circleNode.style.background != 'black') {           // if circle isn't black (aka is white),
        return circleNode.style.background = 'black'        // turn it black
    }
    if (circleNode.style.background = 'black') {            // if circle is black,
        return circleNode.style.background = 'white'        // turn it white
    }

})

document.querySelector("#blow-up button").addEventListener('click', function() {
    // TASK #4}
    var redCircle = document.querySelector('.circle-red')   // create variable for red circle
    var styleObj = window.getComputedStyle(redCircle)       // create avenue to access css
    var heightInt = parseInt(styleObj.height)               // turn height into an integer
    var widthInt = parseInt(styleObj.width)                 // turn width into an integer
    if (heightInt <= 320 && widthInt <= 320) {              // if the height/width is < 320...
        redCircle.style.height = (heightInt * 2) + 'px'     // double height on click &
        redCircle.style.width = (widthInt * 2) + 'px'       // double width on click
    } else {
        redCircle.style.height = '40px'                     // otherwise, turn back to original size
        redCircle.style.width = '40px'                      // see above
    }

})

document.querySelector("#remove button").addEventListener('click', function() {
    // TASK #5
    var ulNode = document.querySelector('#userList')        // create user list node
    var liNode = ulNode.children                            // create list item node
    for (var i = liNode.length - 1; i >= 0; i--) {          // iterate through list items
        if (liNode[i].classList.contains('inactive')) {     // if list item has class 'inactive'...
            ulNode.removeChild(liNode[i])                   // ...remove it from the user list
        }
    }

})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
    var squareNode = document.querySelector('#reverse-squares .answer-box') // set variable for square container
    var eachSquaresNode = squareNode.children                               // set variable for each square
    for (var i = eachSquaresNode.length - 1; i >= 0; i--) {                 // iterate through each square backwards
        squareNode.appendChild(eachSquaresNode[i])                          // for each index, add to square container
    }
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
    var ulNode = document.querySelector('#tasks')                               // set variable for task list
    var liNode = ulNode.children                                                // set variable for list items
    for (var i = 0; i < liNode.length; i++) {                                   // iterate through list items
        liNode[i].innerHTML = liNode[i].innerHTML.split('').reverse().join('')  // reverse each character in text
    }
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    // TASK #8
    var imgNode = document.querySelector('#city-img')                         // create image node
    var lastNum = parseInt(imgNode.src.slice(-1))                             // create last number node
    lastNum += 1                                                              // increase last number
    if (lastNum > 9) {                                                        // cycle through pics
      lastNum = 1                                                             // cycle through pics
    }
    imgNode.src = imgNode.src.slice(0, -1) + lastNum                          // return url with new image
})
