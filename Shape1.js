class Shape1 extends GameObject{
    constructor(container, src, x, y, width, height, bg){
        super(container, src, x, y, width, height, bg);
        
        this.cellArray=[];

        /*좌표가 아닌 배열을 기준으로 그림을 그리자 (층, 호)*/
        /*
             □                   
        □□□□
                                 (1,3) 
        (2,0),(2,1),(2,2),(2,3)

        [원본]
           □ □ (0,0) (0,1)                    
              □          (1,1)
              □          (2,1)
              □          (3,1)

        [예측값]
        □ □ (x-1,y-3) (x-2,y-2)                    
          □             (x-1,y-1)
          □             (x,y)
          □             (x+1,y+1)

        [원본]
        (1,0),(1,1),(1,2),(1,3)
        (2,0)
        
        □ □ □ □
        □

        [예측값]
        (x+1,y-1),(x,y),(x-1,y+1),(x-2,y+2)
        (x+2,y)
        □ □ □ □
        □

        [원본]
        □    (0,0)
        □    (1,0)
        □    (2,0)
        □ □ (3,0)(3,1)                 

        [예측값]
        □    (+1, y-3)
        □    (x,y-2)
        □    (x+1,y-1)
        □ □ (x+2,y)(x+1,y+1)                 
        */

        
    }
    createCell(){
        for(let i=0;i<4;i++){
            let cell = new Cell(this.container, "", this.x, this.y,25,25, "red");
        }
    }
        
}