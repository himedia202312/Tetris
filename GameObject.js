/*
게임에 등장하는 모든 주체의 최상위 객체를 정의
*/
class GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container=container; //어디에 부착할지 (누구를 부모(parent)로 둘지)
        this.div=document.createElement("div");
        this.src=src; //이미지의 주소
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //css 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        if(this.src.length >1){
            this.div.style.background="url("+this.src+")";
            this.div.style.backgroundSize=this.width+"px   "+this.height+"px";
        }

        //보더적용 
        this.div.style.border="1px solid gray";
        this.div.style.boxSizing="border-box";

        //컨테이너(parent)에 부착 
        this.container.appendChild(this.div);
    }

    move(){};
}