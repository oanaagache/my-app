import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useFilteredProductsSelector } from "../../hooks/selectors/useFilteredProductsSelector";
import { setSearch } from "../../store/productsSlice";
import { useSearchSelector } from "../../hooks/selectors/useSearchSelector";

export const SearchInput = () => {
  const search = useSearchSelector();
  const filteredProducts = useFilteredProductsSelector();
  console.log("filteredProducts");
  console.log(filteredProducts);
  const dispatch = useDispatch();
  return (
    <>
      <InputGroup
        className="mb-3"
        style={{ width: "250px", margin: "0  0 10px 20px" }}
      >
        <InputGroup.Text id="basic-addon1">
          <BiSearch />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
        />
      </InputGroup>
    </>
  );
};
