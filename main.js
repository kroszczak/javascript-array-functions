
const functions =["map", "fill"];

display(functions);


function display(ftn){

    for(let i = 0; i < ftn.length; i++){
        let args_qantity = eval(`Array.prototype.${ftn[i]}.length`);
        let inputs = get_input_fields(args_qantity);
        let description = get_description(i);
        document.querySelector('#wrapper').innerHTML += `<div class = "arr_block"><h2>array.${ftn[i]}</h2><article>${description}</article><div class = "input">${inputs} <button onclick="button_click_event(${args_qantity},${i})">Submit</button></div> <div class = "output"></div></div>`;

    }
}


function get_input_fields(args){
    let string = 'array: <input type="text"></input>'; 
    for(let i=0; i < args; i++){string += ` argument ${i+1}: <input type="text"></input> `;}
    return string;
}


function get_description(line){
    const desc = [];
    fetch('./descriptions.txt')
    .then(response => response.text())
    .then(response => respone = response.split(/\n/g))
    .then(response =>   desc.push(response[line - 1]));
    return desc[0];
}


function button_click_event(q,i){
        document.querySelectorAll('.arr_block')[i].querySelector('button').addEventListener('click', () => {
            let arr = get_array(i);
            let args = get_args(q, i);
            document.querySelectorAll('.output')[i].innerHTML = (eval(`arr.${functions[i]}(${args});`));
        });
        
}


function get_array(i){
    arr = document.querySelectorAll('.arr_block')[i].querySelectorAll('input')[0].value;
    arr = arr.split(/,/);
    return arr;
}


function get_args(q, i){
    let arg = '';
    for(let j = 1; j <= q; j++){
        arg += document.querySelectorAll('.arr_block')[i].querySelectorAll('input')[j].value + ',';  
    }
    arg = arg.slice(0, -1);
    return arg;
}














