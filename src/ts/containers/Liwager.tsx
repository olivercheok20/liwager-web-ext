import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../background/store";
import { change_page } from "../background/store/liwager/actions";
import { ILiwager } from "../background/store/liwager/reducer";
import Create from '../pages/Create';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register';
import Verify from '../pages/Verify';

interface ILiwagerProps {
  liwager: ILiwager;
  dispatch: Dispatch;
}

class Liwager extends React.Component<ILiwagerProps> {
  change_page = (new_page: string) => {
    this.props.dispatch(change_page(new_page));
  };

  render() {

	let page = null
	switch (this.props.liwager.page) {
	// switch ('create') {
		case 'home':
			page = <Home/>
			break
		case 'login':
			page = <Login/>
			break
		case 'register':
			page = <Register/>
			break
		case 'verify':
			page = <Verify/>
			break
		case 'create':
			page = <Create/>
			break
		default:
			page = <div></div>
	}

    return (
		page
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    liwager: state.liwager,
  };
};

export default connect(mapStateToProps)(Liwager);