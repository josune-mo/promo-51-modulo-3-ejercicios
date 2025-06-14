import PropTypes from "prop-types";

function Link({ nombre, openInNewTab }) {
  return (
    <li>
      <a href="https://adalab.es/" target={openInNewTab ? "_blank" : "_self"}>
        {nombre}
      </a>
    </li>
  );
}

Link.propTypes = {
  nombre: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
};

Link.defaultProps = {
  openInNewTab: false,
};

export default Link;
