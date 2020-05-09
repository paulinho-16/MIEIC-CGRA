/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
  }

  display() {

    // Face da Frente
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Trás
    this.scene.pushMatrix();
    this.scene.translate(0,0,-0.5);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.quad.display();
    this.scene.popMatrix();

    // Face da Esquerda
    this.scene.pushMatrix();
    this.scene.translate(-0.5,0,0);
    this.scene.rotate(-Math.PI/2.0, 0, 1, 0);
    this.quad.display();
    this.scene.popMatrix();

    // Face da Direita
    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(Math.PI/2.0, 0, 1, 0);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Cima
    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    // Face de Baixo
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(Math.PI/2.0, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();
  }
}