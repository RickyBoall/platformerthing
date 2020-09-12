import Entity from 'Entity.js'
export class Player extends Entity {
    constructor(name){
        /***********************************************
         HP=30
         xloc=0
         yloc=0
         AP=5
         defence=0
         speed=2
         jumpHeight=2
         **********************************************/
        super(30, 0, 0, 5, 0, 2, 2);
        this.name = name;
    }
}
