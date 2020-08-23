import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="item__main">
                    <div className="item__main_container">
                        <div className="item__content">
                            <div className="item__upper-subtitle">Сказочное заморское яство</div>
                            <h2 className="subtitle">Нямушка</h2>
                            <div className="subtitle__sort">с фуа-гра</div>
                            <div className="item__description">
                                <div className="item__portion_value">10</div>
                                <span className="item__portion_text">порций</span>
                            </div>
                            <div className="item__description">
                                <div className="item__present_value"></div>
                                <span className="item__present_text">мышь в подарок</span>
                            </div>
                        </div>
                        <div className="item__picture_wrapper">
                            <img className="item__picture" src="assets/images/cat.png"></img>
                        </div>
                        <div className="item__weight">
                            <div className="item__weight_value">0,5</div>
                            <span className="item__weight_text">кг</span>
                        </div>
                    </div>
                </div>
                <div className="item__bottom">
                    <div className="item__bottom_text">Чего сидишь? Порадуй котэ,</div>
                    <a className="item__bottom_link">купи.</a>
                </div>
            </div>
        );
    }
};

export default Item;