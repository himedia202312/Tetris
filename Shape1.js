/*
        ㅁ
ㅁㅁㅁㅁ
*/
class Shape1{
    constructor(startPos, arrx, arry){
        this.index=0;

        //색이 칠해질 셀2차원 배열의 좌표 
        this.brickArray=[];

        //Type1
        this.brickArray.push([
            new Brick(1,3), 
            new Brick(2,3), 
            new Brick(2,2), 
            new Brick(2,1), 
            new Brick(2,0)
        ]);

        //Type2
        this.brickArray.push([
            new Brick(this.brickArray[0].x-1 ,this.brickArray[0]-2 ), 
            new Brick(this.brickArray[0].x-1 ,this.brickArray[0]-2 ), 
            new Brick(this.brickArray[0].x-1 ,this.brickArray[0]-2 ), 
            new Brick(this.brickArray[0].x-1 ,this.brickArray[0]-2 ), 
            new Brick(this.brickArray[0].x-1 ,this.brickArray[0]-2 )            
        ]);
        
        //Type3
        this.brickArray.push([
            new Brick(this.brickArray[1].x-1 ,this.brickArray[1]-2 ), 
            new Brick(this.brickArray[1].x-1 ,this.brickArray[1]-2 ), 
            new Brick(this.brickArray[1].x-1 ,this.brickArray[1]-2 ), 
            new Brick(this.brickArray[1].x-1 ,this.brickArray[1]-2 ), 
            new Brick(this.brickArray[1].x-1 ,this.brickArray[1]-2 )            
        ]);
        
        //Type4
        this.brickArray.push([
            new Brick(this.brickArray[2].x-1 ,this.brickArray[2]-2 ), 
            new Brick(this.brickArray[2].x-1 ,this.brickArray[2]-2 ), 
            new Brick(this.brickArray[2].x-1 ,this.brickArray[2]-2 ), 
            new Brick(this.brickArray[2].x-1 ,this.brickArray[2]-2 ), 
            new Brick(this.brickArray[2].x-1 ,this.brickArray[2]-2 )            

        ]);

        //Type5
        this.brickArray.push([
            new Brick(this.brickArray[3].x-1 ,this.brickArray[3]-2 ), 
            new Brick(this.brickArray[3].x-1 ,this.brickArray[3]-2 ), 
            new Brick(this.brickArray[3].x-1 ,this.brickArray[3]-2 ), 
            new Brick(this.brickArray[3].x-1 ,this.brickArray[3]-2 ), 
            new Brick(this.brickArray[3].x-1 ,this.brickArray[3]-2 )            
        ]);


        this.showHideBg(true);
    }        

    
    showHideBg(flag){
        /*
        for(let a=0;a<cellArray.length;a++){
            for(let i=0;i<cellArray[a].length;i++){

                for(let k=0;k<this.posArray[this.index].length;k++){
                    if(this.posArray[this.index][k][0]==a && this.posArray[this.index][k][1]==i){
                        if(flag){
                            cellArray[a][i].div.style.background="red";
                        }else{
                            cellArray[a][i].div.style.background="white";
                        }
                    }
                }
            }
        }
        */
    }

    change(){
        /*
        this.showHideBg(false);
        this.index++;
        if(this.index>3){
            this.index=0;
        }
        this.showHideBg(true);
        */
    }

    move(){

    }

}