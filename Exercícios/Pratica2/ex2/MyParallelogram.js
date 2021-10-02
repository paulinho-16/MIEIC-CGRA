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
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
            1, 1, 0,	//2
            2, 0, 0,    //3
            2, 1, 0,    //4
            3, 1, 0,    //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 3, 2,
            3, 5, 2,
            2, 3, 0,
            2, 5, 3
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

