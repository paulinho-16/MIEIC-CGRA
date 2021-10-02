/**
 * MyTangram
 * @constructor
 * @param this.scene - Reference to MyScene object
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
        this.initMaterials();
    }

    initMaterials() {
        // Red
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1, 0.11, 0.11, 1.0);
        this.red.setDiffuse(0, 0, 0, 1.0);
        this.red.setSpecular(1, 1, 1, 1.0);
        this.red.setShininess(10.0);

        // Green
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 1, 0, 1.0);
        this.green.setDiffuse(0, 0, 0, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(10.0);

        // Purple
        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.58, 0.31, 0.74, 1.0);
        this.purple.setDiffuse(0, 0, 0, 1.0);
        this.purple.setSpecular(1, 1, 1, 1.0);
        this.purple.setShininess(10.0);

        // Yellow
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(1, 1, 0, 1.0);
        this.yellow.setDiffuse(0, 0, 0, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(10.0);

        // Pink
        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(1, 0.61, 0.81, 1.0);
        this.pink.setDiffuse(0, 0, 0, 1.0);
        this.pink.setSpecular(1, 1, 1, 1.0);
        this.pink.setShininess(10.0);

        // Blue
        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0, 0.60, 1, 1.0);
        this.blue.setDiffuse(0, 0, 0, 1.0);
        this.blue.setSpecular(1, 1, 1, 1.0);
        this.blue.setShininess(10.0);

        // Brown
        this.brown = new CGFappearance(this.scene);
        this.brown.setAmbient(1, 0.60, 0, 1.0);
        this.brown.setDiffuse(0, 0, 0, 1.0);
        this.brown.setSpecular(1, 1, 1, 1.0);
        this.brown.setShininess(10.0);
    }

    enableNormalViz() {
        this.scene.diamond.enableNormalViz();
        this.scene.triangle.enableNormalViz();
        this.scene.parallelogram.enableNormalViz();
        this.scene.triangleSmall.enableNormalViz();
        this.scene.triangleSmall2.enableNormalViz();
        this.scene.triangleBig.enableNormalViz();
        this.scene.triangleBig2.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.diamond.disableNormalViz();
        this.scene.triangle.disableNormalViz();
        this.scene.parallelogram.disableNormalViz();
        this.scene.triangleSmall.disableNormalViz();
        this.scene.triangleSmall2.disableNormalViz();
        this.scene.triangleBig.disableNormalViz();
        this.scene.triangleBig2.disableNormalViz();
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
    this.scene.multMatrix(tl);
    this.scene.customMaterial.apply();
    this.scene.diamond.display();
    this.scene.popMatrix();

    // -- Neck
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2),0,0);
    this.scene.rotate(Math.PI/4,0,0,1);
    this.scene.scale(1 , -1, 1);
    this.yellow.apply();
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    // -- Front paws
    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2),0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.pink.apply();
    this.scene.triangle.display();
    this.scene.popMatrix();


    // -- Back
    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2),-(2-Math.sqrt(2)),0);
    this.scene.rotate(-Math.PI/2,0,0,1);
    this.blue.apply();
    this.scene.triangleBig.display();
    this.scene.popMatrix();


    // -- Tail
    this.scene.pushMatrix();
    this.scene.translate(2,-2,0);
    this.scene.rotate(-3*Math.PI/4,0,0,1);
    this.brown.apply();
    this.scene.triangleBig2.display();
    this.scene.popMatrix();


    // -- Right ear
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2)-0.24+1,2-0.24,0);
    this.scene.rotate(Math.PI/2,0,0,1);
    this.purple.apply();
    this.scene.triangleSmall.display();
    this.scene.popMatrix();


    // -- Left ear
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2)-0.24-1,2-0.24,0);
    this.scene.rotate(3*Math.PI/2,0,0,1);
    this.red.apply();
    this.scene.triangleSmall2.display();
    this.scene.popMatrix();
    }
}

