/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
  constructor(scene) {
    super(scene);
    this.plane = new MyPlane(scene, 20);

    // Create Textures
    this.terrainColor = new CGFtexture(scene, 'images/terrain.jpg');
    this.terrainHeight = new CGFtexture(scene, 'images/heightmap.jpg');

    // Create Shader
    this.terrainShader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');

    // Bind Preparations
    this.terrainShader.setUniformsValues({ terrainTex : 0, terrainMap : 1 });
  }

  display() {
    this.scene.setActiveShader(this.terrainShader);
    this.scene.pushMatrix();

    this.terrainColor.bind(0);
    this.terrainHeight.bind(1);

    this.scene.scale(50, 1, 50);
    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);

    this.plane.display();

    this.scene.popMatrix();

    // Restore Default Shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
  }
}
