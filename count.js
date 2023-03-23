// {/* <h1>World Counter and Typing Text</h1>
//     <div id="container">
//         <textarea id="text" placeholder="This is Enter Text"></textarea>
//         <p>Count : <spam>0</spam> Words and <spam>0</spam> Characters</p> */}

var texts = document.getElementById("textbox");
texts.addEventListener ("input", function(e){
    let text = this.value.length;
   document.getElementById("char").innerHTML= text;
    let words = this.value.trim().split(" ").filter(function(elm){
        return elm != "";
    }).length;
    console.log(words);
    document.getElementById("word").innerHTML = words;
    
})