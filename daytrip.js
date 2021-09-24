
//Create 4 arrays to randomize from
let destinations = ['Puerto Rico', 'Jamaica', 'Bahamas', ' Mexico']
let restaurants = ['Dilly', 'Mountain Top', 'Just Lunch', 'Hometown Buffet']
let transportations = ['Plane', 'Train', 'Automobiles', 'Bird']
let entertainments = ['All Night Club', 'Comedy Show', 'Bungee Jumping', 'Relaxing Beach Day']

//Create a function to randomize arrays
function randomizeArrays(ranArray) {
    let index = Math.floor(Math.random() * ranArray.length)
    let element = ranArray[index]
    return element
}

function bucketLogger() {
    //Call Function with all 4 arrays
    let destination = randomizeArrays(destinations)
    let restaurant = randomizeArrays(restaurants)
    let transportation = randomizeArrays(transportations)
    let entertainment = randomizeArrays(entertainments)

    //Let user know what was randomized
    console.log(`${destination}, ${restaurant}, ${transportation}, ${entertainment}`)
}

//Prompt user to select complete or to randomize again
let userInput = 'Try Again'

//Create a While Loop for Try Again userInput
while(userInput == 'Try Again'){
    bucketLogger()
    userInput = prompt('Type "Complete" if your trip is to your liking, otherwise type Try Again.')
}

// while (userInput == 'Try Again') {
//     destination = randomizeArrays(destinations)
//     restaurant = randomizeArrays(restaurants)
//     transportation = randomizeArrays(transportations)
//     entertainment = randomizeArrays(entertainments)
//     console.log(destination, restaurant, transportation, entertainment)
//     userInput = prompt('Type "Complete" if your trip is to your liking, otherwise type Try Again.')
// }

//Create an if statement for Complete userInput
if (userInput == 'Complete') {
    console.log('Your trip is booked!')
}