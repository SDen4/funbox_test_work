import React, {Component} from 'react';
import Item  from "./item";
import items from "../scripts/itemsList";

class App extends Component {
    state = {
        items: []
    }

    render() {
        return (
            <div className="app">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <main className="main">
                    <Item item={items[0]} />
                    <Item item={items[1]} />
                    <Item item={items[2]} />
                </main>
            </div>
        );
    }
    getElements() {
        this.setState({
            items: items
        })
    }
};

export default App;