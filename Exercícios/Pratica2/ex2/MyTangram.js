/**
 * MyTangram
 * @constructor
 * @param this.scene - Reference to Mythis.Scene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene.diamond = new MyDiamond(this.scene);
        this.scene.triangle = new MyTriangle(this.scene); 
        this.scene.parallelogram = new MyParallelogram(this.scene);
        this.scene.triangleSmall = new MyTriangleSmall(this.scene);
        this.scene.triangleSmall2 = new MyTriangleSmall(this.scene);
        this.scene.triangleBig = new MyTriangleBig(this.scene);
        this.scene.triangleBig2 = new MyTriangleBig(this.scene);
    }
    
    display()
    {
        var sca = [this.scene.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scene.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scene.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var tl = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -Math.sqrt(2)-0.24, 1-0.24, 0.0, 1.0];
        this.scene.multMatrix(sca);
    

    // -- Head
        
    this.scene.pushMatrix();
    this.scene.setDiffuse(0, 1, 0, 1.0);
    this.scene.multMatrix(tl);
    this.scene.diamond.display();
    this.scene.popMatrix();

    // -- Neck
    this.scene.pushMatrix();
    this.scene.setDiffuse(1, 1, 0, 1.0);
    this.scene.translate(-Math.sqrt(2),0,0);
    this.scene.rotate(Math.PI/4,0,0,1);
    this.scene.scale(1 , -1, 1);
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    // -- Front paws
    this.scene.pushMatrix();
    this.scene.setDiffuse(1, 0.61, 0.81, 1.0);
    this.scene.translate(Math.sqrt(2),0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.scene.triangle.display();
    this.scene.popMatrix();


    // -- Back
    this.scene.pushMatrix();
    this.scene.setDiffuse(0, 0.60, 1, 1.0);
    this.scene.translate(Math.sqrt(2),-(2-Math.sqrt(2)),0);
    this.scene.rotate(-Math.PI/2,0,0,1);
    this.scene.triangleBig.display();
    this.scene.popMatrix();


    // -- Tail
    this.scene.pushMatrix();
    this.scene.setDiffuse(1, 0.60, 0, 1.0);
    this.scene.translate(2,-2,0);
    this.scene.rotate(-3*Math.PI/4,0,0,1);
    this.scene.triangleBig2.display();
    this.scene.popMatrix();


    // -- Right ear
    this.scene.pushMatrix();
    this.scene.setDiffuse(0.58, 0.31, 0.74, 1.0);
    this.scene.translate(-Math.sqrt(2)-0.24+1,2-0.24,0);
    this.scene.rotate(Math.PI/2,0,0,1);
    this.scene.triangleSmall.display();
    this.scene.popMatrix();


    // -- Left ear
    this.scene.pushMatrix();
    this.scene.setDiffuse(1, 0.11, 0.11, 1.0);
    this.scene.translate(-Math.sqrt(2)-0.24-1,2-0.24,0);
    this.scene.rotate(3*Math.PI/2,0,0,1);
    this.scene.triangleSmall2.display();
    this.scene.popMatrix();
    }
}

