/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, -1, 0,	 //0
			-1, 1, 0,	 //1
			-1, -1, 0, //2
		];

		this.normals = [];
		
		// Defining the normals:
		for (let j = 0 ; j < 3 ; j++) {
			this.normals.push(0,0,1);
		}

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

