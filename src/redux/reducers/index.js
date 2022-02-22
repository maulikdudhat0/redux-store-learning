import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from './prodcutReducer'

const reducers = combineReducers({
    allProuducts: productReducer,
    product: selectedProductReducer,
})

export default reducers