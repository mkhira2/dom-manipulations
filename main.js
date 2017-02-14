document.querySelector("#thanks button").addEventListener('click', function() {
    // TASK #1
    alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click', function() {
    // TASK #2
    var pNode = document.querySelector('#compoundInvestment')
    var doubleUp = parseInt(pNode.innerHTML)
    doubleUp = doubleUp += doubleUp
    pNode.innerHTML = doubleUp

})


document.querySelector("#color-circle button").addEventListener('click', function() {
    // TASK #3
    var circleNode = document.querySelector('#circle-bw')
    if (circleNode.style.background != 'black') {
        return circleNode.style.background = 'black'
    }
    if (circleNode.style.background = 'black') {
        return circleNode.style.background = 'white'
    }

})

document.querySelector("#blow-up button").addEventListener('click', function() {
    // TASK #4}
    var redCircle = document.querySelector('.circle-red')
    var styleObj = window.getComputedStyle(redCircle)
    var heightInt = parseInt(styleObj.height)
    var widthInt = parseInt(styleObj.width)
    if (heightInt <= 320 && widthInt <= 320) {
        redCircle.style.height = (heightInt * 2) + 'px'
        redCircle.style.width = (widthInt * 2) + 'px'
    } else {
        redCircle.style.height = '40px'
        redCircle.style.width = '40px'
    }

})

document.querySelector("#remove button").addEventListener('click', function() {
    // TASK #5
    var ulNode = document.querySelector('#userList')
    var liNode = ulNode.children
    for (var i = liNode.length - 1; i >= 0; i--) {
        if (liNode[i].classList.contains('inactive')) {
            ulNode.removeChild(liNode[i])
        }
    }

})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
    var squareNode = document.querySelector('#reverse-squares .answer-box')
    var eachSquaresNode = squareNode.children
    for (var i = eachSquaresNode.length - 1; i >= 0; i--) {
        squareNode.appendChild(eachSquaresNode[i])
    }

    //     var squareNode = document.querySelector('#reverse-squares .answer-box') 
    //     var smallSquaresNodes = document.querySelectorAll('.answer-box span') 
    //     for(var i = smallSquaresNodes.length-1; i >=0; i--) { 
    //         squareNode.appendChild(smallSquaresNodes[i])
    // } 
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
    var ulNode = document.querySelector('#tasks')
    var liNode = ulNode.children
    for (var i = 0; i < liNode.length; i++) {
        liNode[i].innerHTML = liNode[i].innerHTML.split('').reverse().join('')
    }
})

// document.querySelector("#cycle-image button").addEventListener('click', function() {
//     // TASK #8
// })
