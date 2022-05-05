// icons
import * as I from './icons';
// ui
import { IconWrapper } from '../ui';
//////////////////////////////////////////////////

const Icon = props => {
  const {
    w,
    h,
    ml,
    color,
    order,
    right,
    width,
    border,
    height,
    bottom,
    position,
    iconName,
    transform,
    handleClick,
  } = props;

  const iconProps = { w, h, color };

  const styles = {
    ml,
    order,
    right,
    width,
    border,
    bottom,
    height,
    position,
    transform,
  };

  return (
    <IconWrapper {...styles} onClick={handleClick}>
      {I[iconName](iconProps)}
    </IconWrapper>
  );
};

export default Icon;
