import {createStore} from 'redux';
import { counter } from '../reducers/reducer';


export default() => {
    const store = createStore(counter);
    return store;
};

