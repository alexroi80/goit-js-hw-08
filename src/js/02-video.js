import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
}

const videoBuffer =
  JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? 0;

player.setCurrentTime(videoBuffer);
