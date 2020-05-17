/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyFlag extends CGFobject {
	constructor(scene) {
    super(scene);
    this.plane = new MyPlane(scene, 20);
    this.initTextures();
    this.initMaterials();
	}
  
  initTextures() {
    this.tntTexture = new CGFtexture(this.scene, 'images/TNT.jpg');
  }

  initMaterials() {
    this.flagMaterial = new CGFappearance(this.scene);
    this.flagMaterial.setAmbient(1.0, 1.0, 1.0, 1);
    this.flagMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.flagMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.flagMaterial.setShininess(10.0);
    this.flagMaterial.setTexture(this.tntTexture);
    this.flagMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  displayFlag() {
    this.scene.pushMatrix();
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();
  }
}