import React, {Component} from 'react';
import Item  from "./item";
import items from "../scripts/itemsList";

class App extends Component {
    render() {
        let itemsList = items.map( item => {
            return <Item item={item} li key={item.id} />
        });
        
        return (
            <div className="app">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <ul className="main__list">
                    {itemsList}
                </ul>
            </div>
        );
    }
};

export default App;