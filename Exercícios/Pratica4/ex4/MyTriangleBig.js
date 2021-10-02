/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, number) {
		super(scene);
		this.initBuffers(number);
	}
	initBuffers(number) {
		this.vertices = [
			2, 0, 0,	//0
			-2, 0, 0,	//1
			0, 2, 0,	//2
		];

		this.normals = [];

		// Defining the normals:
		for (let j = 0 ; j < 3 ; j++) {
			this.normals.push(0,0,1);
		}

		// Defining Texture Coodinates
		if (number == 1) {
			this.texCoords = [
				0, 0,
				1, 0,
				0.5, 0.5
			];
		}

		if (number == 2) {
			this.texCoords = [
				1, 0,
				1, 1,
				0.5, 0.5
			];
		}

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}