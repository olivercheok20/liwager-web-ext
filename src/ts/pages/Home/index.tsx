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

class Home extends React.Component<ILiwagerProps> {
  change_page = (new_page: string) => {
	this.props.dispatch(change_page(new_page));
  };

  render() {

    return (
      <LiwagerContainer>
        <h4>Home</h4>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <p>
          Welcome to liwager! To start betting, make sure your account has
          sufficient funds then start a new game on lichess.org and reopen this
          extension.
        </p>
        <p>
          To deposit funds into your account, transfer Bitcoin to your unique
          wallet address below.
        </p>
        <div style={{ textAlign: "center" }}>
          <b>3AjGBXUK4L9Don7W2vmAZz7MNyaa1X91ex</b>
          {/* Replace with store Bitcoin wallet address */}
          <p>Current balance: 60.000 BTC</p>
          {/* Replace with Bitcoin balance */}
        </div>
        <p style={{ marginBottom: "12px" }}>
          To withdraw funds from your account, simply input the Bitcoin wallet
          address where funds will be deposited and the amount to be withdrawn
          below and click withdraw. Make sure the address listed is correct.
        </p>
        <div style={{ textAlign: "center" }}>
          <Form>
            <Input
              placeholder="Enter Bitcoin wallet address here"
              type="text"
              style={{ marginBottom: "5px" }}
              bsSize="sm"
            />
            <Input
              placeholder="Enter withdrawal amount here"
              type="number"
              step="0.001"
              min="0"
              style={{ marginBottom: "10px" }}
              bsSize="sm"
            />
          </Form>
        </div>
        <p style={{ marginBottom: "0px" }}>
          Note that it may take several minutes for Bitcoin to be deposited into
          or withdrawn from your account. For any inquiries, email
          support@liwager.com.
        </p>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="sm" color="danger" outline onClick={() => this.change_page('login')}>
            Sign Out
          </Button>
          <Button size="sm" color="primary">
            Withdraw
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

export default connect(mapStateToProps)(Home);

const LiwagerContainer = styled("div")`
  min-width: 100px;
  padding: 15px;
`;
