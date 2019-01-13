// returns [x, y]
function getPos (part, keypoints) {
    var position = []
    for (var i = 0; i<keypoints.length; i++){
        if (position.length == 2){
            return position 
        }
        var element = keypoints[i]
        var bodypart = element["part"]
        var coordinates = element["position"]
        if (bodypart == part){
            position = [coordinates["x"], coordinates["y"]]
        }

    }
    return position
}

function getBodyPartPosition (lstBodyParts) {
    var lstBodyCoordinates = []
    for (var i = 0; i < lstBodyParts.length; i++){
        lstBodyCoordinates[i] = []
        for (var j = 0; j< lstBodyParts[i].length; j++){
            lstBodyCoordinates[i][j] = getPos(lstBodyParts[i][j], pose["keypoints"])
        }
    }
    return lstBodyCoordinates
}
