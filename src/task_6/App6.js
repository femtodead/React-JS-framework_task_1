import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProdust';
import EditList from './components/EditList';
import { Provider } from 'react-redux';
import store from './store';
function App6() {
    return ( 
        <Provider store={store}>
            <AddProduct />
            <ListProduct />
            <EditList />

        </Provider>
        
     );
}

export default App6;