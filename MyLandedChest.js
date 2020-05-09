/**
 * MyLandedChest
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLandedChest extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
    this.initTextures(scene);
    this.initMaterials(scene);
  }

  initTextures(scene) {
    this.supplyTopBottom = new CGFtexture(scene, 'images/SupplyTopBottom.png');
    this.supplyDiamond = new CGFtexture(scene, 'images/Diamond.png');
  }

  initMaterials(scene) {
    this.supplyTopBottomMaterial = new CGFappearance(scene);
    this.supplyTopBottomMaterial.setAmbient(0.3, 0.3, 0.3, 1);
    this.supplyTopBottomMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.supplyTopBottomMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.supplyTopBottomMaterial.setShininess(10.0);
    this.supplyTopBottomMaterial.setTexture(this.supplyTopBottom);
    this.supplyTopBottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.supplyDiamondMaterial = new CGFappearance(scene);
    this.supplyDiamondMaterial.setAmbient(0.3, 0.3, 0.3, 1);
    this.supplyDiamondMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.supplyDiamondMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.supplyDiamondMaterial.setShininess(10.0);
    this.supplyDiamondMaterial.setTexture(this.supplyDiamond);
    this.supplyDiamondMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  display() {
    // Face do Meio
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyDiamondMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face do semieixo positivo dos Z
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face do semieixo negativo dos Z
    this.scene.pushMatrix();
    this.scene.translate(0, 0, -1);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face do semieixo positivo dos X
    this.scene.pushMatrix();
    this.scene.translate(1, 0, 0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face do semieixo negativo dos X
    this.scene.pushMatrix();
    this.scene.translate(-1, 0, 0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();
  }
}