import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../components/MainApp';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <MainApp />
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));