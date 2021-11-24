import { all, call } from "redux-saga/effects";
import fetchLive from "./store/live/liveSaga";

export default function* rootSaga() {
    yield all(call(fetchLive));
}
