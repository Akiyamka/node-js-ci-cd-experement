import ReactDOM from 'react-dom';
import { reatomContext } from '@reatom/react';
import { store } from '~core/store/store';
import config from '~core/app_config';

ReactDOM.render(
  <reatomContext.Provider value={store}>
    <h1>Env:</h1>
    <code style={{ 'whiteSpace': 'pre'}}>{JSON.stringify(config, null, 2)}</code>
  </reatomContext.Provider>,
  document.getElementById('root'),
);
