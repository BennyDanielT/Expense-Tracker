import * as groupSaga from "./group";
import * as reminderSaga from "./reminder";
import * as tagSaga from "./tags";
import * as expenseSaga from "./expense";



// combining all the sagas
function* rootSaga() {
    [
      ...Object.values(groupSaga),
      ...Object.values(reminderSaga),
      ...Object.values(tagSaga),
      ...Object.values(expenseSaga)
    ].map(fork)
  );
}
export default rootSaga;
