import React from 'react';
import Thema from './theme';
import { Provider } from 'react-redux';
import store from "./store";


function App5() {
    return ( 
    <Provider store={store}>
        <Thema />
    </Provider>
     );
}

export default App5;