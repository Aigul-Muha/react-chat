import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import LightMode from 'shared/assets/icons/light-mode.svg';
import DarkMode from 'shared/assets/icons/dark-mode.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(styles.themeSwitcher, {}, [className])}>
      <button onClick={toggleTheme}>{theme === Theme.DARK ? <DarkMode /> : <LightMode />}</button>
    </div>
  );
};
