import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.checkStock = this.checkStock.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.chooseItem = this.chooseItem.bind(this);
    }
    state = {
        stock: true, //item is on the stock
        choosen: false, //choosen item
        mouse: false //flag for hover effect
    }
    componentDidMount() {
        this.checkStock(); //check the stock of items
    }
    render() {
        const {item} = this.props;

        //vars of bottom text
        const unchoosen = !this.state.choosen && this.state.stock && 
                <div className="item__bottom_text">
                    Чего сидишь? Порадуй котэ,
                    <a className="item__bottom_link" onClick={this.chooseItem.bind(this, "link")}>
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
                <div className={`${!this.state.mouse && "item__upper-subtitle_hard"} ${"item__upper-subtitle"}`}>
                    Сказочное заморское яство
                </div>;
        const upperSubtitleChoosen = this.state.choosen && 
                <div className={`${!this.state.mouse && "item__upper-subtitle_choosen_hard"} ${"item__upper-subtitle_choosen"}`}>
                    Котэ не одобряет?
                </div>;

        return (
            <li className="item">
                <div onClick={this.chooseItem}
                    onMouseLeave={this.mouseLeave}
                    className={`${this.state.choosen && "item__main_choosen"} ${!this.state.stock ? "item__main_out-of-stock" : "item__main_active"} ${"item__main"}`}
                >
                    <div className={`${!this.state.stock ? "item__main_container_out-of-stock" : "item__main_container"}`}>
                        <div className="item__content">
                            {upperSubtitle}
                            {upperSubtitleChoosen}
                            <h2 className="item__subtitle">{item.brand}</h2>
                            <div className="item__subtitle_sort">{item.sort}</div>
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
                            <img className="item__picture" src="assets/images/cat3.png"></img>
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
            </li>
        );
    }
    checkStock() {
        this.setState({
            stock: this.props.item.stock
        })
    }
    chooseItem(e) {
        if(!this.state.stock) return; //choose only stock items
        //choose by link in the bottom of item
        if( e === 'link') {
            this.setState({
                choosen: !this.state.choosen,
                mouse: true
            })
        } else {
            this.setState({
                choosen: !this.state.choosen,
                mouse: false
            });
        }
    }
    mouseLeave() {
        if(!this.state.stock) return;
        this.setState({
            mouse: true
        });
    }
};

export default Item;