/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
    this.initMaterials();
  }

  initMaterials() {
    // Texture Material - Faces dos Lados
    this.mineSide = new CGFappearance(this.scene);
    this.mineSide.setAmbient(0.1, 0.1, 0.1, 1);
    this.mineSide.setDiffuse(0.9, 0.9, 0.9, 1);
    this.mineSide.setSpecular(0.1, 0.1, 0.1, 1);
    this.mineSide.setShininess(10.0);
    this.mineSide.loadTexture('images/mineSide.png');
    this.mineSide.setTextureWrap('REPEAT', 'REPEAT');

    // Texture Material - Face de Cima
    this.mineTop = new CGFappearance(this.scene);
    this.mineTop.setAmbient(0.1, 0.1, 0.1, 1);
    this.mineTop.setDiffuse(0.9, 0.9, 0.9, 1);
    this.mineTop.setSpecular(0.1, 0.1, 0.1, 1);
    this.mineTop.setShininess(10.0);
    this.mineTop.loadTexture('images/mineTop.png');
    this.mineTop.setTextureWrap('REPEAT', 'REPEAT');

    // Texture Material - Face de Baixo
    this.mineBottom = new CGFappearance(this.scene);
    this.mineBottom.setAmbient(0.1, 0.1, 0.1, 1);
    this.mineBottom.setDiffuse(0.9, 0.9, 0.9, 1);
    this.mineBottom.setSpecular(0.1, 0.1, 0.1, 1);
    this.mineBottom.setShininess(10.0);
    this.mineBottom.loadTexture('images/mineBottom.png');
    this.mineBottom.setTextureWrap('REPEAT', 'REPEAT');
}

  display() {

    // Face da Frente
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.mineSide.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Trás
    this.scene.pushMatrix();
    this.scene.translate(0,0,-0.5);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.mineSide.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    // Face da Esquerda
    this.scene.pushMatrix();
    this.scene.translate(-0.5,0,0);
    this.scene.rotate(-Math.PI/2.0, 0, 1, 0);
    this.mineSide.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    // Face da Direita
    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(Math.PI/2.0, 0, 1, 0);
    this.mineSide.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Cima
    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.mineTop.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Baixo
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(Math.PI/2.0, 1, 0, 0);
    this.mineBottom.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();
  }
}