import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const useSearchSelector = () => {
  const search = useSelector((state: RootState) => state.products.search);
  return search;
};
