import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
        whenKegClicked = { props.onKegSelection }
        names={keg.names}
        abv={keg.abv}
        brewer={keg.brewer}
        price={keg.price}
        type={keg.type}
        pintsLeft={keg.pintsLeft}
        id={keg.id}
        key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};



export default KegList;

