/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyFlag extends CGFobject {
	constructor(scene) {
    super(scene);
    this.plane = new MyPlane(scene, 90);
    this.cylinder = new MyCylinder(scene, 16);
    this.initTextures();
    this.initMaterials();
    this.initShaders();
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

    this.wireMaterial = new CGFappearance(this.scene);
    this.wireMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.wireMaterial.setDiffuse(0.0, 0.0, 0.0, 1.0);
    this.wireMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.wireMaterial.setShininess(10.0);
  }

  initShaders() {
    this.flagShader = new CGFshader(this.scene.gl, 'shaders/flag.vert', 'shaders/flag.frag');
    this.invflagShader = new CGFshader(this.scene.gl, 'shaders/invflag.vert', 'shaders/flag.frag');
    // Bind Preparations
    this.flagShader.setUniformsValues({ flagTex : 0});
    this.invflagShader.setUniformsValues({ flagTex : 0});
  }

  update(t) {
    this.flagShader.setUniformsValues({ timeFactor : t/100%1000 });
    this.invflagShader.setUniformsValues({ timeFactor : t/100%1000 });
  }

  setPosition(position) {
    this.flagShader.setUniformsValues({ pos : position });
    this.invflagShader.setUniformsValues({ pos : position });
  }

  display() {

    // Display the Front of the Flag
    this.scene.setActiveShader(this.flagShader);
    this.scene.pushMatrix();
    this.scene.scale(3, 1.5, 1);
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();

    // Display the Back of the Flag
    this.scene.setActiveShader(this.invflagShader);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.scale(3, 1.5, 1);
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();

    // Restore Default Shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);

    // Display Upper Wire
    this.scene.pushMatrix();
    this.scene.translate(-1.5, 0.3, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.scale(0.02, 2, 0.02);
    this.wireMaterial.apply();
    this.cylinder.display();
    this.scene.popMatrix();

    // Display Lower Wire
    this.scene.pushMatrix();
    this.scene.translate(-1.5, -0.3, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.scale(0.02, 2, 0.02);
    this.wireMaterial.apply();
    this.cylinder.display();
    this.scene.popMatrix();
  }
}