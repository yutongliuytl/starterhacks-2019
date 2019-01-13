// returns [x, y]
function getPos (part, keypoints) {
    // threshold for accuracy

    const threshold = 70
    var position = []
    for (var i = 0; i<keypoints.length; i++){
        var element = keypoints[i]
        var bodypart = element["part"]
        var coordinates = element["position"]
        var score = element["score"]
        if (bodypart == part){
            if (score <= threshold){
                return false 
            }
            else {
                position = [coordinates["x"], coordinates["y"]]
                return position 
            }
        }

    }
    return position
}

function getBodyPartPosition (lstBodyParts) {
    var lstBodyCoordinates = []
    for (var i = 0; i < lstBodyParts.length; i++){
        lstBodyCoordinates[i] = []
        for (var j = 0; j< lstBodyParts[i].length; j++){
            var position = getPos(lstBodyParts[i][j], pose["keypoints"])
            if (position == false){
                return false 
            }
            else {
                lstBodyCoordinates[i][j] = position 
            }
        }
    }
    return lstBodyCoordinates
}
