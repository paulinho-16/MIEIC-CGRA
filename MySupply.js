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
  }

  update() {

  }

  display() {
    this.chest.display();
  }
}