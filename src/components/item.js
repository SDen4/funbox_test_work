import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.chooseItem = this.chooseItem.bind(this);
    }
    state = {
        choosen: false
    }
    render() {
        const {item} = this.props;
        return (
            <div className="item">
                <div className="item__main" onClick={this.chooseItem}>
                    <div className="item__main_container">
                        <div className="item__content">
                            <div className="item__upper-subtitle">Сказочное заморское яство</div>
                            {/* <div className="item__upper-subtitle">Котэ не одобряет?</div> */}
                            <h2 className="subtitle">{item.brand}</h2>
                            <div className="subtitle__sort">{item.sort}</div>
                            <div className="item__description">
                                <div className="item__portion_value">{item.portions}</div>
                                <span className="item__portion_text">порций</span>
                            </div>
                            <div className="item__description">
                                <div className="item__present_value">{item.presentQuantity}</div>
                                <span className="item__present_text">{item.presentText}</span>
                            </div>
                        </div>
                        <div className="item__picture_wrapper">
                            <img className="item__picture" src="assets/images/cat.png"></img>
                        </div>
                        <div className="item__weight">
                            <div className="item__weight_value">{item.weight}</div>
                            <span className="item__weight_text">кг</span>
                        </div>
                    </div>
                </div>
                <div className="item__bottom">
                    <div className="item__bottom_text">Чего сидишь? Порадуй котэ,</div>
                    {/* <div className="item__bottom_text">Печалька, {item.sort} закончился.</div> */}
                    {/* <div className="item__bottom_text">{item.description}</div> */}
                    <a className="item__bottom_link">купи.</a>
                </div>
            </div>
        );
    }
    chooseItem() {
        // console.log('click by item!');
        this.setState({
            choosen: !this.state.choosen
        });
        console.log(this.state.choosen);
    }
};

export default Item;