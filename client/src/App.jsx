import React, { Component, Fragment, Suspense } from "react";
import Routes from "./routes/Routes";
import GlobalStyle from "./styles/global.styles";

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />

                <Suspense fallback={<div>..Loading</div>}>
                    <Routes />
                </Suspense>
            </Fragment>
        );
    }
}
export default App;
