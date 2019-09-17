//document.querySelector('html').onclick = function() {
//    alert('����ң������ۡ�');
//}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla ����ˣ�' + name + '��';
}

function setUserName() {
  let myName = prompt('�������������');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;