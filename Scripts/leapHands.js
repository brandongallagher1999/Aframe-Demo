


//Global variables to be accessed by index.html
var camera;
var hand_left;
var hand_right;
var main;
var hand_left_controller;
var controller;

//When the window is fully finished loading, call this function (to avoid null references)
window.onload = function(){

    window.controller = new Leap.Controller;
    window.controller.use('riggedHand');        //Controller for LeapMotion
    window.controller.connect();

    camera = document.querySelector("camera"); //Choosing camera object



    controller = Leap.loop(function(frame){     //Loop for receiving leap motion data

        if (!camera){
            camera = document.querySelector("#camera"); //If the camera is a null reference, create a proper reference
        }

        if (!hand_left && !hand_right){
            hand_left = document.getElementById("hand_left"); //Like before checking for null reference
            hand_right = document.getElementById("hand_right");
        }
        if(frame.hands.length > 0) //If there's more than 0 hands
        {
            hand_left_controller = frame.hands[0]; //Left hand at position 0 so the first of 2 indexes
            

            var x = camera.object3D.getWorldPosition.x; //Getting position of camera
            var y = camera.object3D.getWorldPosition.y;
            var z = camera.object3D.getWorldPosition.z;
        
            //console.log(camera.object3D.getWorldPosition());
            hand_left.object3D.position = camera.object3D.getWorldPosition(); //Attempting to move hand model to camera position

            // I can't get the hand object to move where i want it!

        }
    });
}