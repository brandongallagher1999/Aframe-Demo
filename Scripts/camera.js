

var model_spider;
var movement = 1;

window.onload = function moveCamera(){
    
    document.addEventListener('keydown', function(event) { 
        model_spider = document.querySelector("#spider");
        var pos_spider = x.toString() + " " + y.toString() + " " + z.toString();
        var x = model_spider.object3D.position.x;
        var y = model_spider.object3D.position.y;
        var z = model_spider.object3D.position.z;

        x += 1;
        y += 1;
        z += 1;
        
        var pos = x.toString() + " " + y.toString() + " " + z.toString();

        model_spider.setAttribute("position", pos);

        var key = event.keyCode;
        if(key == 87){
            console.log("pressing w");
       }
       else if(key == 68){ //keycodes in ascii
           console.log("pressing d");
       }
       else if(key == 65){
           console.log("presing a");
       }
       else if(key == 83){
           console.log("pressing d");
       }
    });

}