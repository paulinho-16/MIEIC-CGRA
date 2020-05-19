/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene) {
        super(scene);
        this.orientation = 0;
        this.speed = 0;
        this.position = [0,10,0];
        this.airship = new MyAirship(scene);
        this.flag = new MyFlag(scene, 20);
        this.scalef = 1.0;
        this.helixAngle = Math.PI/2;
        this.autopilot = false;
        this.angularSpeed = 2*Math.PI / 5;
        this.center = [0,0,0];
        this.previous = 0;
        this.deltaTime = 0;
        this.pos = 0;
    }

    update(t) {
        this.deltaTime = (t - this.previous) / 1000;
        if (this.autopilot)
        {
            this.previous = t;
            this.deltaAngle = this.deltaTime * this.angularSpeed;
            this.turn(this.deltaAngle);
            this.position[0] = this.center[0] - 5*Math.cos(this.orientation);
            this.position[1] = this.center[1];
            this.position[2] = this.center[2] + 5*Math.sin(this.orientation);
        }
        else {
            this.position[0] += this.speed*Math.sin(this.orientation);
            this.position[2] += this.speed*Math.cos(this.orientation);
            this.helixAngle += this.speed + 0.1;
        }
        this.flag.update(t);
        this.pos += this.speed * this.deltaTime;
        this.flag.setPosition(this.pos);
        this.previous = t;
    }

    startAutoPilot()
    {
        this.center = [0, 0, 0];
        this.autopilot = true;
        this.pilotAngle = this.orientation - Math.PI/2;
        this.center[0] = this.position[0] + 5*Math.cos(this.orientation);
        this.center[1] = this.position[1];
        this.center[2] = this.position[2] - 5*Math.sin(this.orientation);
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
        this.position = [0,10,0];
        this.helixAngle=Math.PI/2;
        this.autopilot = false;
        this.previous = 0;
        this.pos = 0;
    }

    scaleVehicle(scaleFactor) {
        this.scalef = scaleFactor;
    }

    display() {
        this.scene.pushMatrix();

        // General Transformations
        this.scene.translate(0, 20, 0);
        this.scaleVehicle(this.scene.scaleFactor);

        // Variable Transformations
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.scale(this.scalef,this.scalef,this.scalef);
        this.airship.display(this.helixAngle);

        // Display Flag
        this.scene.translate(0, 0, -5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.setDefaultAppearance();
        this.flag.display();

        this.scene.popMatrix();
    }
}


