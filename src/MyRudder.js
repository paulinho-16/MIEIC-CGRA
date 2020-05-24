/**
 * MyRudder
 * @constructor
 * @param this.scene - Reference to MyScene object
 */
class MyRudder extends CGFobject {
	constructor(scene) {
    super(scene);
    this.triangle = new MyTriangle(scene);
  }

  display() {
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, -1);
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 1, 0);
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.triangle.display();
    this.scene.popMatrix();
  }
}
