const target = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];
let list=""
for (let i=0; i<names.length; i++) {
    list+=`<li>${names[i]}</li>`;
}
target.innerHTML=list
