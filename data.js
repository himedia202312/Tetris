shapeAllArray=[]; //모든 종류의 도형을 담을 배열 
brickArray=[];//도형을 이루는 세부 BoxbrickArray
brickCopyArray=[]; //도형을 이루는 세부 대칭 Box 

/*-----------------------------------------------------------------------------
Type 1 도형  4가지 각도별 모습 정의
-----------------------------------------------------------------------------*/
//Type1 도형의 0 도 모습
brickArray.push([
    new Brick(1,3), 
    new Brick(2,3), 
    new Brick(2,2), 
    new Brick(2,1), 
    new Brick(2,0)
]);

//Type1 도형의 -90 도 모습
brickArray.push([
    new Brick(brickArray[0][0].row-1 , brickArray[0][0].col-2 ), 
    new Brick(brickArray[0][1].row-2 , brickArray[0][1].col-1 ), 
    new Brick(brickArray[0][2].row-1 , brickArray[0][2].col ), 
    new Brick(brickArray[0][3].row , brickArray[0][3].col+1 ), 
    new Brick(brickArray[0][4].row+1 ,brickArray[0][4].col+2)            
]);

//Type1 도형의 -180 도 모습
brickArray.push([
    new Brick(brickArray[1][0].row+2 ,brickArray[1][0].col-1 ), 
    new Brick(brickArray[1][1].row+1 ,brickArray[1][1].col-2 ), 
    new Brick(brickArray[1][2].row , brickArray[1][2].col-1 ), 
    new Brick(brickArray[1][3].row-1 ,brickArray[1][3].col ), 
    new Brick(brickArray[1][4].row-2 ,brickArray[1][4].col+1 )            
]);

//Type1 도형의 -270 도 모습
brickArray.push([
    new Brick(brickArray[2][0].row+1 ,brickArray[2][0].col+2 ), 
    new Brick(brickArray[2][1].row+2 ,brickArray[2][1].col+1 ), 
    new Brick(brickArray[2][2].row+1 ,brickArray[2][2].col ), 
    new Brick(brickArray[2][3].row , brickArray[2][3].col-1 ), 
    new Brick(brickArray[2][4].row-1 ,brickArray[2][4].col-2 )            
]);


/*-----------------------------------------------------------------------------
Type 1 도형의 대칭 도형 만들기
-----------------------------------------------------------------------------*/
//Type1 도형의 0 도 모습 (열대칭)
let arr=[];
for(let i=0;i<brickArray[0].length;i++){
    let brick = new Brick(brickArray[0][i].row , getVerticalSymmetry(4, brickArray[0][i].col));
    arr.push(brick);
}
brickCopyArray.push(arr);

arr=[];
//Type1 도형의 -90 도 모습 (행대칭)
for(let i=0;i<brickArray[1].length;i++){
    let brick = new Brick(getHorizontalSymmetry(4, brickArray[1][i].row) , brickArray[1][i].col);
    arr.push(brick);
}
brickCopyArray.push(arr);


//Type1 도형의 -180 도 모습 (열 대칭)
arr=[];
for(let i=0;i<brickArray[2].length;i++){
    let brick = new Brick(brickArray[2][i].row , getVerticalSymmetry(4, brickArray[2][i].col));
    arr.push(brick);
}
brickCopyArray.push(arr);


//Type1 도형의 -270 도 모습 (행대칭)
arr=[];
for(let i=0;i<brickArray[1].length;i++){
    let brick = new Brick(getHorizontalSymmetry(4, brickArray[3][i].row) , brickArray[3][i].col);
    arr.push(brick);
}
brickCopyArray.push(arr);

//color, velRow, velCol, selectedShapeIndex
shapeAllArray.push(new Shape(brickArray, "yellow", 0, 0,)); //완성된 Type1 도형 담기
shapeAllArray.push(new Shape(brickCopyArray, "green", 0, 0)); //완성된 Type1 대칭 도형 담기