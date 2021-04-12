import axios from "axios";
import React, { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import "./UserList.css";
function UserList() {
    const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setlistOfUSer(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="disingncard">
            {listOfUSer.map((el, key) => (
                <CardList el={el} key={key} />
            ))}
        </div>
    );
}

export default UserList;
