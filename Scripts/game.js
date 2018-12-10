// Immediately Invoked Function Expression

//Testing types
(function () {
    function Start() {
        createOcean();
        createMan();
    }


    function createMan() {
        console.log("Creating a man object");
        AFRAME.registerComponent('a-man', {
            defaultComponents: {
                man: {},
                rotation: { x: 0, y: 0, z: 0 }
            },
            mappings: {
                color: "man.color"
            }
        });
    }

    function createOcean() {
        AFRAME.registerPrimitive('a-ocean', {
            // Attaches the `ocean` component by default.
            // Defaults the ocean to be parallel to the ground.
            defaultComponents: {
                ocean: {},
                rotation: { x: -90, y: 0, z: 0 }
            },
            // Maps HTML attributes to the `ocean` component's properties.
            mappings: {
                width: 'ocean.width',
                depth: 'ocean.depth',
                density: 'ocean.density',
                color: 'ocean.color',
                opacity: 'ocean.opacity'
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map