import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

console.log(player);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));

  console.log('played video');
}
const videoBuffer =
  JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? 0;

player.setCurrentTime(videoBuffer);
