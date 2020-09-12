//this is the superclass Entity --> is a virtual class

/********************************************************/

export class Entity{
  constructor(HP, xloc, yloc, AP, defence, speed, jumpHeight){
    this._HP = HP;
    this._x = xloc;
    this._y = yloc;
    this._AP = AP;
    this._defence = defence;
    this._speed = speed;
    this._jumpHeight = jumpHeight;
  }
  
  move(){
    this._x = this._x + this.speed;
  }
  
  //matt helppp pysicssss
  jump(){
  }
  
  attack(opponent){
    opponent.takeDamage(this._AP);
  }
  
  takeDamage(damage){
    this._HP = this._HP - (damage/2);
  }
  
  checkHP(){
    if(this._HP =< 0){
      this.die();
    }
  }
  
  die(){
    //trigger death animation
    
  }
}
