/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene obiect
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
    this.vertices = [];
    this.normals = [];
    this.texCoords = [];

    //--- Vertices coordinates
    Array.prototype.push.apply(this.vertices,
      [0.5, -0.5, 0.5,	//0 - Face de Baixo
      0.5, -0.5, -0.5,	//1 - Face de Baixo
      -0.5, -0.5, -0.5,	//2 - Face de Baixo
      -0.5, -0.5, 0.5,  //3 - Face de Baixo
      0.5, 0.5, 0.5,    //4 - Face de Cima
      0.5, 0.5, -0.5,   //5 - Face de Cima
      -0.5, 0.5, -0.5,  //6 - Face de Cima
      -0.5, 0.5, 0.5,   //7 - Face de Cima
      0.5, -0.5, 0.5,	  //0 - Face da Direita
      0.5, -0.5, -0.5,	//1 - Face da Direita
      0.5, 0.5, -0.5,   //5 - Face da Direita
      0.5, 0.5, 0.5,    //4 - Face da Direita
      0.5, -0.5, -0.5,	//1 - Face de Trás
      -0.5, -0.5, -0.5,	//2 - Face de Trás
      -0.5, 0.5, -0.5,  //6 - Face de Trás
      0.5, 0.5, -0.5,   //5 - Face de Trás
      -0.5, -0.5, -0.5,	//2 - Face da Esquerda
      -0.5, -0.5, 0.5,  //3 - Face da Esquerda
      -0.5, 0.5, 0.5,   //7 - Face da Esquerda
      -0.5, 0.5, -0.5,  //6 - Face da Esquerda
      -0.5, -0.5, 0.5,  //3 - Face da Frente
      0.5, -0.5, 0.5,	  //0 - Face da Frente
      0.5, 0.5, 0.5,    //4 - Face da Frente
      -0.5, 0.5, 0.5]   //7 - Face da Frente
    );

    //--- Normals
    Array.prototype.push.apply(this.normals,
      [0, -1, 0,	//0 - Face de Baixo
      0, -1, 0, 	//1 - Face de Baixo
      0, -1, 0,	  //2 - Face de Baixo
      0, -1, 0,   //3 - Face de Baixo
      0, 1, 0,    //4 - Face de Cima
      0, 1, 0,    //5 - Face de Cima
      0, 1, 0,    //6 - Face de Cima
      0, 1, 0,    //7 - Face de Cima
      1, 0, 0,	  //0 - Face da Direita
      1, 0, 0,  	//1 - Face da Direita
      1, 0, 0,    //5 - Face da Direita
      1, 0, 0,    //4 - Face da Direita
      0, 0, -1,	  //1 - Face de Trás
      0, 0, -1,	  //2 - Face de Trás
      0, 0, -1,   //6 - Face de Trás
      0, 0, -1,   //5 - Face de Trás
      -1, 0, 0,	  //2 - Face da Esquerda
      -1, 0, 0,   //3 - Face da Esquerda
      -1, 0, 0,   //7 - Face da Esquerda
      -1, 0, 0,   //6 - Face da Esquerda
      0, 0, 1,    //3 - Face da Frente
      0, 0, 1,	  //0 - Face da Frente
      0, 0, 1,    //4 - Face da Frente
      0, 0, 1]    //7 - Face da Frente
    );

		//--- Indices
		this.indices = [
      2,0,1,  // Face de Baixo
      3,0,2,  // Face de Baixo
      4,6,5,  // Face de Cima
      7,6,4   // Face de Cima
    ];
    
    for (let i = 0 ; i <= 3 ; i++) {
      this.indices.push(8 + 4*i);
      this.indices.push(8 + 4*i + 3);
      this.indices.push(8 + 4*i + 1);
      this.indices.push(8 + 4*i + 1);
      this.indices.push(8 + 4*i + 3);
      this.indices.push(8 + 4*i + 2);
    }

    //--- Texture Coordinates
    Array.prototype.push.apply(this.texCoords,
      [0.49, 1.0,	//0 - Face de Baixo
      0.49, 0.65, //1 - Face de Baixo
      0.26, 0.65,	//2 - Face de Baixo
      0.26, 1.0,  //3 - Face de Baixo
      0.49, 0.0,  //4 - Face de Cima
      0.49, 0.34, //5 - Face de Cima
      0.26, 0.34, //6 - Face de Cima
      0.26, 0.0,  //7 - Face de Cima
      0.75, 0.65,	//0 - Face da Direita
      0.5, 0.65,	//1 - Face da Direita
      0.5, 0.34,  //5 - Face da Direita
      0.75, 0.34, //4 - Face da Direita
      0.5, 0.65,	//1 - Face de Trás
      0.25, 0.65,	//2 - Face de Trás
      0.25, 0.34, //6 - Face de Trás
      0.5, 0.34,  //5 - Face de Trás
      0.25, 0.65,	//2 - Face da Esquerda
      0.0, 0.65,  //3 - Face da Esquerda
      0.0, 0.34,  //7 - Face da Esquerda
      0.25, 0.34, //6 - Face da Esquerda
      1.0, 0.65,  //3 - Face da Frente
      0.75, 0.65,	//0 - Face da Frente
      0.75, 0.34, //4 - Face da Frente
      1.0, 0.34]  //7 - Face da Frente
    );

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
  }
  
  displayCubeMap() {
    this.scene.pushMatrix();
    this.scene.mapMaterial.apply();
    this.scene.translate(0, 24.9, 0);
    this.scene.scale(50,50,50);
    this.display();
    this.scene.popMatrix();
  }
}