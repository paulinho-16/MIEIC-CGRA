/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyFlag extends CGFobject {
	constructor(scene) {
    super(scene);
    this.plane = new MyPlane(scene, 90);
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

    this.scene.setActiveShader(this.flagShader);
    this.scene.pushMatrix();
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();

    this.scene.setActiveShader(this.invflagShader);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.flagMaterial.apply();
    this.plane.display();
    this.scene.popMatrix();

    // Restore Default Shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
  }
}