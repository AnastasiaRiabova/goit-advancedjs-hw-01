import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timeStamp = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const currentTime = localStorage.getItem(timeStamp) || 0;
player.setCurrentTime(currentTime);

const  updateLocalStorage = ()=> {
  player.getCurrentTime()
    .then(time => {
      localStorage.setItem(timeStamp, time);
    })
}
player.on('timeupdate', throttle(updateLocalStorage, 1000));