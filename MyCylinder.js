class MyCylinder extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   */
  constructor(scene, slices) {
    super(scene);
    this.slices = slices;
    this.initBuffers();
  }

  /**
   * @method initBuffers
   * Initializes the cylinder buffers
   */
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var theta;
    var thetaInc = (2 * Math.PI) / this.slices;

    theta = 0;
    for (let indice = 0; indice <= this.slices; indice++) {
      //--- Vertices coordinates
      var x = Math.cos(theta);
      var z = Math.sin(theta);
      this.vertices.push(x, 0, z);  // Vertice da base inferior
      this.vertices.push(x, 1, z);  // Vertice da base superior

      //--- Indices
      if (indice != 0) {
        this.indices.push(indice*2, indice*2 - 2, indice*2 - 1);  // Visao Externa do Cilindro
        this.indices.push(indice*2, indice*2 - 1, indice*2 + 1);  // Visao Externa do Cilindro
        this.indices.push(indice*2, indice*2 - 1, indice*2 - 2);  // Visao Interna do Cilindro
        this.indices.push(indice*2, indice*2 + 1, indice*2 - 1);  // Visao Interna do Cilindro
      }

      //--- Normals
      this.normals.push(Math.cos(theta), 0, Math.sin(theta));
      this.normals.push(Math.cos(theta), 0, Math.sin(theta));
      theta += thetaInc;

      //--- Texture Coordinates
      // To be done... 
      // May need some additional code also in the beginning of the function.
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}
