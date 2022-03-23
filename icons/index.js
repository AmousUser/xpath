// icons
import * as I from './icons';
// ui
import { IconWrapper } from '../ui';
//////////////////////////////////////////////////

const Icon = (props) => {
  const {
    w,
    h,
    color,
    space,
    order,
    right,
    width,
    border,
    height,
    position,
    iconName,
    handleClick,
  } = props;

  const iconProps = { w, h, color };

  const styles = {
    space,
    order,
    right,
    width,
    border,
    height,
    position,
  };

  return (
    <IconWrapper {...styles} onClick={handleClick}>
      {I[iconName](iconProps)}
    </IconWrapper>
  );
};

export default Icon;
