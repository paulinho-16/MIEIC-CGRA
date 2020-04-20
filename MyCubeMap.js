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
    //                                                DUVIDA DO FOR!!
    /*for (let i = 0 ; i < 3 ; i++) {
      Array.prototype.push.apply(this.vertices,
        [0.5, -0.5, 0.5,	//0
        0.5, -0.5, -0.5,	//1
        -0.5, -0.5, -0.5,	//2
        -0.5, -0.5, 0.5,  //3
        0.5, 0.5, 0.5,    //4
        0.5, 0.5, -0.5,   //5
        -0.5, 0.5, -0.5,  //6
        -0.5, 0.5, 0.5]   //7
      );
    }*/

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

    //--- Normals                                        DUVIDA DO FOR!!
    /*for (let i = 0 ; i < 3 ; i++) {
      switch (i) {
        case 0:
          Array.prototype.push.apply(this.normals,
            [0, 0, 1,	 //0
             0, 0, -1, //1
             0, 0, -1, //2
             0, 0, 1,  //3
             0, 0, 1,  //4
             0, 0, -1, //5
             0, 0, -1, //6
             0, 0, 1]  //7
          );
          break;
        case 1:
          Array.prototype.push.apply(this.normals,
            [0, -1, 0, //0
             0, -1, 0, //1
             0, -1, 0, //2
             0, -1, 0, //3
             0, 1, 0,  //4
             0, 1, 0,  //5
             0, 1, 0,  //6
             0, 1, 0]  //7
          );
          break;
        case 2:
          Array.prototype.push.apply(this.normals,
            [1, 0, 0,  //0
             1, 0, 0,  //1
             -1, 0, 0, //2
             -1, 0, 0, //3
             1, 0, 0,  //4
             1, 0, 0,  //5
             -1, 0, 0, //6
             -1, 0, 0] //7
          );
          break;
        default:
          break;
      }
    }*/

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
      2,0,1,  // face de baixo
      3,0,2,  // face de baixo
      4,6,5,  // face de cima
      7,6,4   // face de cima
      //2,0,1,  // face de baixo
      //3,0,2   // face de baixo
    ];
    
    for (let i = 0 ; i <= 3 ; i++) {
      this.indices.push(8 + 4*i);       // 8    // 9
      //this.indices.push(8 + 4*i + 1);   // 9    // 10
      this.indices.push(8 + 4*i + 3);   // 11   // 11
      this.indices.push(8 + 4*i + 1);   // 9    // 10
      this.indices.push(8 + 4*i + 1);   // 9    //12
      //this.indices.push(8 + 4*i + 2);   // 10
      this.indices.push(8 + 4*i + 3);   //11
      this.indices.push(8 + 4*i + 2);   // 10
    }

    //--- Texture Coordinates

    /*this.texCoords.push(0.5, 0.67);   // Vertice 0
    this.texCoords.push(0.5, 1.0);    // Vertice 1
    this.texCoords.push(0.25, 1.0);   // Vertice 2
    this.texCoords.push(0.25, 0.67);  // Vertice 3
    this.texCoords.push(0.25, 0.33);  // Vertice 4
    this.texCoords.push(0.5, 0.0);    // Vertice 5
    this.texCoords.push(0.25, 0.0);   // Vertice 6
    this.texCoords.push(0.25, 0.33);  // Vertice 7

    this.texCoords.push(0.5, 0.67);   // Vertice 0
    this.texCoords.push(0.75, 0.67);  // Vertice 1
    this.texCoords.push(0.0, 0.67);   // Vertice 2
    this.texCoords.push(0.25, 0.67);  // Vertice 3
    this.texCoords.push(0.25, 0.33);  // Vertice 4
    this.texCoords.push(0.75, 0.33);  // Vertice 5
    this.texCoords.push(0.0, 0.33);   // Vertice 6
    this.texCoords.push(0.25, 0.33);  // Vertice 7

    this.texCoords.push(0.5, 0.67);   // Vertice 0
    this.texCoords.push(0.75, 0.67);  // Vertice 1
    this.texCoords.push(1.0, 0.67);   // Vertice 2
    this.texCoords.push(0.25, 0.67);  // Vertice 3
    this.texCoords.push(0.25, 0.33);  // Vertice 4
    this.texCoords.push(0.75, 0.33);  // Vertice 5
    this.texCoords.push(1.0, 0.33);   // Vertice 6
    this.texCoords.push(0.25, 0.33);  // Vertice 7*/

    Array.prototype.push.apply(this.texCoords,
      [0.5, 1.0,	//0 - Face de Baixo
      0.5, 0.67, 	//1 - Face de Baixo
      0.25, 0.67,	//2 - Face de Baixo
      0.25, 1.0,  //3 - Face de Baixo
      0.5, 0.0,   //4 - Face de Cima
      0.5, 0.33,  //5 - Face de Cima
      0.25, 0.33, //6 - Face de Cima
      0.25, 0.0,  //7 - Face de Cima
      0.75, 0.67,	//0 - Face da Direita
      0.5, 0.67,	//1 - Face da Direita
      0.5, 0.33,  //5 - Face da Direita
      0.75, 0.33, //4 - Face da Direita
      0.5, 0.67,	//1 - Face de Trás
      0.25, 0.67,	//2 - Face de Trás
      0.25, 0.33, //6 - Face de Trás
      0.5, 0.33,  //5 - Face de Trás
      0.25, 0.67,	//2 - Face da Esquerda
      0.0, 0.67,  //3 - Face da Esquerda
      0.0, 0.33,  //7 - Face da Esquerda
      0.25, 0.33, //6 - Face da Esquerda
      1.0, 0.67,  //3 - Face da Frente
      0.75, 0.67,	//0 - Face da Frente
      0.75, 0.33, //4 - Face da Frente
      1.0, 0.33]  //7 - Face da Frente
    );

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}