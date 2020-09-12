//this is the superclass Entity --> is a virtual class

/********************************************************/

class Entity{
  constructor(HP, xloc, yloc, AP, defence, speed, jumpHeight){
    this.HP = HP;
    this.x = xloc;
    this.y = yloc;
    this.AP = AP;
    this.defence = defence;
    this.speed = speed;
    this.jumpHeight = jumpHeight;
  }
  
  move(){
    this.x = this.x + this.speed;
  }
  
  //matt helppp pysicssss
  jump(){
  }
  
  attack(opponent){
    opponent.HP = opponent.HP - (this.attack - (opponent.defense/2));
  }
  
  checkHP(){
    if(this.HP =< 0){
      this.die();
    }
  }
  
  die(){
    //trigger death animation
    
  }
}
