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