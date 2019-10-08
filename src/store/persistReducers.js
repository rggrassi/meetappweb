import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function(reducers) {
    const persistedReducer = persistReducer({
        key: 'meetapp',
        storage,
        whitelist: ['auth', 'user']
    }, reducers)

    return persistedReducer;
}