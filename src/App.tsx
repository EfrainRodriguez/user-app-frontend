import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ThemeConfig from '@/theme/ThemeConfig';
import RouterConfig from '@/routes/RouterConfig';
import store, { persistor } from '@/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeConfig>
          <RouterConfig />
        </ThemeConfig>
      </PersistGate>
    </Provider>
  );
};

export default App;
