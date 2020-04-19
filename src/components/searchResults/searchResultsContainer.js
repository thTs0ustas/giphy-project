import { connect } from "react-redux";
import { SearchResults } from "./SearchResults";

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

export default connect(mapStateToProps)(SearchResults);
