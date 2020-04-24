/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.orientation = 0;
        this.speed = 0;
        this.position = [0,0,0];
        this.pyramid = new MyPyramid(scene, 3);
    }

    update() {
        this.position[0] += this.speed*Math.sin(this.orientation);
        this.position[2] += this.speed*Math.cos(this.orientation);
    }

    turn(val) {
        this.orientation += val;
    }

    accelerate(val) {
        this.speed += val;
        if (this.speed < 0)
            this.speed = 0;
    }

    reset() {
        this.orientation = 0;
        this.speed = 0;
        this.position = [0,0,0];
    }

    display() {
        this.scene.pushMatrix(); 

        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.orientation,0,1,0);

        this.scene.scale(0.5, 0.5, 1);
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI/2,1,0,0);

        this.pyramid.display();
        this.scene.popMatrix();
    }
}


