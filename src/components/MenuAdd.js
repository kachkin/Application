import React, {Component, PropTypes} from "react";
import {Form, FormControl, FormGroup, Col, Button} from "react-bootstrap"
import "../styles/MenuAdd.sass"

export default function MenuAdd(props) {
        const {addCity} = props;
        return(
        <Form onSubmit={addCity}>
            <FormGroup controlId="add-city">
                <Col smOffset={3} sm={5}>
                    <FormControl type="text" placeholder="Введите город" />
                </Col>

            </FormGroup>
            <FormGroup>
                <Col sm={4}>
                    <Button type="submit">
                        Найти
                    </Button>
                </Col>
            </FormGroup>

        </Form>
        )
}

MenuAdd.propTypes={
    addCity: PropTypes.func.isRequired
};