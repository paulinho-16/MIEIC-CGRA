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
        this.scene.triangleSmall = new MyTriangleSmall(this.scene, 1);
        this.scene.triangleSmall2 = new MyTriangleSmall(this.scene, 2);
        this.scene.triangleBig = new MyTriangleBig(this.scene, 1);
        this.scene.triangleBig2 = new MyTriangleBig(this.scene, 2);
        this.initMaterials();
    }

    initMaterials() {
        // Texture Material
        this.textureMaterial = new CGFappearance(this.scene);
        this.textureMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.textureMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.textureMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.textureMaterial.setShininess(10.0);
        this.textureMaterial.loadTexture('images/tangram.png');
        this.textureMaterial.setTextureWrap('REPEAT', 'REPEAT');
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
    this.textureMaterial.apply();
    this.scene.diamond.display();
    this.scene.popMatrix();

    // -- Neck
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2),0,0);
    this.scene.rotate(Math.PI/4,0,0,1);
    this.scene.scale(1 , -1, 1);
    this.textureMaterial.apply();
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    // -- Front paws
    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2),0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.textureMaterial.apply();
    this.scene.triangle.display();
    this.scene.popMatrix();


    // -- Back
    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2),-(2-Math.sqrt(2)),0);
    this.scene.rotate(-Math.PI/2,0,0,1);
    this.textureMaterial.apply();
    this.scene.triangleBig.display();
    this.scene.popMatrix();


    // -- Tail
    this.scene.pushMatrix();
    this.scene.translate(2,-2,0);
    this.scene.rotate(-3*Math.PI/4,0,0,1);
    this.textureMaterial.apply();
    this.scene.triangleBig2.display();
    this.scene.popMatrix();


    // -- Right ear
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2)-0.24+1,2-0.24,0);
    this.scene.rotate(Math.PI/2,0,0,1);
    this.textureMaterial.apply();
    this.scene.triangleSmall.display();
    this.scene.popMatrix();


    // -- Left ear
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2)-0.24-1,2-0.24,0);
    this.scene.rotate(3*Math.PI/2,0,0,1);
    this.textureMaterial.apply();
    this.scene.triangleSmall2.display();
    this.scene.popMatrix();
    }
}

