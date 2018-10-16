import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, reset } from '../actions/actions';

const MainApp = ({ dispatch, count}) => (
    <div>
        <h1>Counter App</h1>
        <button onClick={() => {dispatch(incrementCount())}}>+1</button>
        <button onClick={() => {dispatch(reset())}}>Reset</button>
        <button onClick={() => {dispatch(decrementCount())}}>-1</button>
        <p>{count}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};
export default connect(mapStateToProps)(MainApp);