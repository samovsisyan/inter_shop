import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CategorysMenu extends Component {
    constructor() {
        super();
        this.state = {
            openSignIn: false,
        }
    }

    toggelSignIn = () => {
        this.setState({ openSignIn: !this.state.openSignIn})
    }
    render() {
        return (
            <div>

                <button onClick={this.toggelSignIn}>Click</button>
                <div className={`mfp-bg mfp-fade mfp-ready  ${this.state.openSignIn ? 'mfp-bg mfp-fade mfp-ready mfp-removing' : ''}`}></div>


                <div className= {`mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready 
                     ${this.state.openSignIn ?
                    'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready mfp-removing'
                : ''} `}
                     tabIndex="-1"
                     style={{overflow: `hidden auto`}}>
                <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div  className="mfp-content">
                            <div className="modal" id="sign_in">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="reg-title">Впервые у нас?<Link
                                                to="/registr">Зарегистрироваться</Link></div>
                                        </div>
                                        <div className="modal-body">
                                            <form id="sigh_in_form">
                                                <p className="form-row form-row-wide">
                                                    <label>Почта<span className="required"></span></label>
                                                    <input type="text" value="" name="useremail"
                                                           placeholder="Ваш e-mail" className="input-text" />
                                                </p>
                                                <p className="form-row form-row-wide">
                                                    <label>Пароль<span className="required"></span></label>
                                                    <input type="password" name="password" placeholder="Ваш пароль"
                                                           className="input-text" />
                                                </p>
                                                <p className="form-row form-button clearfix">
                                                    <label className="inline"><input type="checkbox" /><span
                                                        className="input"></span>Запомнить меня</label>
                                                    <button type="submit" className="btn-submit">Войти</button>
                                                </p>
                                                <Link to="#" className="return-pass">Забыли пароль?</Link>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="social-title">Войти с помощью</div>
                                            <div className="socials">
                                                <Link to="" className="social"><i className="fa fa-twitter"></i></Link>
                                                <Link to="" className="social"><i className="fa fa-facebook"></i></Link>
                                                <Link to="" className="social"><i className="fa fa-vk"></i></Link>
                                                <Link to="" className="social"><i className="fa fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={this.toggelSignIn} title="Закрыть" type="button" className="mfp-close"><img
                                    src="img/icons/cross-black.png" alt="Закрыть" className="mfp-close" /></button>
                            </div>
                        </div>
                        <div className="mfp-preloader">Загрузка...</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategorysMenu;