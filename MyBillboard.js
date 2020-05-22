/**
* MyBillboard
* @constructor
*/
class MyBillboard extends CGFobject {
  constructor(scene) {
    super(scene);
    this.scene=scene;
    this.plane = new MyPlane(this.scene,50);
    this.planeholder = new MyCylinder(this.scene,20);
    this.initTextures();
    this.initMaterials();
    this.initShaders();
  }

  initTextures() {
    this.billboardTexture = new CGFtexture(this.scene, "images/billboard.png");
    this.billboardBackTexture = new CGFtexture(this.scene, "images/billboard_back.png");
    this.holdersTexture = new CGFtexture(this.scene, "images/wood.jpg");
  }
    
  initMaterials() {
    this.billboardMaterial = new CGFappearance(this.scene);
    this.billboardMaterial.setAmbient(1.0, 1.0, 1.0, 1);
    this.billboardMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.billboardMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.billboardMaterial.setShininess(10.0);
    this.billboardMaterial.setTexture(this.billboardTexture);
    this.billboardMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.holdersMaterial = new CGFappearance(this.scene);
    this.holdersMaterial.setAmbient(1.0, 1.0, 1.0, 1);
    this.holdersMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.holdersMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.holdersMaterial.setShininess(10.0);
    this.holdersMaterial.setTexture(this.holdersTexture);
    this.holdersMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.billboardBackMaterial = new CGFappearance(this.scene);
    this.billboardBackMaterial.setAmbient(1.0, 1.0, 1.0, 1);
    this.billboardBackMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.billboardBackMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.billboardBackMaterial.setShininess(10.0);
    this.billboardBackMaterial.setTexture(this.billboardBackTexture);
    this.billboardBackMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  initShaders() {
    this.billboardShader = new CGFshader(this.scene.gl, 'shaders/billboard.vert', 'shaders/billboard.frag');
    this.billboardShader.setUniformsValues({ billboardTex : 1 });
  }

  update() {
    this.billboardShader.setUniformsValues({ supplies : this.scene.nSuppliesDelivered });
  }

  display() {
    // General Transformations
    this.scene.pushMatrix();
    this.scene.translate(-7,0,-7);
    this.scene.rotate(Math.PI/4,0,1,0);

    // Billboard
    this.scene.pushMatrix();
    this.billboardMaterial.apply();
    this.scene.translate(0,1.5,0);
    this.scene.scale(2,1,1);
    this.plane.display();
    this.scene.popMatrix();

    this.scene.defaultMaterial.apply();

    // Billboard(Back)
    this.scene.pushMatrix();
    this.billboardBackMaterial.apply();
    this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0,1.5,0);
    this.scene.scale(2,1,1);
    this.plane.display();
    this.scene.popMatrix();

    this.holdersMaterial.apply();
    // First Holder
    this.scene.pushMatrix();
    this.scene.translate(-0.95,0,0);
    this.scene.scale(0.05,1,0.01);
    this.planeholder.display();
    this.scene.popMatrix();

    // Secong Holder
    this.scene.pushMatrix();
    this.scene.translate(0.95,0,0);
    this.scene.scale(0.05,1,0.01);
    this.planeholder.display();
    this.scene.popMatrix();

    this.scene.defaultMaterial.apply();

    // Supplies Bar
    this.scene.setActiveShader(this.billboardShader);
    this.scene.pushMatrix();
    this.scene.translate(0,1.3,0.01);
    this.scene.scale(1.5,0.2,1);
    this.plane.display();
    this.scene.popMatrix();
    this.scene.popMatrix();
  }
}


