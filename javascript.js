var likes = [
  'chocolate',
  'ice cream',
  'snickers',
  'Sean Lai',
  'climbing',
  'pineapple gummy bears',
  'orange juice',
  'mimosas',
  'crimps',
  'technical climbs',
  'slab climbs',
  'hiking'
]

function newLike() {
var randomNumber = Math.floor(Math.random()*(likes.length));
document.getElementByClassName("LikeDisplay").innerHTML = likes[randomNumber];
}

var dislikes = [
  'cake that falls apart',
  'bad drivers',
  'slopers',
  'Nazis',
  'National Socialism',
  'waking up early',
  'trouble kids'
]

function newDislike() {
var randomNumber = Math.floor(Math.random()*(dislikes.length));
document.getElementByClassName("DislikeDisplay").innerHTML = dislikes[randomNumber];

}
