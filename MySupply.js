/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
    this.initTextures(scene);
    this.initMaterials(scene);
  }

  initTextures(scene) {
    this.supplyFront = new CGFtexture(scene, 'images/SupplyFront.png');
    this.supplyTopBottom = new CGFtexture(scene, 'images/SupplyTopBottom.png');
    this.supplySides = new CGFtexture(scene, 'images/SupplySides.png');
  }

  initMaterials(scene) {
    this.supplyFrontMaterial = new CGFappearance(scene);
    this.supplyFrontMaterial.setAmbient(0.3, 0.3, 0.3, 1);
    this.supplyFrontMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.supplyFrontMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.supplyFrontMaterial.setShininess(10.0);
    this.supplyFrontMaterial.setTexture(this.supplyFront);
    this.supplyFrontMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.supplyTopBottomMaterial = new CGFappearance(scene);
    this.supplyTopBottomMaterial.setAmbient(0.3, 0.3, 0.3, 1);
    this.supplyTopBottomMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.supplyTopBottomMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.supplyTopBottomMaterial.setShininess(10.0);
    this.supplyTopBottomMaterial.setTexture(this.supplyTopBottom);
    this.supplyTopBottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.supplySidesMaterial = new CGFappearance(scene);
    this.supplySidesMaterial.setAmbient(0.3, 0.3, 0.3, 1);
    this.supplySidesMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.supplySidesMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.supplySidesMaterial.setShininess(10.0);
    this.supplySidesMaterial.setTexture(this.supplySides);
    this.supplySidesMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  display() {

    // Face da Frente
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.supplyFrontMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face de Trás
    this.scene.pushMatrix();
    this.scene.translate(0,0,-0.5);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.supplySidesMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face da Esquerda
    this.scene.pushMatrix();
    this.scene.translate(-0.5,0,0);
    this.scene.rotate(-Math.PI/2.0, 0, 1, 0);
    this.supplySidesMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face da Direita
    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(Math.PI/2.0, 0, 1, 0);
    this.supplySidesMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face de Cima
    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();

    // Face de Baixo
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(Math.PI/2.0, 1, 0, 0);
    this.supplyTopBottomMaterial.apply();
    this.quad.display();
    this.scene.popMatrix();
  }
}