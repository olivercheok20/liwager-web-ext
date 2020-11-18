// import * as React from "react";
// import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import styled from "styled-components";
// import { IAppState } from "../../../background/store";
// import { ILiwager } from "../../../background/store/liwager";
// import Liwager from "../../../containers/Liwager";

// interface ILiwagerApp {
//   liwager: ILiwager;
//   dispatch: Dispatch;
// }

// class LiwagerApp extends React.Component<ILiwagerApp> {
//   render() {
//     return (
//       <React.Fragment>
//         <LiwagerAppContainer>
//           <Liwager />
//         </LiwagerAppContainer>
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = (state: IAppState) => {
//   return {
//     liwager: state.liwager,
//   };
// };

// export default connect(mapStateToProps)(LiwagerApp);

// const LiwagerAppContainer = styled('div')`
// 	position: fixed;
// 	z-index: 9;
// 	bottom: 0;
// 	right: 0;
// 	background-color: ${p => p.theme.backgroundColor};
// 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `;
