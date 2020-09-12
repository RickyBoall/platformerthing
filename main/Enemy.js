//this is the Enemy class
import Entity from 'Entity.js'
export class Enemy() extends Entity{
  constructor(HP, xloc, yloc, AP, defence, speed, jumpHeight){
    super(HP, xloc, yloc, AP, defence, speed, jumpHeight);
  }
  
}
