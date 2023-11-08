import {configureStore} from "@reduxjs/toolkit";
import store from './modal';
import utils from "@/store/Utils";


const Store = configureStore({
    reducer: {modal : store, utils: utils}
})

export default Store