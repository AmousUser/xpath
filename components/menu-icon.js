
const MenuIcon = ({ color, opened, handleClick }) => (
  <>
    <div className='wrapper'>
      <div onClick={handleClick} className={opened ? 'center-active' : 'center'}>
        <div />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        width: 30px;
        height: 40px;
        margin-left: 20px;
        position: relative;
      }

      .center, .center-active {
        width: 30px;
        position: absolute;
      }
      
      .center div,
      .center:after,
      .center:before,
      .center-active:after,
      .center-active:before,
      .center-active div {
        content: "";
        height: 4px;
        margin: 7px 0;
        display: block;
        transition: 0.5s;
        border-radius: 3px;
        background: ${color};
      }

      .center-active:before {
        transform: translateY(11px) rotate(135deg);
      }

      .center-active:after {
        transform: translateY(-11px) rotate(-135deg);
      }

      .center-active div {
        transform: scale(0);
      }

    `}</style>
  </>
);

export default MenuIcon;
