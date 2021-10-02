/**
 * Cube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Cube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
            1, 0, 1,	//2
            0, 0, 1,    //3
            1, 1, 0,    //4
            0, 1, 0     //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            2, 1, 0,
            0, 3, 2,
            0, 1, 2,
            2, 3, 0,
            0, 1, 4,
            4, 1, 0,
            0, 4, 5,
            0, 1, 4,
            5, 4, 0

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}