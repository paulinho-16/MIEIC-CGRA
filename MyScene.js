/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 16);
        this.cubeMap = new MyCubeMap(this);
        this.vehicle = new MyVehicle(this);
        this.terrain = new MyTerrain(this);
        this.supplies = [new MySupply(this), new MySupply(this), new MySupply(this), new MySupply(this), new MySupply(this)];
        this.speedFactor = 1.0;
        this.scaleFactor = 1.0;
        this.selectedTexture = 1;
        this.nSuppliesDelivered = 0;  

        //Initialize Textures
        this.earthTexture = new CGFtexture(this, 'images/earth.jpg');
        this.default = new CGFtexture(this, 'images/cubemap.png');
        this.plain = new CGFtexture(this, 'images/NewCubeMap.png');
        this.forest = new CGFtexture(this, 'images/Forest.png');
        this.sunset = new CGFtexture(this, 'images/Sunset.png');
        this.mountain = new CGFtexture(this, 'images/Mountain.png');

        //Arrays of textures and Textures ID
        this.textures = [this.default, this.plain, this.forest, this.sunset, this.mountain];
        this.textureIds = { 'Default': 0, 'Plain': 1, 'Forest' : 2, 'Sunset' : 3, 'Mountain' : 4 };

        //Initialize Materials
        this.material = new CGFappearance(this);
		this.material.setAmbient(0.3, 0.3, 0.3, 1);
		this.material.setDiffuse(0.7, 0.7, 0.7, 1);
		this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(120);
        this.material.setTexture(this.earthTexture);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    
        this.mapMaterial = new CGFappearance(this);
        this.mapMaterial.setAmbient(1.0, 1.0, 1.0, 1);
		this.mapMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
		this.mapMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.mapMaterial.setShininess(120);
        this.mapMaterial.setTexture(this.plain);
        this.mapMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.defaultMaterial = new CGFappearance(this);
        this.defaultMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setShininess(10.0);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.displayNormals = false;
        this.displayCubeMap = true;
        this.displayVehicle = true;
        this.displayTerrain = true;
        this.selectedTexture = 1;

        this.autopilotON = false;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {         // Zoomed Camera: 0.4 0.1 500
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(100, 60, 100), vec3.fromValues(0, 20, 0));
    }
    setDefaultAppearance() {
        this.defaultMaterial.apply();
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
        this.checkKeys();
        //if (!this.autopilotON)
        //  this.vehicle.previous = t;
        this.vehicle.update(t);
        for (var i = 0; i < 5; i++)
            this.supplies[i].update(t);
    }
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;

        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            if (!this.autopilotON)
            {
                text += " W ";
                this.vehicle.accelerate(0.1*this.speedFactor);
                keysPressed = true;
            }
        }
        if (this.gui.isKeyPressed("KeyA")) {
            if (!this.autopilotON)
            {    
                text += " A ";
                this.vehicle.turn(Math.PI/8);
                keysPressed = true;
            }
        }
        if (this.gui.isKeyPressed("KeyS")) {
            if (!this.autopilotON)
            {    
                text += " S ";
                this.vehicle.accelerate(-0.1*this.speedFactor);
                keysPressed = true;
            }
        }
        if (this.gui.isKeyPressed("KeyD")) {
            if (!this.autopilotON)
            {    
                text += " D ";
                this.vehicle.turn(-Math.PI/8);
                keysPressed = true;
            }
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.vehicle.reset();
            for (var i = 0 ; i < 5 ; i++)
                this.supplies[i].reset();
            this.nSuppliesDelivered = 0;
            this.autopilotON = false;
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            if (!this.autopilotON) {
                text += " P ";
                this.vehicle.startAutoPilot();
                keysPressed = true;
                this.autopilotON = true;
            }
            else
            {
                this.vehicle.autopilot=false;
                this.autopilotON = false;
            }
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            for (let i=0;i<5;i++)
            {
                if (this.supplies[i].state == SupplyStates.INACTIVE)
                {
                    this.supplies[i].drop(this.vehicle.position);
                    break;
                }
            }
            this.nSuppliesDelivered++;
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
    }

    updateAppliedTexture() {
        this.mapMaterial.setTexture(this.textures[this.selectedTexture]);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //this.setDefaultAppearance();
        this.material.apply();

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates

        if (this.displaySphere)
            this.incompleteSphere.display();
        if (this.displayCylinder)
            this.cylinder.display();
        if (this.displayNormals)
            this.cylinder.enableNormalViz();
        else
            this.cylinder.disableNormalViz();

        if (this.displayVehicle) {
            this.vehicle.display();
        }
        
        this.setDefaultAppearance();
        this.setGlobalAmbientLight(0.6,0.6,0.6,1);

        for (var i = 0 ; i < 5 ; i++)
            this.supplies[i].display();

        if (this.displayCubeMap)
            this.cubeMap.displayCubeMap();

        if (this.displayTerrain)
            this.terrain.display();

        // ---- END Primitive drawing section
    }
}