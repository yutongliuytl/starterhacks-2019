// const lstBodyCoordinates = getBodyPartPosition (lstBodyParts)
// const lstBodyPartsStr = ["leftArmLower", "leftArmUpper", "rightArmLower", "rightArmUpper", "bodyCore"]

const lstcolor = ["crimson", "khaki", "lime", "aqua", "darkmagenta"]
const offset = window.innerWidth * 0.25
const scaleFactor = parseInt(window.innerWidth) * 0.75 / 640

// createDiv creates the div's for each body part
function createDiv(lstBodyPartsStr, element){
    for (var i = 0; i<lstBodyPartsStr.length; i++){
        var newDiv = document.createElement("div")
        newDiv.id = lstBodyPartsStr[i]
        newDiv.style.background = lstcolor[i]
        element.appendChild(newDiv)
    }
}

// to call rectangles(...)
// write rectangles(lstBodyCoordinates, lstBodyPartsStr, element)
// where element is a var element = getElementBy...

// returns false if lstBodyCoordinates is false
// else creates rectangles

function rectangles(lstBodyCoordinates, lstBodyPartsStr, element){
    if(lstBodyCoordinates == false){
        return false
    }
    else {
        for (var i = 0; i<lstBodyCoordinates.length; i++){
            var matrix = lstBodyCoordinates[i]

            // arms are defined by 2 points
            var newDiv = document.getElementById[lstBodyPartsStr[i]]
            if (newDiv.id != "bodyCore"){
                var x0 = matrix[0][0]
                var x1 = matrix[1][0]
                var y0 = matrix[0][1]
                var y1 = matrix[1][1]

                var midpoint = [1/2 * (x0 + x1), 1/2 * (y0 + y1)]
                // need to define C
                const C = 0.4  
                var xDelta = x0 - x1
                var yDelta = y0 - y1

                if (xDelta == 0){
                    if (yDelta > 0){
                        var angle = 180
                    }
                    else {
                        var angle = -180
                    }
                }
                else {
                    var angle = Math.atan(yDelta / xDelta) * 180 / Math.PI
                }

                var xDeltaSqr = Math.pow(xDelta, 2)
                var yDeltaSqr = Math.pow(yDelta, 2)
                var width = Math.sqrt(xDeltaSqr + yDeltaSqr)
                var height = C * width

                var widthScaled = width * scaleFactor
                var heightScaled = height * scaleFactor

                newDiv.style.width = widthScaled + 'px'
                newDiv.style.height = C * widthScaled + 'px'
                newDiv.style.transform = "rotate(" + angle.toString() + "deg)"
                newDiv.style.position = "absolute"
                newDiv.style.left = (midpoint[0] - 1/2*width) * scaleFactor + offset + 'px'
                newDiv.style.top = (midpoint[1] - 1/2*height) * scaleFactor + 'px'
                // var img = some image 
                // newDiv.appendChild(img)
            }

            // here we got the bodyCore, defined by 4 points
            // 0 ----------- 1
            // |             |
            // |             |
            // |             |
            // |             |
            // 3 ----------- 2
            else {
                var x0 = matrix[0][0]
                var x1 = matrix[1][0]
                var x2 = matrix[2][0]
                var x3 = matrix[3][0]
                var y0 = matrix[0][1]
                var y1 = matrix[1][1]
                var y2 = matrix[2][1]
                var y3 = matrix[3][1]

                var midpointTop = [1/2*(x0+x1), 1/2*(y0+y1)]
                var midpointBot = [1/2*(x2+x3), 1/2*(y2+y3)]
                var midpointMid = [1/4*(x0+x1+x2+x3), 1/4*(y0+y1+y2+y3)]

                // assumption: width between shoulders > diameter of hip
                var xDeltaTop = x1 - x0
                var yDeltaTop = y1 - y0 

                if (xDeltaTop == 0){
                    if (yDeltaTop > 0){
                        var angle = 180
                    }
                    else {
                        var angle = -180
                    }
                }
                else {
                    var angle = Math.atan(yDeltaTop / xDeltaTop) * 180 / Math.PI
                }

                var xDeltaSqrTop = Math.pow(xDeltaTop, 2)
                var yDeltaSqrTop = Math.pow(yDeltaTop, 2)

                var width = Math.sqrt(xDeltaSqrTop + yDeltaSqrTop)
                var widthScaled = width * scaleFactor

                var height = Math.sqrt(
                    Math.pow(midpointTop[0]-midpointBot[0], 2) + Math.pow(midpointTop[1]-midpointBot[1], 2)
                )
                var heightScaled = height * scaleFactor

                newDiv.style.width = widthScaled + 'px'
                newDiv.style.height = heightScaled + 'px'
                newDiv.style.transform = "rotate(" + angle.toString() + "deg)"
                newDiv.style.position = "absolute"
                newDiv.style.left = (midpointMid[0] - 1/2 * width) * scaleFactor + offset + 'px'
                newDiv.style.top = (midpointMid[1] - 1/2 * height) * scaleFactor + 'px'
                
            }

        }
    }
}


// clearDiv clears all the div's created by rectangles(...)
function clearDiv (){
    var lstDiv = document.getElementsByTagName("div")
    for(var i = 0; i<lstBodyPartsStr.length; i++){
        var part = lstBodyPartsStr[i]
        for(var j = 0; j<lstDiv.length; j++){
            if(part == lstDiv[j].id){
                lstDiv[j].parentNode.removeChild(lstDiv[j])
            }
        }
    }
}
