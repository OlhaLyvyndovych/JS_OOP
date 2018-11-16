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

// function createCircle(radius){
//   return{
//     radius,
//     draw: function(){
//       console.log('draw');
//     }
//   }
// }

// let circle = createCircle(4);
// circle.draw();
// console.log(circle.radius);

//*******Constructor Function **********************************************
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }
// let another = new Circle(5);

//***********Functions are Objects
// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor); //f Function() {} Internally Function Object created (f) Circle object
// example of creating an object by using internal Function() constructor

// const Circle1 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
//   `);

// const CircleInt = new Circle1(8);
//
// console.log(CircleInt.radius);

//Some methods
// Circle.call({},1); //creates an object
// Circle.apply({},[1,2,3]);//Accepts an arrays as an argument
//*****************************************************************************
//              Primitive vs Reference examples

// let number = 10;
//
// function increase(number){
//   number++;
// }
//
// increase(number);
// console.log(number);// Output is 10 because number++ is 11 just inside the scope of the function
// //----------------------------------------------------------------------------
// let obj = { value: 10};
// function increaseObj(obj){
//   obj.value++;
// }
// increaseObj(obj);
// console.log(obj);//Output is 11 as ++ is actual increase by the reference
//----------------------Changing objects dynamically ----------------------------
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }
// const circle = new Circle(10);
// circle.location = {x:1};
//circle['location'] = {x:2};
// const propertyName = 'center-location';
// circle['propertyName']={x:5};
// delete circle.location;
//----------FOR IN loop -------------------------------------------------------
// for (let key in circle){
//   if(typeof circle[key] !== 'function'){ // If we need just properties without methods
//   //console.log(key); // radius draw
//   console.log(key, circle[key]);
// } // Output will be key with its value
// }
// //Another way to get all the keys
// const keys = Object.keys(circle);
// console.log(keys);
//------------IN operator to check if the object has given property -------------
// if ('radius' in circle)
// console.log('Circle has a radius.');
// ------------------------- A B S T R A C T I O N ----------------------------
// function Circle(radius){
//   this.radius = radius;
//
//   let defaultLocation = {x:0, y:0};//Instead of this we use let to hide private properties
//
//   let computeOptimumLocation = function(factor){ //hiding private method
//     //.....
//   };
//
//   this.draw = function(){
//     computeOptimumLocation(0.1);
//     //defaultLocation //simply using variable to access it
//     //this.radius   // if we need radius property we use this keyword
//     console.log('draw');
//   }
// }
// const circle = new Circle(10);
//-----------------GETTERS / SETTERS ---------------------------------------
// function Circle(radius){
//   this.radius = radius;
//
//   let defaultLocation = {x:0, y:0};
//
//   this.draw = function(){
//     console.log('draw');
//   };
//
//   Object.defineProperty(this, 'defaultLocation',{
//       get: function(){
//         return defaultLocation;
//       },
//       set: function(value){
//         if (!value.x || !value.y)
//           throw new Error('Invalid location.');
//
//         defaultLocation = value;
//       }
//     });
// }
// const circle = new Circle(10);
// circle.draw;
// circle.defaultLocation.x = 20;
// circle.defaultLocation = 5; //Will give us an error message
//-----------EXERCISE --------------------------------------------------------
function Stopwatch(){
  let startTime, endTime, running, duration = 0;

  this.start = function(){
      if (running)
        throw new Error('STOPWATCH has already started');
      running = true;
      startTime = new Date();
  }

  this.stop = function(){
      if (!running)
        throw  new Error('STOPWATCH is not started');
      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime())/1000;
      duration += seconds;
  }

  this.reset = function(){
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    }
  });

}
