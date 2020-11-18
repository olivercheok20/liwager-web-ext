import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { IAppState } from "../../background/store";
import { ILiwager } from "../../background/store/liwager";
import GlobalStyle from "../../components/styles/GlobalStyle";
import Liwager from "../../containers/Liwager";

interface IOptionsApp {
  liwager: ILiwager;
  dispatch: Dispatch;
}

class OptionsApp extends React.Component<IOptionsApp> {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <OptionsAppContainer>
          <Liwager />
        </OptionsAppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    liwager: state.liwager,
  };
};

export default connect(mapStateToProps)(OptionsApp);

const OptionsAppContainer = styled('div')`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	height: 90vh;
	width: 90vw;
	left: 5vw;
	top: 5vh;
`;
