import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.chooseItem = this.chooseItem.bind(this);
        this.checkStock = this.checkStock.bind(this);
    }
    state = {
        choosen: false, // choosen item
        stock: true // item is on the stock
    }
    componentDidMount() {
        this.checkStock(); // check the stock of items
    }
    render() {
        const {item} = this.props;

        //vars of bottom text
        const unchoosen = !this.state.choosen && this.state.stock && 
                <div className="item__bottom_text">
                    Чего сидишь? Порадуй котэ,
                    <a className="item__bottom_link" onClick={this.chooseItem}>
                        купи.
                    </a>
                </div>;

        const outOfStock = !this.state.stock && 
                <div className="item__bottom_text item__bottom_text_out-of-stock">
                    Печалька, {item.sort} закончился.
                </div>;

        const choosen = this.state.choosen && 
                <div className="item__bottom_text">
                    {item.description}
                </div>;

        //vars of upper subtitle
        const upperSubtitle =
                <div className="item__upper-subtitle">
                    Сказочное заморское яство
                </div>;

        const upperSubtitleChoosen = this.state.choosen && 
                <div className="item__upper-subtitle_choosen">
                    Котэ не одобряет?
                </div>;

        return (
            <div className="item">
                <div onClick={this.chooseItem}
                    className={`${this.state.choosen && "item__main_choosen"} ${!this.state.stock ? "item__main_out-of-stock" : "item__main_active"} ${"item__main"}`}
                >
                    <div className={`${!this.state.stock ? "item__main_container_out-of-stock" : "item__main_container"}`}>
                        <div className="item__content">
                            {upperSubtitle}
                            {upperSubtitleChoosen}
                            <h2 className="subtitle">{item.brand}</h2>
                            <div className="subtitle__sort">{item.sort}</div>
                            <div className="item__description">
                                <div className="item__description_value">{item.portions}</div>
                                <span className="item__description_text">порций</span>
                            </div>
                            <div className="item__description">
                                <div className="item__description_value">{item.presentQuantity}</div>
                                <span className="item__description_text">{item.presentText}</span>
                            </div>
                            <div className="item__description">
                                <span className="item__description_text">{item.other}</span>
                            </div>
                        </div>
                        <div className="item__picture_wrapper">
                            <img className="item__picture" src="assets/images/cat.png"></img>
                        </div>
                        <div className={`${this.state.choosen && "item__weight_choosen"} ${!this.state.stock && "item__weight_out-of-stock"} ${"item__weight"}`}>
                            <div className="item__weight_value">{item.weight}</div>
                            <span className="item__weight_text">кг</span>
                        </div>
                    </div>
                </div>
                <div className="item__bottom">
                    {unchoosen}
                    {outOfStock}
                    {choosen}
                </div>
            </div>
        );
    }
    chooseItem() {
        // change the status only if item on the stock
        if(this.state.stock) {
            this.setState({
                choosen: !this.state.choosen
            });
        }
    }
    checkStock() {
        this.setState({
            stock: this.props.item.stock
        })
    }
};

export default Item;