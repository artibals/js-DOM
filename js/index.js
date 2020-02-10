const link = document.querySelector('a');

link.textContent = 'My Facebook';
link.href = 'https://www.facebook.com/orest.andrushkiv';

const sect = document.querySelector('section');
 const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    sect.appendChild(para);  

/*
for(let i = 1; i <= 1000; i++) {
    const para = document.createElement('p');
    para.textContent = i + 'We hope you enjoyed the ride.';
    sect.appendChild(para);   
}
*/

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';


const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

$('.click-me').click( () => $('img').toggle(3000) );