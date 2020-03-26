const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const svg = document.querySelector('#svg');
const wrapper = document.querySelector('.pod-wrap');

function render() {
    let counter = input.value;
    svg.setAttribute('viewBox', '0 0 100 ' + counter * 40);
    let quantity = 0;
    let side = counter;
    for (let i=1; i < counter; i++) {
        quantity += side;
        side++;
    }
    let center = side;
    quantity = quantity * 2;
    quantity += side;
    let html="";
    let defaultX = 50;
    let defaultY = 20;
    let line = 1;
    let renderCount = 0;
    let x = 0;
    let y = 0;
    let revers = false;
    for (let i=0; i < center; i++) {
        if (line < counter && !revers) {
            for (let k=0; k < center; k++) {
                if (renderCount < quantity) {
                    x = defaultX;
                    y = line*defaultY;
                    if (k > 0) {
                        if (k % 2 == 0) {
                            x = defaultX - 17 * (k / 2).toFixed();
                            y = line * defaultY + 10 * (k / 2).toFixed();
                        } else {
                            x = defaultX + 17 * (k / 2).toFixed();
                            y = line * defaultY + 10 * (k / 2).toFixed();
                        }
                    }
                    renderCount++;
                    html += '<use xlink:href="#pod" class="elem" transform="translate('+x+','+y+')"/>';
                }
            }
            line++;
            revers = false;
        } else if (renderCount < quantity) {
            revers = true;
            if (line == counter) {
                x = defaultX;
                y = line * defaultY;
                html += '<use xlink:href="#pod" class="elem" transform="translate('+x+','+y+')"/>';
                line = 1;
                defaultY = defaultY * center;
                renderCount++;
            }
            if (line < counter) {
                for (let k=0; k < (center - (line - 1) * 2); k++) {
                    if (renderCount < quantity) {
                        x = defaultX;
                        y = defaultY - (line-1) * 20;
                        if (k > 0) {
                            if (k % 2 == 0) {
                                x = defaultX - 17 * (k / 2).toFixed();
                                y = defaultY - 10 * (k / 2).toFixed() - (line - 1) * 20;
                            } else {
                                x = defaultX + 17 * (k / 2).toFixed();
                                y = defaultY - 10 * (k / 2).toFixed() - (line - 1) * 20;
                            }
                        }
                        renderCount++;
                        html += '<use xlink:href="#pod" class="elem" transform="translate('+x+','+y+')"/>';
                    }
                }
                line++;
            }
        }
    }
    wrapper.innerHTML = html;
}

btn.addEventListener('click', render);


