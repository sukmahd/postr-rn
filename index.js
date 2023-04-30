import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import './app/Localization/i18n';
import { Provider } from 'react-redux';
import store from './app/Store/store';

const AppWrapper = () => <Provider store={store} >
    <App></App>
</Provider>

AppRegistry.registerComponent(appName, () => AppWrapper);
