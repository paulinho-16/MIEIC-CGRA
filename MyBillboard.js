/**
* MyBillboard
* @constructor
*/
class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene=scene;
        this.plane = new MyPlane(this.scene,50);
        this.planeholder = new MyCylinder(this.scene,20);
        this.initTextures();
        this.initMaterials();
        this.initShaders();
    }

    update() {
        this.flagShader.setUniformsValues({ supplies : this.scene.nsuppliesdelivered });
    }

    initTextures() {
        this.billboardTexture = new CGFtexture(this.scene, "images/billboard.png");
      }
    
      initMaterials() {
        this.billboardMaterial = new CGFappearance(this.scene);
        this.billboardMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.billboardMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.billboardMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.billboardMaterial.setShininess(10.0);
        this.billboardMaterial.setTexture(this.billboardTexture);
        this.billboardMaterial.setTextureWrap('REPEAT', 'REPEAT');
      }

      initShaders() {
        this.billboardShader = new CGFshader(this.scene.gl, 'shaders/flag.vert', 'shaders/flag.frag');
      }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-7,0,-7);
        this.scene.rotate(Math.PI/4,0,1,0);

        // Billboard
        this.scene.pushMatrix();
        this.billboardMaterial.apply();
        this.scene.translate(0,1.5,0);
        this.scene.scale(2,1,1);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.defaultMaterial.apply();

        // Billboard(Back)
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,1.5,0);
        this.scene.scale(2,1,1);
        this.plane.display();
        this.scene.popMatrix();

        // First Holder
        this.scene.pushMatrix();
        this.scene.translate(-0.95,0,0);
        this.scene.scale(0.05,1,0.01);
        this.planeholder.display();
        this.scene.popMatrix();

        // Secong Holder
        this.scene.pushMatrix();
        this.scene.translate(0.95,0,0);
        this.scene.scale(0.05,1,0.01);
        this.planeholder.display();
        this.scene.popMatrix();

        // Supplies Bar
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.billboardShader);
        this.scene.translate(0,1.3,0.01);
        this.scene.scale(1.5,0.2,1);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();

        this.scene.popMatrix();
        
        
    }
}


