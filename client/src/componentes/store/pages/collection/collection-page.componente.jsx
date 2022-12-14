import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../../../redux/shop/shop-selector";
import CollectionItemComponent from "./../../components/collection-item/collection-item.component";
import "./collection-page.scss";

function CollectionPage() {
    const params = useParams();
    const collection = useSelector(selectCollection(params.collectionId));

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title} </h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItemComponent key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPage;
