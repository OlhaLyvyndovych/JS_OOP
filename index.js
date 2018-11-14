// let circle = {  // object literal - a simple way to defin an object
//   radius: 1,
//   location: {
//     x: 1,
//     y:1
//   },
//   draw: function(){
//     console.log('draw');
//   }
// }

//circle.draw();
//****** Factory Function ********************************************

function createCircle(radius){
  return{
    radius,
    draw: function(){
      console.log('draw');
    }
  }
}

// let circle = createCircle(4);
// circle.draw();
// console.log(circle.radius);

//*******Constructor Function **********************************************
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

let another = new Circle(5);
