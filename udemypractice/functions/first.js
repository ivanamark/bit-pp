/*Make a program that will return the length of two computed sentences
*/
function getPhrase(phrase,another){
    var l=phrase.length;
    if(typeof another !== "undefined"){
        l+=another.length;
    }
    function printBoth(){
        console.log(phrase,another);
        
    }
    return l;
}
var p1="This a slightly longer sentence.";
var p2="This is a shorter sentence";
var computed=getPhrase(p1,p2);
var computed1=getPhrase(p1=p2);
console.log(computed);
console.log(computed1);


function getLength(phrase1,phrase2){
    if(typeof phrase1 && typeof phrase2 ==="string"){
        var result=phrase1+phrase2;
    }
    
    return result.length;
}
var computed2=getLength("Ana voli Milovana","Kad bi svi ljudi na svetu");
console.log(computed2);
//nested functions
function nestedPhrase(first,second){
    var l=first.length;
    if(typeof first!=="undefined"){
        l+=second.length;
    }
    function printBoth1(){
        return first+" "+second;
    }
    return printBoth1();

}
var a1="trla baba lan";
var a2="da joj prodje dan";
var computedresult=nestedPhrase(a1,a2);
console.log(computedresult);

/*using an object as parameters*/
function getPhrase3(params){
    var k=params.sentence1.length;
    if(typeof params.sentence2!=="undefined"){
        k+=params.sentence2.length;
    }
    return k;
}
var m1="bla bla bla";
var m2="tra la la";
var computedObj=getPhrase3({sentence1:m1,sentence2:m2});
console.log(computedObj);
