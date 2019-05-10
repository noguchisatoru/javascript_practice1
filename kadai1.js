const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const number1 = Number(document.getElementById('fizz').value);
    const number2 = Number(document.getElementById('buzz').value);
    const maxNum = 100;
    let fizz = number1;
    let buzz = number2;
    let result = "";
    
    //出力リセット
    let domObj = document.getElementById("fizzbuzz");
    domObj.textContent = "";
    
    if(Number.isInteger(number1) && Number.isInteger(number2)){
        //整数の場合
        for(let i = 1; i < maxNum; i++){
            if(fizz === buzz){
                result += "FizzBuzz " + fizz +"<br>"
                fizz += number1;
                buzz += number2;
                
            }else if(i % fizz === 0){
                result += "Fizz " + fizz + "<br>"
                fizz += number1;
                
            }else if(i % buzz === 0){
                result += "Buzz " + buzz + "<br>"
                buzz += number2;
            }
        }
    getContent(result);
}else{
    //どちらか整数ではない場合
    result="整数値を入力してください";
    getContent(result);
        }
    }, false);

let getContent = result => {
    let divElement = document.createElement("div");
    divElement.innerHTML = result;
    let parentObj = document.getElementById("fizzbuzz");
    parentObj.appendChild(Div_Element);
}