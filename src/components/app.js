import React, {Component} from 'react';
import Item  from "./item";

class App extends Component {

    render() {
        return (
            <div className="app">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <main className="main">
                    <Item />
                </main>
            </div>
        );
    }
};

export default App;