import React, { Profiler } from "react";
import { Redirect } from "react-router-dom";
import DirectoryComponent from "../../components/directory/directory.component";
import "./home-page.scss";
import { HomePageContainer } from "./home-page.styled";

const HomePageStore = (props) => {
    const { hasActiveSession, match } = props;
    console.log("properties ", props);

    if (!hasActiveSession) {
        <Redirect to="/shop/signin" />;
    }

    return (
        <HomePageContainer>
            <Profiler
                id="directory"
                onRender={(id, phase, actualDuration) => {
                    console.log({
                        id,
                        phase,
                        actualDuration,
                    });
                }}>
                <DirectoryComponent />
            </Profiler>
        </HomePageContainer>
    );
};

export default HomePageStore;
