let s = document.getElementById('screen');
let output = '';
let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        bt = e.target.innerText;
        if (bt == 'X') {
            bt = '*';
            output += bt;
            s.innerHTML = output;
        }
        else if (bt == 'C') {
            output = "";
            s.innerHTML = output;
        }
        else if (bt == '=') {
            s.innerHTML = eval(output);
            output = "";
        }
        else {
            output += bt;
            s.innerHTML = output;
        }
    })
}