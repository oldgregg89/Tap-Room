import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='name'
            placeholder='Name' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='abv'
            placeholder='Abv' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='price'
            placeholder='Price.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='type'
            placeholder='Type.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='brewer'
            placeholder='Brewer.' />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
