/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyFlag extends CGFobject {
	constructor(scene, nrDivs, minS, maxS, minT, maxT) {
		super(scene);
		// nrDivs = 1 if not provided
		nrDivs = typeof nrDivs !== 'undefined' ? nrDivs : 1;
		this.nrDivs = nrDivs;
		this.patchLength = 1.0 / nrDivs;
		this.minS = minS || 0;
		this.maxS = maxS || 1;
		this.minT = minT || 0;
		this.maxT = maxT || 1;
		this.q = (this.maxS - this.minS) / this.nrDivs;
		this.w = (this.maxT - this.minT) / this.nrDivs;
    this.initBuffers();
    this.initTextures(scene);
    this.initMaterials(scene);
	}
	initBuffers() {
		// Generate vertices, normals, and texCoords
		this.vertices = [];
		this.normals = [];
		this.texCoords = [];
		var yCoord = 0.5;
		for (var j = 0; j <= this.nrDivs; j++) {
			var xCoord = -0.5;
			for (var i = 0; i <= this.nrDivs; i++) {
				this.vertices.push(xCoord, yCoord, 0);
				this.normals.push(0, 0, 1);
				this.texCoords.push(this.minS + i * this.q, this.minT + j * this.w);
				xCoord += this.patchLength;
			}
			yCoord -= this.patchLength;
		}
		// Generating indices
		this.indices = [];

		var ind = 0;
		for (var j = 0; j < this.nrDivs; j++) {
			for (var i = 0; i <= this.nrDivs; i++) {
				this.indices.push(ind);
				this.indices.push(ind + this.nrDivs + 1);
				ind++;
			}
			if (j + 1 < this.nrDivs) {
				this.indices.push(ind + this.nrDivs);
				this.indices.push(ind);
			}
    }
    
    // APAGAR
    ind = 0;
		for (var j = 0; j < this.nrDivs; j++) {
			for (var i = 0; i <= this.nrDivs; i++) {
				this.indices.push(ind + this.nrDivs + 1);
				this.indices.push(ind);
				ind++;
			}
			if (j + 1 < this.nrDivs) {
				this.indices.push(ind);
				this.indices.push(ind + this.nrDivs);
			}
    }
    //
		this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
		this.initGLBuffers();
  }
  
  initTextures(scene) {
    this.tntTexture = new CGFtexture(scene, 'images/TNT.jpg');
  }

  initMaterials(scene) {
    this.flagMaterial = new CGFappearance(scene);
    this.flagMaterial.setAmbient(1.0, 1.0, 1.0, 1);
    this.flagMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
    this.flagMaterial.setSpecular(0.0, 0.0, 0.0, 1);
    this.flagMaterial.setShininess(10.0);
    this.flagMaterial.setTexture(this.tntTexture);
    this.flagMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  displayFlag() {
    this.scene.pushMatrix();
    this.flagMaterial.apply();
    this.display();
    this.scene.popMatrix();
  }

	setFillMode() { 
		this.primitiveType=this.scene.gl.TRIANGLE_STRIP;
	}

	setLineMode() 
	{ 
		this.primitiveType=this.scene.gl.LINES;
  };
}