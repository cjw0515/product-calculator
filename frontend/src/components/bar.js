import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Bar = () => (
  <AppBar
    title={<span style={styles.title}>제품 계산기</span>}
    onTitleClick={handleClick}
    /* iconElementLeft={<IconButton><NavigationClose /></IconButton>} */
    iconElementRight={<FlatButton label="Login" />}
    style={{backgroundColor:"#FF6F00"}}
  />
);

export default Bar;