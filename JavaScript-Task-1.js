let myCourse = ["php","html","js", "css", "nodejs"];
let name = "Iyadi Oluwaseun";
let displayRes = [];


console.log(name);

if (myCourse.length % 2 == 0){
  
    for(let i = 0; i < 200; i += 2){
        displayRes.push(i);
    
    }
    console.log(displayRes);
} 

else
{
    for(let i = 1; i < 200; i += 2){
        displayRes.push(i);
        
    }
    console.log(displayRes);
}