const button = document.querySelector('button');
function arrayMessage(){
    let input = document.querySelector('input').value;
    alert(input);
}
button.addEventListener('click', arrayMessage);