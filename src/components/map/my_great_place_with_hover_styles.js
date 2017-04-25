const K_SIZE = 30;

const orangeFlag = './web/assets/icons/map_icons/map_icon_flag_orange.svg'

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#f44336'

};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};
