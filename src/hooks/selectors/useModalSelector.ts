import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const useModalSelector = () => {
  const modal = useSelector((state: RootState) => state.modal);
  return modal;
};
