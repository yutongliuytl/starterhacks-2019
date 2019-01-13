// 5	leftShoulder
// 6	rightShoulder
// 7	leftElbow
// 8	rightElbow
// 9	leftWrist
// 10	rightWrist
// 11	leftHip
// 12	rightHip

const leftArm = ["leftShoulder", "leftElbow", "leftWrist"]
const rightArm = ["rightShoulder", "rightElbow", "rightWrist"]
const bodyCore = ["leftShoulder", "rightShoulder", "rightHip", "leftHip"]

const lstBodyParts = [leftArm, rightArm, bodyCore]
// Sample

// {
//     "score": 0.32371445304906,
//     "keypoints": [
// {
//     "position": {
//       "y": 98.34538269043,
//       "x": 399.64068603516
//     },
//     "part": "leftShoulder",
//     "score": 0.99559044837952
//   }
// {
//     "position": {
//       "y": 208.5266418457,
//       "x": 284.46710205078
//     },
//     "part": "leftHip",
//     "score": 0.97870296239853
//   }
// ]
// }

// const pose is the pose

// transforms a list of body parts into their corresponding coordinates
const lstBodyCoordinates = getBodyPartPosition (lstBodyParts)

