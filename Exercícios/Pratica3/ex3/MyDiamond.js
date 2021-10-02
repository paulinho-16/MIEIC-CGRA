/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.normals = [];

		// Defining the vertices:
		this.vertices = [
			 -1, 0, 0,	//0
				0, -1, 0,	//1
				0, 1, 0,	//2
				1, 0, 0 	//3
		];
	
		// Defining the normals:
		for (let j = 0 ; j < 4 ; j++) {
			this.normals.push(0,0,1);
		}

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

