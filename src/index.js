import _ from 'lodash'
import './style.css'
import sakura from './sakura.jpeg'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!'];
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = sakura;
document.body.appendChild(image);