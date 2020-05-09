/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */

const SupplyStates = {
  INACTIVE : 0,
  FALLING : 1,
  LANDED : 2
};

class MySupply extends CGFobject {
	constructor(scene) {
    super(scene);
    this.quad = new MyQuad(this.scene);
    this.chest = new MyChest(this.scene);
    this.state = SupplyStates.INACTIVE;
    this.height=30.0
    this.position = [0,0,0];
  }

  update(scene)
  {
    if (this.state==SupplyStates.FALLING)
    {
      this.height=this.height-0.5;
      if (this.height==0.5)
        this.land();
    }
    if (this.state==SupplyStates.FALLING || this.state==SupplyStates.LANDED)
      this.display();
  }

  drop(dropPosition)
  {
    this.state = SupplyStates.FALLING;
    this.position[0] = dropPosition[0];
    this.position[1] = dropPosition[1];
    this.position[2] = dropPosition[2];
  }

  land()
  {
    this.state=SupplyStates.LANDED;
  }

  display() {
    this.scene.pushMatrix();
    this.scene.translate(this.position[0],this.height,this.position[2]);
    this.chest.display();
    this.scene.popMatrix();
  }
}