class Car {
    constructor(c,m,y){
        this.company=c;
        this.model=m;
        this.year=y;


    }
    getDescription(){
        return `this is a ${this.year} ${this.company} ${this.model} .`
    }
}

let aCar=new Car("suzuki",2008,"Alto");
const description=aCar.getDescription();
console.log(description);
