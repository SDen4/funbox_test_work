import React, {Component} from 'react';

class App extends Component {

    render() {
        return (
            <div className="app">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <h1 className="test">Нямушка</h1>
                <h1 className="test2">Сказочное заморское яство</h1>
                <h1 className="test3">Сказочное заморское яство</h1>
                <img className="image" srcSet="assets/images/pic.jpg"></img>
            </div>
        );
    }
};

export default App; 