// This - на текущий элемент, указатель на самого себя.

const objectTest  = {
    property1: "value1",
    property2: "value2",
    outThisObject: function(){
        console.log(this);
    }
};

objectTest.outThisObject();

console.log(objectTest);

function Product(name, price){
    this.name = name;
    this.price = price;
    this.priceForUser = function(coef){
        return this.price + coef;
    }
}

//const product = new Procut('ball', 100)