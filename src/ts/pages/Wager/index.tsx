import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { IAppState } from "../../background/store";
import { change_page } from "../../background/store/liwager/actions";
import { ILiwager } from "../../background/store/liwager/reducer";


interface ILiwagerProps {
  liwager: ILiwager;
  dispatch: Dispatch;
}

class Verify extends React.Component<ILiwagerProps> {
  change_page = (new_page: string) => {
    this.props.dispatch(change_page(new_page));
  };

  render() {
    return (
      <LiwagerContainer>
        <h4>Verify your email</h4>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <p>
          Thank you for registering an account with liwager! We’ve sent you an
          email. Click the link in the email to verify your account.
        </p>
        <p>Next steps:</p>
        <ol>
          <li>
            Activate your account by clicking the link sent to your email and proceed to login.
          </li>
		  <br/>
          <li>
            Receive your unique Bitcoin wallet address and deposit some funds.
          </li>
		  <br/>
          <li>
            Challenge your friends to games and bet any amount of Bitcoin up to
            your account balance! <br/><br/> (To keep liwager operational, each bet incurs
            a 2% transaction fee)
          </li>
		  <br/>
          <li>Withdraw or deposit Bitcoin into your account at any point.</li>
        </ol>
      </LiwagerContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    liwager: state.liwager,
  };
};

export default connect(mapStateToProps)(Verify);

const LiwagerContainer = styled("div")`
  min-width: 100px;
  padding: 15px;
`;
