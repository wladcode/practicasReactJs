import { gql } from "apollo-boost";
import React from "react";
import { Query } from "react-apollo";
import DSSnipper from "../../components/ds/ds-spinner/ds-spinner.component";
import CollectionPage from "./collection-page.componente";

//A continuacipon se crea una query para pasar parametros
const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionPageGraphqlContainer = ({ match }) => {
    return (
        <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: match.params.collectionId }}>
            {({ loading, data, error }) => {
                console.log("GRAPQL - loading: ", loading);
                console.log("GRAPQL - error: ", error);
                console.log("GRAPQL - : data", data);
                if (loading) return <DSSnipper />;

                const { getCollectionsByTitle } = data;

                return <CollectionPage collection={getCollectionsByTitle} />;
            }}
        </Query>
    );
};

export default CollectionPageGraphqlContainer;
