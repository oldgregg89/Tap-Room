import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";



function KegDetail(props){
  const { keg, onClickingDelete } = props;

  function handleRemovePint(){
    if (keg.pintsLeft === 0){
      props.onSellingPint({name: keg.name, abv: keg.abv, price: keg.price,brewer: keg.brewer,type: keg.type,pintsLeft: keg.pintsLeft,id: keg.id})
    }
    else {
      props.onSellingPint({name: keg.name, abv: keg.abv, price: keg.price,brewer: keg.brewer,type: keg.type,pintsLeft: keg.pintsLeft-1,id: keg.id})
    }
  }
  

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name}</h3>
      <p><em>Keg Alcohol Body Volume (abv):{keg.abv}%</em></p>
      <p><em>Type of Beer:{keg.type}</em></p>
      <p><em>Price: ${keg.price}</em></p>
      <p><em>Brewer: {keg.brewer}</em></p>
      <p><em>Pints Left:{keg.pintsLeft}</em></p>

      <Button style={{margin: 10}} variant="success" onClick={handleRemovePint }>Sell a Pint</Button>
      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Edit Keg</Button>
      <Button variant="danger" onClick={() => onClickingDelete(keg.id) }>Delete Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

//show how the keg pints are affected in the details along with how many pints are used in the sale.

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onSellingPint: PropTypes.func,
};

export default KegDetail;
