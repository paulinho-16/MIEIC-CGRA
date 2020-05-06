/**
* MyAirship
* @constructor
*/
class MyAirship extends CGFobject {
  constructor(scene) {
    super(scene);
    this.body = new MySphere(scene, 16, 8);
    this.waggonBody = new MyCylinder(scene, 16);
    this.waggonEnd = new MySphere(scene, 16, 8);
    this.rudder = new MyRudder(scene);
    this.waggonBody = new MyCylinder(scene, 16);
    this.helixMiddle = new MySphere(scene, 16, 8);
    this.helixPart = new MySphere(scene, 16, 8);
    this.smallWaggon = new MySphere(scene, 16, 8);
  }

  createhelix() {
    // Display Helix Middle
    this.scene.pushMatrix();
    this.scene.scale(0.07, 0.07, 0.01);
    this.helixMiddle.display();
    this.scene.popMatrix();

    // Display Helix Part1
    this.scene.pushMatrix();
    this.scene.translate(0, -0.07 , 0);
    this.scene.scale(0.05, 0.1, 0.01);
    this.helixPart.display();
    this.scene.popMatrix();

    // Display Helix Part2
    this.scene.pushMatrix();
    this.scene.translate(0, 0.07 , 0);
    this.scene.scale(0.05, 0.1, 0.01);
    this.helixPart.display();
    this.scene.popMatrix();
  }

  display(helixAngle) {
    this.scene.pushMatrix();

    // Display Body
    this.scene.pushMatrix();
    this.scene.scale(1,1,2);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.airshipBodyMaterial.apply();      
    this.body.display();
    this.scene.popMatrix();

    // Display Waggon
    this.scene.pushMatrix();
    this.scene.translate(0, -1.07 , -0.5);
    this.scene.scale(0.15,0.15,1);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.greenMaterial.apply();
    this.waggonBody.display();
    this.scene.popMatrix();

    // Display Waggon Front End
    this.scene.pushMatrix();
    this.scene.translate(0, -1.07, 0.5);
    this.scene.scale(0.148, 0.148, 0.148);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.greenMaterial.apply();
    this.waggonEnd.display();
    this.scene.popMatrix();

    // Display Waggon Back End
    this.scene.pushMatrix();
    this.scene.translate(0, -1.07 , -0.5);
    this.scene.scale(0.148, 0.148, 0.148);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.greenMaterial.apply();
    this.waggonEnd.display();
    this.scene.popMatrix();

    // Display Upper Rudder
    this.scene.pushMatrix();
    this.scene.translate(0, 0.4, -2);
    this.scene.scale(1, 0.75, 0.75);
    this.scene.greenMaterial.apply();
    if (this.scene.gui.isKeyPressed("KeyD"))
      this.scene.rotate(-Math.PI/6.0, 0, 1, 0);
    if (this.scene.gui.isKeyPressed("KeyA") || this.scene.vehicle.autopilot)
      this.scene.rotate(Math.PI/6.0, 0, 1, 0);
    this.rudder.display();
    this.scene.popMatrix();

    // Display Lower Rudder
    this.scene.pushMatrix();
    this.scene.translate(0, -0.4, -2);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.scale(1, 0.75, 0.75);
    this.scene.greenMaterial.apply();
    if (this.scene.gui.isKeyPressed("KeyD"))
      this.scene.rotate(Math.PI/6.0, 0, 1, 0);
    if (this.scene.gui.isKeyPressed("KeyA") || this.scene.vehicle.autopilot)
      this.scene.rotate(-Math.PI/6.0, 0, 1, 0);
    this.rudder.display();
    this.scene.popMatrix();

    // Display Left Rudder
    this.scene.pushMatrix();
    this.scene.translate(0.4,0,-2);
    this.scene.rotate(3*Math.PI/2,0,0,1);
    this.scene.scale(1, 0.75, 0.75);
    this.scene.greenMaterial.apply();
    this.rudder.display();
    this.scene.popMatrix();

    // Display Right Rudder
    this.scene.pushMatrix();
    this.scene.translate(-0.4,0,-2);
    this.scene.rotate(Math.PI/2,0,0,1);
    this.scene.scale(1, 0.75, 0.75);
    this.scene.greenMaterial.apply();
    this.rudder.display();
    this.scene.popMatrix();

    this.scene.lightgreenMaterial.apply();

    //Right Helix
    this.scene.pushMatrix();
    this.scene.translate(0.2, -1 , -0.35);
    this.scene.scale(0.06,0.05,0.15);
    this.scene.translate(0, -1.07 , -1);
    this.smallWaggon.display();
    this.scene.popMatrix();


    //Left Helix
    this.scene.pushMatrix();
    this.scene.translate(0.2, -1 , -0.35);
    this.scene.scale(0.06,0.05,0.15);
    this.scene.translate(-6.4, -1 , -1);
    this.smallWaggon.display();
    this.scene.popMatrix();

    //--------------Helixes Movement-----------------
    //Helix Rotation Left
    this.scene.pushMatrix();
    
    this.scene.translate(0.2, -1.05 , -0.65);
    this.scene.rotate(helixAngle,0,0,1);
    this.scene.scale(0.5,0.8,1);
    this.createhelix();
    
    this.scene.popMatrix();
    
    //Helix Rotation Right
    this.scene.pushMatrix();
        
    this.scene.translate(-0.2, -1.05 , -0.65);
    this.scene.rotate(helixAngle,0,0,1);
    this.scene.scale(0.5,0.8,1);
    this.createhelix();
    
    this.scene.popMatrix();
    //----------------------------------------------

    this.scene.popMatrix();
  }
}
