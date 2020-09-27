import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.abv} - {props.name} - {props.price}</h3>
        <p><em>{props.type}</em></p>
        <p><em>{props.brewer}</em></p>
        <p><em>{props.pintsLeft}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  type: PropTypes.string,
  price: PropTypes.string.isRequired,
  brewer: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
