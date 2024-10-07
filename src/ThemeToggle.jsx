import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useAppContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();

  return (
    <div className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
