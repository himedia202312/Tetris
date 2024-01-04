/* 도형이 색칠해질 셀을 정의한다*/
class Cell extends GameObject{
    constructor(container, src, x, y, width, height, bg){
        super(container, src, x, y, width, height, bg);

        this.bg=bg;

        if(this.src.length <=1){
            this.div.style.background=this.bg;
        }
    }    
}