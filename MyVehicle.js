/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene) {
        super(scene);
        this.orientation = 0;
        this.speed = 0;
        this.position = [0,0,0];
        this.body = new MySphere(scene, 16, 8);
        this.scalef=1.0;
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

    scaleVehicle(scaleFactor)
    {
        this.scalef = scaleFactor;
    }

    display() {
        this.scene.pushMatrix(); 

        this.scene.scale(2,2,2);

        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.orientation,0,1,0);

        this.scene.scale(this.scalef,this.scalef,this.scalef);

        this.scene.scale(0.5, 0.5, 1);
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI/2,1,0,0);

        this.body.display();
        this.scene.popMatrix();
    }
}


