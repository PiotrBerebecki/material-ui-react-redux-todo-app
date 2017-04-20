import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

const Header = () => (
  <div>
    <AppBar
      title="To do list"
      showMenuIconButton={false}
      iconElementRight={
        <Avatar src="http://3.bp.blogspot.com/_yh71-U8uKkY/TJNbgyeW6II/AAAAAAAADTs/z909U23z6NQ/s1600/white+cat+face.jpg" />
      }
    />
  </div>
);

export default Header;
