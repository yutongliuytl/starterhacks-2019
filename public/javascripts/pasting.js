const leftArmLower = ["leftElbow", "leftWrist"]
const leftArmUpper = ["leftShoulder", "leftElbow"]
const rightArmLower = ["rightElbow", "rightWrist"]
const rightArmUpper = ["rightShoulder", "rightElbow"]
const bodyCore = ["leftShoulder", "rightShoulder", "rightHip", "leftHip"]

const lstBodyParts = [leftArmLower, leftArmUpper, rightArmLower, rightArmUpper, bodyCore]
// const pose is the pose

// transforms a list of body parts into their corresponding coordinates
const lstBodyCoordinates = getBodyPartPosition (lstBodyParts)
