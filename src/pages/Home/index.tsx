import { Switch } from '@mui/material';

import { useCustomSelector, useCustomDispatch } from '@/hooks/reduxHooks';
import { setThemeMode } from '@/redux/slices/settings.slice';

const Home = () => {
  const themeMode = useCustomSelector((state) => state.settings.themeMode);

  const dispatch = useCustomDispatch();

  const handleChangeTheme = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Switch checked={themeMode === 'dark'} onChange={handleChangeTheme} />
      Theme: {themeMode}
    </div>
  );
};

export default Home;
