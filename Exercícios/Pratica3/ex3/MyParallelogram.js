/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.normals = [];

		// Defining the vertices:
    /*for (let i = 0 ; i < 2 ; i++) {
      Array.prototype.push.apply(this.vertices,
        [0, 0, 0,	//0
				1, 0, 0,	//1
				1, 1, 0,	//2
				2, 0, 0,  //3
				2, 1, 0,  //4
				3, 1, 0]  //5
      );
		}*/
		
		// Defining the vertices:
		for (let i = 0 ; i < 2 ; i++) {
      Array.prototype.push.apply(this.vertices,
        [0, 0, 0,	//0
				1, 1, 0,	//1
				2, 0, 0,  //2
				3, 1, 0]  //3
			);
		}

		// Defining the normals:
		for (let j = 0 ; j < 4 ; j++) {
			this.normals.push(0,0,1);			
		}

		for (let j = 0 ; j < 4 ; j++) {
			this.normals.push(0,0,-1);		
		}

		//Counter-clockwise reference of vertices
		/*this.indices = [
      0, 3, 2,
      3, 5, 2,
      2, 3, 0,
      2, 5, 3
		];*/

		//Counter-clockwise reference of vertices
		this.indices = [
      0, 2, 1,
      1, 2, 3,
      1, 2, 0,
      3, 2, 1
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

