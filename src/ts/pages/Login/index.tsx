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

class Login extends React.Component<ILiwagerProps> {
  change_page = (new_page: string) => {
    this.props.dispatch(change_page(new_page));
  };

  render() {
    return (
      <LiwagerContainer>
        <h4>Login to liwager</h4>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <div style={{ textAlign: "center" }}>
          <Form>
            <Input
              placeholder="Enter username here"
              type="text"
              style={{ marginBottom: "5px" }}
              bsSize="sm"
            />
            <Input
              placeholder="Enter password here"
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
            onClick={() => this.change_page("register")}
          >
            Register
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={() => this.change_page("home")}
          >
            Login
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

export default connect(mapStateToProps)(Login);

const LiwagerContainer = styled("div")`
  min-width: 100px;
  padding: 15px;
`;
