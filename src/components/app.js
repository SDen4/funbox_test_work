import React, {Component} from 'react';
import Item  from "./item";
import items from "../scripts/itemsList";

class App extends Component {
    render() {
        let itemsList = items.map( function (item) {
            return <li key={item.id}> <Item item={item} /> </li>
        });
        return (
            <div className="app">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <ul className="main">
                    {itemsList}
                </ul>
            </div>
        );
    }
};

export default App;