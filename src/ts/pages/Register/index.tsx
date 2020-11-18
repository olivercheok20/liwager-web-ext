import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { IAppState } from "../../background/store";
import { change_page } from "../../background/store/liwager/actions";
import { ILiwager } from "../../background/store/liwager/reducer";

import { Button, Form, Input } from "reactstrap";

interface ILiwagerProps {
  liwager: ILiwager;
  dispatch: Dispatch;
}

class Register extends React.Component<ILiwagerProps> {
  change_page = (new_page: string) => {
    this.props.dispatch(change_page(new_page));
  };

  render() {
    return (
      <LiwagerContainer>
        <h4>Register for liwager</h4>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <div style={{ textAlign: "center" }}>
          <Form>
            <Input
              placeholder="Enter username"
              type="text"
              style={{ marginBottom: "5px" }}
              bsSize="sm"
            />
            <Input
              placeholder="Enter email"
              type="email"
              style={{ marginBottom: "5px" }}
              bsSize="sm"
            />
            <Input
              placeholder="Enter password"
              type="password"
              style={{ marginBottom: "5px" }}
              bsSize="sm"
            />
            <Input
              placeholder="Enter password again"
              type="password"
              style={{ marginBottom: "10px" }}
              bsSize="sm"
            />
          </Form>
        </div>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="sm"
            color="secondary"
            outline
            onClick={() => this.change_page("login")}
          >
            Back
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={() => this.change_page("home")}
          >
            Register
          </Button>
        </div>
      </LiwagerContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    liwager: state.liwager,
  };
};

export default connect(mapStateToProps)(Register);

const LiwagerContainer = styled("div")`
  min-width: 100px;
  padding: 15px;
`;
