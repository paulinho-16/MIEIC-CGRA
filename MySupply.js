const SupplyStates = {
  INACTIVE : 0,
  FALLING : 1,
  LANDED : 2
};

/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MySupply extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
    this.chest = new MyChest(this.scene);
    this.landedChest = new MyLandedChest(this.scene);
    this.state = SupplyStates.INACTIVE;
    this.position = [0,28.0,0];
    this.previous=0;
    this.deltaTime=0;
    this.fallSpeed= 28.0 / 3.0;
  }

  update(t)
  {
    this.deltaTime = (t - this.previous) / 1000;
    this.previous = t;
    if (this.state == SupplyStates.FALLING)
    {
      this.position[1] = this.position[1] - (this.fallSpeed*this.deltaTime);
      if (this.position[1] <= 0.5)
        this.land();
    }
    if (this.state == SupplyStates.FALLING || this.state == SupplyStates.LANDED)
      this.display();
  }

  drop(dropPosition)
  {
    this.state = SupplyStates.FALLING;
    this.position[0] = dropPosition[0];
    //this.position[1] = dropPosition[1];
    this.position[2] = dropPosition[2];
  }

  land()
  {
    this.position[1]=0.5;
    this.state = SupplyStates.LANDED;
  }

  reset() {
    this.state = SupplyStates.INACTIVE;
    this.position = [0,28.0,0];
  }

  display() {
    if (this.state == SupplyStates.INACTIVE)
      return;

    this.scene.pushMatrix();
    this.scene.translate(this.position[0],this.position[1],this.position[2]);
    if (this.state == SupplyStates.FALLING)
      this.chest.display();
    else if (this.state == SupplyStates.LANDED)
      this.landedChest.display();
    this.scene.popMatrix();
  }
}