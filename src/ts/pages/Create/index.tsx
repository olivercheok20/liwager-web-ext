import * as React from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, Form, Input } from "reactstrap";
import { Dispatch } from "redux";
import styled from "styled-components";
import { IAppState } from "../../background/store";
import { change_page } from "../../background/store/liwager/actions";
import { ILiwager } from "../../background/store/liwager/reducer";

interface ILiwagerProps {
  liwager: ILiwager;
  dispatch: Dispatch;
}

interface CreateState {
  side: string | null;
}

class Verify extends React.Component<ILiwagerProps, CreateState> {
  constructor(props: any) {
    super(props);
    this.state = {
      side: "White",
    };
  }

  change_page = (new_page: string) => {
    this.props.dispatch(change_page(new_page));
  };

  render() {
    return (
      <LiwagerContainer>
        <h4>Create new wager</h4>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <p>
          A lichess game has been identified. Choose your side and bet amount
          and send your friend the generated link!
        </p>
        <div style={{ textAlign: "center" }}>
          <Form style={{ marginBottom: "5px" }}>
            <ButtonGroup style={{ marginBottom: "5px" }}>
              <Button
                color="primary"
                onClick={() => this.setState({ side: "White" })}
                active={this.state.side == "White"}
                size="sm"
              >
                White
              </Button>
              <Button
                color="primary"
                onClick={() => this.setState({ side: "Black" })}
                active={this.state.side == "Black"}
                size="sm"
              >
                Black
              </Button>
            </ButtonGroup>
            <p style={{ marginBottom: "12px" }}>
              Available balance: 60.000 BTC
            </p>
            {/* Put store balance here */}
            <Input
              placeholder="Enter wager size here"
              type="number"
              step="0.001"
              min="0"
              style={{ marginBottom: "10px", margin: "0 auto" }}
              bsSize="sm"
              className="w-50"
            />
          </Form>
          <small>
            <p>(Each bet incurs a 2% fee on the total pool)</p>
          </small>
          {/* <a href="#" onClick={() => }>https://lichess.org/1KQj9lJO?id=FJiofJio&white=macmiller&bet=0.0064</a> */}
          <p>
            https://lichess.org/1KQj9lJO?id=FJiofJio&white=macmiller&bet=0.0064
          </p>
        </div>
        <p>
          We recommend only playing with trusted friends to reduce the
          possibility of any computer cheating or fraudulent play. We are not
          liable for any losses incurred under any circumstances.
        </p>
        <hr style={{ margin: "5px -15px 10px -15px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="sm"
            color="secondary"
            outline
            onClick={() => this.change_page("home")}
          >
            Back
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={() => this.change_page("wager")}
          >
            Proceed to game
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

export default connect(mapStateToProps)(Verify);

const LiwagerContainer = styled("div")`
  min-width: 100px;
  padding: 15px;
`;
