import { CLOSE_MODAL, OPEN_MODAL } from "../context/slices/modal.slice";
import { AppDispatch } from "../context/store";
export class ModalService {
  static Open(element: JSX.Element, dispatch: AppDispatch) {
    dispatch(OPEN_MODAL(element));
    console.log(element);
  }

  static Close(res: any, dispatch: AppDispatch) {
    dispatch(CLOSE_MODAL());
  }
}
