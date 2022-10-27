import "./search-box.styles.css";

const SearchBox = function (props) {
  return (
    <input
      className={`monsters-search-box ${props.className}`}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    ></input>
  );
};

export default SearchBox;
