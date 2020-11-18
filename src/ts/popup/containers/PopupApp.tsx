import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { IAppState } from "../../background/store";
import { ILiwager } from "../../background/store/liwager";
import GlobalStyle from "../../components/styles/GlobalStyle";
import Liwager from "../../containers/Liwager";
import 'bootstrap/dist/css/bootstrap.css';

interface IPopupApp {
  liwager: ILiwager;
  dispatch: Dispatch;
}

class PopupApp extends React.Component<IPopupApp> {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <PopupAppContainer>
          <Liwager />
        </PopupAppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    liwager: state.liwager,
  };
};

export default connect(mapStateToProps)(PopupApp);

const PopupAppContainer = styled("div")`
  width: 500px;
`;
