import PropTypes from "prop-types";

export const SearchResulting = PropTypes.shape({
  thumbnail: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired,
});
