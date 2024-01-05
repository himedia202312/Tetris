/*----------------------------------------------------
하나의 도형을 정의한다 (4가지 모습의 좌표를 갖는 배열은 brickArray 이차원배열로 넘겨받는다)
----------------------------------------------------*/
class Shape{
    
    //brickArray : 4가지 모습을 각각 표현하는 이차원 배열 
    constructor(brickArray, color, velRow, velCol){
        this.brickArray = brickArray; //4가지 모습을 띈 도형을 담게될 배열 
        this.color=color;
        this.velRow=velRow;
        this.velCol=velCol;
        this.index=0;
    }    

    clean(){
        for(let a=0;a<cellArray.length;a++){
            for(let i=0;i<cellArray[a].length;i++){

                //첫번째 타입도형의 수만큼... 
                
                for(let k=0;k<this.brickArray[0].length;k++){
                    
                    //x가 row 층, y는 호수
                    if(this.brickArray[this.index][k].row==a  &&  this.brickArray[this.index][k].col==i){
                        cellArray[a][i].div.style.background="white";
                    }
                }
            }
        }
    }

    render(){
        for(let a=0;a<cellArray.length;a++){
            for(let i=0;i<cellArray[a].length;i++){

                //첫번째 타입도형의 수만큼... 
                for(let k=0;k<this.brickArray[0].length;k++){
                    
                    //x가 row 층, y는 호수
                    if(this.brickArray[this.index][k].row==a && this.brickArray[this.index][k].col==i){
                        cellArray[a][i].div.style.background=this.color;
                    }
                }
            }
        }        
    }

    change(){
        this.clean();
        
        this.index++;
        
        if(this.index>3){
            this.index=0;
        }

        this.render();
    }

    move(){
        
        this.clean();

        for(let a=0;a<this.brickArray.length;a++){
            for(let i=0;i<this.brickArray[this.index].length;i++){

                let brick = this.brickArray[a][i];
    
                brick.row += this.velRow; //층수 증가 
                brick.col += this.velCol; //호수 증가
                console.log(brick);
            }

        }
        this.render();
    }

}