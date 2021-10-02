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
    this.position = [0,10.0,0];
    this.previous = 0;
    this.deltaTime = 0;
    this.fallSpeed = 10.0 / 3.0;
  }

  update(t)
  {
    // Calculate Time Elapsed
    this.deltaTime = (t - this.previous) / 1000;
    this.previous = t;
    if (this.state == SupplyStates.FALLING)
    {
      // Decrease Supply height, land if it reached the ground
      this.position[1] = this.position[1] - (this.fallSpeed*this.deltaTime);
      if (this.position[1] <= 0.5)
        this.land();
    }
    if (this.state == SupplyStates.FALLING || this.state == SupplyStates.LANDED)
      this.display();
  }

  // Vehicle dropped the Supply
  drop(dropPosition)
  {
    this.state = SupplyStates.FALLING;
    this.position[0] = dropPosition[0];
    this.position[2] = dropPosition[2];
  }

  // The supply reached the ground
  land()
  {
    this.position[1] = 0.01;
    this.state = SupplyStates.LANDED;
  }

  // After reset, Supply becomes INACTIVE
  reset() {
    this.state = SupplyStates.INACTIVE;
    this.position = [0,10.0,0];
  }

  display() {
    // If Supply is INACTIVE, it's not displayed
    if (this.state == SupplyStates.INACTIVE)
      return;

    this.scene.pushMatrix();
    this.scene.translate(this.position[0],this.position[1],this.position[2]);
    if (this.state == SupplyStates.FALLING)   // Display FALLING Supply
      this.chest.display();
    else if (this.state == SupplyStates.LANDED) // Display LANDED Supply
      this.landedChest.display();
    this.scene.popMatrix();
  }
}