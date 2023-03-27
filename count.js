let text;
let words;
var texts = document.getElementById("textbox");
texts.addEventListener ("input", function(e){
   text = this.value.length;
   document.getElementById("char").innerText= text;
   // Give this let variable. 
   // First properties is trim().  Do you frist element and last element text types in the value but trim() properties not show element
   // Senond time is split(" "). This properties text inside space between all space through in tha value
   // Third time is filter. This peroperties is not type text in value 'Zero'
    words = this.value.trim().split(" ").filter(function(elm){
        return elm != "";
    }).length;
    // console.log(words);
    document.getElementById("word").innerText = words;    
})
let btnclear = document.getElementById("clear");
btnclear.addEventListener ("click", function(e){
    text=0;
    words=0;
    document.getElementById("char").innerText= text;
    document.getElementById("word").innerText = words; 
}

