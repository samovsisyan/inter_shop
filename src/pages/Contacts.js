import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Contacts extends Component {
    render() {
        return (
            <Wrapper>
                <div id="my-content">

                    <div className="content-page">
                        <div className="contact-content equal-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="card-contact equal-elem" style={{height: 243}}>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     version="1.1"
                                                     id="Layer_1" x="0px" y="0px" viewBox="0 0 502 502"
                                                     style={{enable_background:"new 0 0 502 502", xml:"pace=preserve"}}>
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M214.15,73.847c-57.789,0-104.803,47.015-104.803,104.803c0,57.789,47.015,104.804,104.803,104.804     c57.789,0,104.804-47.015,104.804-104.804S271.939,73.847,214.15,73.847z M214.15,263.454c-46.761,0-84.803-38.043-84.803-84.804     c0-46.761,38.042-84.803,84.803-84.803c46.761,0,84.804,38.042,84.804,84.803C298.954,225.411,260.911,263.454,214.15,263.454z"></path>
                                                                <path
                                                                    d="M125.153,90.081c2.39,0,4.788-0.852,6.701-2.58c22.593-20.412,51.819-31.654,82.296-31.654     c17.038,0,33.525,3.42,49.006,10.165c5.063,2.206,10.957-0.11,13.162-5.173c2.206-5.063-0.11-10.956-5.173-13.162     c-18.016-7.85-37.192-11.83-56.995-11.83c-35.44,0-69.428,13.074-95.704,36.814c-4.098,3.702-4.418,10.026-0.716,14.124     C119.704,88.97,122.423,90.081,125.153,90.081z"></path>
                                                                <path
                                                                    d="M101.143,108.146c-4.889-2.567-10.935-0.685-13.502,4.205c-10.659,20.3-16.293,43.226-16.293,66.299     c0,5.523,4.477,10,10,10s10-4.477,10-10c0-19.847,4.841-39.558,14-57.001C107.915,116.759,106.032,110.713,101.143,108.146z"></path>
                                                                <path
                                                                    d="M466.486,360.732c-0.012-0.436-0.044-0.892-0.114-1.324l-10-62c-0.782-4.846-4.964-8.408-9.873-8.408h-89.722     c23.905-47.183,36.022-84.27,36.022-110.35C392.8,80.142,312.658,0,214.15,0S35.5,80.142,35.5,178.65     c0,95.435,163.74,310.329,170.711,319.431c1.892,2.471,4.827,3.919,7.939,3.919s6.047-1.449,7.939-3.919     c0.275-0.359,23.494-30.74,52.411-73.167V490c0,5.523,4.477,10,10,10h172c5.523,0,10-4.477,10-10V361     C466.5,360.909,466.489,360.822,466.486,360.732z M437.984,309l6.774,42H296.242l6.774-42H437.984z M284.627,297.408l-10,62     c-0.084,0.519-0.127,1.066-0.127,1.592v27.973c-25.148,38.247-48.572,70.481-60.35,86.36     c-14.172-19.112-45.222-61.928-75.95-110.545C84.097,279.187,55.5,214.821,55.5,178.65C55.5,91.17,126.67,20,214.15,20     S372.8,91.17,372.8,178.65c0,24.519-12.964,61.638-38.522,110.35H294.5C289.592,289,285.409,292.562,284.627,297.408z M387.5,480     h-34v-68h34V480z M446.5,480h-39v-78c0-5.523-4.477-10-10-10h-54c-5.523,0-10,4.477-10,10v78h-39V371h152V480z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="card-title">Адрес</div>
                                            <div className="card-descr">
                                                <span>Ставрополь, ул. Доваторцев дом 38 офис 341</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="card-contact equal-elem" style={{height: 243}}>
                                            <div className="icon">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                                     x="0px" y="0px"
                                                     viewBox="0 0 521.7 522"
                                                     style={{enable_background:"new 0 0 521.7 522", xml:"space=preserve"}}>
                                                    {/*<style type="text/css">*/}
                                                    {/*    .st0{stroke - width:5;stroke-miterlimit:10;}*/}
                                                    {/*</style>*/}
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path className="st0" d="M372,205c1.7,4.1-0.2,8.8-4.2,10.5c-4.1,1.7-8.8-0.2-10.5-4.2c-2.2-5.2-4.9-10.2-8.1-14.8
												c-3.2-4.7-6.8-9.1-10.8-13.1l0,0c-4-4-8.4-7.7-13.1-10.8c-4.7-3.2-9.7-5.9-14.8-8.1c-4.1-1.7-5.9-6.4-4.2-10.4s6.4-6,10.4-4.2
												c6.2,2.7,12.1,5.9,17.5,9.5c5.6,3.8,10.8,8.1,15.5,12.7l0,0l0,0c4.7,4.7,9,9.9,12.7,15.4C366.2,192.9,369.4,198.8,372,205z"></path>
                                                                <path className="st0" d="M422.8,206.1c1.1,4.3-1.4,8.7-5.7,9.8c-4.3,1.1-8.7-1.4-9.8-5.7c-3.1-11.4-7.7-22.4-13.6-32.5
												c-5.9-10.2-13.2-19.6-21.6-28.1c-8.4-8.5-17.9-15.7-28.1-21.6c-10.1-5.9-21.1-10.5-32.5-13.5c-4.3-1.1-6.8-5.5-5.7-9.8
												c1.1-4.3,5.5-6.8,9.8-5.7c12.8,3.4,25,8.6,36.4,15.2c11.5,6.7,22,14.8,31.4,24.1c9.4,9.4,17.5,19.9,24.1,31.4
												C414.2,181.1,419.4,193.3,422.8,206.1z"></path>
                                                                <path className="st0" d="M472,206.6c0.8,4.3-2,8.5-6.3,9.4c-4.3,0.8-8.5-2-9.4-6.3c-3.5-17.7-9.7-34.7-18.1-50.5l-0.2-0.4
												c-8.4-15.6-19.2-30.1-32-42.9l0,0c-12.9-12.9-27.5-23.7-43.3-32.2c-15.8-8.4-32.8-14.6-50.5-18.1c-4.3-0.8-7.2-5.1-6.3-9.4
												c0.9-4.3,5.1-7.2,9.4-6.3c19.2,3.8,37.7,10.5,55,19.7c17.2,9.2,33.1,21,47.1,35l0,0c13.8,13.8,25.5,29.6,34.7,46.6l0.3,0.5
												C461.5,168.8,468.1,187.3,472,206.6z"></path>
                                                                <path className="st0" d="M513.4,423.5c3.6,2.6,4.3,7.6,1.7,11.2c-2.6,3.6-7.6,4.3-11.2,1.7l-124.7-91.4l-8.1,8.1l-12.9,12.9
												c-30.7,30.7-76.8,23.5-119.3-2.4c-15.9-9.7-31.3-22-45.1-35.8c-13.8-13.8-26.1-29.2-35.8-45.1c-25.9-42.5-33.2-88.5-2.7-119.1
												l21.2-21.2L90.8,25.1L52,63.6l0,0L51.7,64c-30.5,30.5-38.4,70.8-22.8,119.8C45,234.7,86.3,294.8,153.6,362.6l2.7,2.7l0,0
												c4.6,4.6,8.4,8.3,11.3,11.2c65.4,63.4,123.5,102.2,172.8,117.3c47.5,14.5,86.7,6.7,116.1-22.8l0.4-0.4l1-1l10.3-10.6
												c3.1-3.2,8.1-3.2,11.3-0.2c3.2,3.1,3.2,8.1,0.1,11.3l-10.3,10.6l0,0l-1,1l-0.4,0.5c-33.9,33.9-78.5,43.1-132.1,26.7
												c-51.8-15.8-112.1-56-179.3-121.1c-4.6-4.5-8.5-8.3-11.5-11.3l0,0l0,0l-2.7-2.7C73.1,304.2,30.6,242,13.6,188.7
												c-17.6-55.2-8.2-101,26.7-136l0.3-0.3l0,0l0,0l45.4-45C86.4,7,86.7,6.8,87,6.5c3.6-2.6,8.6-1.8,11.2,1.7L193.3,138
												c2.7,3.1,2.6,7.9-0.4,10.9L166.8,175c-24.3,24.3-17.2,63,5,99.4c9,14.7,20.5,29.1,33.5,42.1c13,13,27.4,24.5,42.1,33.5
												c36.4,22.2,75.2,29.2,99.6,4.7l12.9-12.9l12.9-12.9l0,0c2.7-2.7,7.1-3.2,10.4-0.8L513.4,423.5z"></path>
                                                                <path className="st0" d="M478.7,458.3c3.6,2.6,4.3,7.6,1.7,11.2c-2.6,3.6-7.6,4.3-11.2,1.7l-32.6-23.9l-32.6-23.9l-32.6-23.9
												c-3.6-2.6-4.3-7.6-1.7-11.2c2.6-3.6,7.6-4.3,11.2-1.7l32.6,23.9l32.6,23.9L478.7,458.3z"></path>
                                                                <path className="st0" d="M50.5,52.4c-2.6-3.6-1.8-8.6,1.7-11.2c3.6-2.6,8.6-1.8,11.2,1.7l23.9,32.6l23.9,32.6l23.9,32.6
												c2.6,3.6,1.8,8.6-1.7,11.2c-3.6,2.6-8.6,1.8-11.2-1.7l-23.9-32.6L74.4,85L50.5,52.4z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="card-title">Телефон</div>
                                            <div className="card-descr">
                                                <span>+7 (495) 999-99-99</span>
                                                <span>+7 (495) 999-99-99</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="card-contact equal-elem" style={{height: 243}}>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     version="1.1"
                                                     id="Capa_1" x="0px" y="0px" viewBox="0 0 516.375 516.375"
                                                     style={{enable_background: "new 0 0 516.375 516.375",
                                                         xml:"space=preserve"}}>
                                                    <g>
                                                        <g>
                                                            <rect x="133.875" y="191.25" width="248.625" height="19.125"></rect>
                                                            <rect x="133.875" y="133.875" width="248.625" height="19.125"></rect>
                                                            <path
                                                                d="M439.875,160.65V95.625c0-21.038-17.213-38.25-38.25-38.25h-78.412L258.188,0l-65.025,57.375H114.75    c-21.038,0-38.25,17.212-38.25,38.25v65.025l-57.375,49.725v267.75c0,21.037,17.212,38.25,38.25,38.25H459    c21.037,0,38.25-17.213,38.25-38.25v-267.75L439.875,160.65z M439.875,185.513l28.688,24.862l-28.688,24.862V185.513z     M258.188,24.862l36.338,32.513h-74.588L258.188,24.862z M95.625,95.625c0-11.475,7.65-19.125,19.125-19.125h286.875    c9.562,0,19.125,9.562,19.125,19.125v154.912L359.55,306H156.825l-61.2-53.55V95.625z M296.438,363.375L296.438,363.375h-65.025    h32.512h-43.987l-42.075-38.25H336.6L296.438,363.375L296.438,363.375z M76.5,185.513v51.637l-28.688-26.775L76.5,185.513z     M43.987,491.513c-3.825-3.825-5.737-7.65-5.737-13.388V353.812V229.5l153,133.875L43.987,491.513z M66.938,497.25L200.812,382.5    h114.75l133.875,114.75H66.938z M478.125,353.812v124.312c0,5.737-1.912,9.562-5.737,13.388L325.125,363.375l153-133.875V353.812z    "
                                                                fill="#2ec6c8"></path>
                                                            <rect x="133.875" y="248.625" width="248.625" height="19.125"></rect>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="card-title">Почта</div>
                                            <div className="card-descr">
                                                <span>yourwebpixel@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="card-contact equal-elem" style={{height: 243}}>
                                            <div className="icon">
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                     x="0px" y="0px"
                                                     viewBox="0 0 520 520" style={{enable_background: "new 0 0 520 520",
                                                    xml:"space=preserve"}}>
                                                    {/*<style type="text/css">*/}
                                                    {/*.st0{{stroke_width:8, stroke_miterlimit:10}}*/}
                                                    {/*</style>*/}
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path className="st0" d="M403,256h-28.6l2.6-25.1c0.4-4.8-3-9.1-7.8-9.5s-9.1,3-9.5,7.8l-20.4,214.5c-3,31.2-29,55-60.2,55H162.9
												c-31.6,0-57.6-23.4-60.2-55l-19.5-205H260c4.8,0,8.7-3.9,8.7-8.7s-3.9-8.7-8.7-8.7H77.9c-0.9,0-1.3,0-2.2,0.4
												c-0.9-0.4-2.2-0.4-3-0.4c-4.8,0.4-8.2,4.8-7.8,9.5l20.4,214.5c3.5,40.4,36.8,70.7,77.6,70.7H279c40.3,0,73.7-30.3,77.6-70.6
												l1.7-20.4H403c28.6,0,52-23.4,52-52v-65C455,279.4,431.7,256,403,256z M403,407.7h-42.9l12.6-134.4h29.9
												c19.1,0,34.7,15.6,34.7,34.7v65h0.4C437.8,392.1,422.2,407.7,403,407.7z"></path>
                                                                <path className="st0" d="M290.3,230c0,4.8,3.9,8.7,8.7,8.7h13c4.8,0,8.7-3.9,8.7-8.7s-3.9-8.7-8.7-8.7h-13
												C294.3,221.3,290.3,225.2,290.3,230z"></path>
                                                                <path className="st0" d="M147.8,184.5c0.9,3.9,4.8,6.5,8.2,6.5c0.9,0,1.7,0,2.2-0.4c4.8-1.3,7.4-6.1,6.1-10.8l-9.5-33.8
												c-4.3-14.7-2.2-30.3,5.6-43.8l3.5-5.6c6.5-11.3,10-23,10-35.1c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7
												c0,9.1-2.6,17.8-7.4,26.4l-3.5,5.6c-10.4,17.3-13,38.1-7.4,57.6L147.8,184.5z"></path>
                                                                <path className="st0" d="M212.8,184.5c0.9,3.9,4.8,6.5,8.2,6.5c0.9,0,1.7,0,2.2-0.4c4.8-1.3,7.4-6.1,6.1-10.8l-9.5-33.8
												c-4.3-14.7-2.2-30.3,5.6-43.8l3.5-6.1c9.1-16,12.1-35.1,8.2-53.7l-7.8-31.6c-1.3-4.8-5.6-7.4-10.4-6.5c-4.8,1.3-7.4,5.6-6.5,10.4
												l7.8,31.2c3,13.9,0.9,28.6-6.1,40.7l-3.5,5.6c-10.4,17.3-13,38.1-7.4,57.6L212.8,184.5z"></path>
                                                                <path className="st0" d="M277.8,184.5c0.9,3.9,4.8,6.5,8.2,6.5c0.9,0,1.7,0,2.2-0.4c4.8-1.3,7.4-6.1,6.1-10.8l-9.5-33.8
												c-4.3-14.7-2.2-30.3,5.6-43.8c2.6-4.3,0.9-9.5-3-11.7c-4.3-2.6-9.5-0.9-11.7,3c-10.4,17.3-13,38.1-7.4,57.6L277.8,184.5z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="card-title">Мы в соц. сетях</div>
                                            <div className="card-descr">
                                                <div className="socials">
                                                    <Link to="" className="social"><i className="fa fa-twitter"></i></Link>
                                                    <Link to="" className="social"><i className="fa fa-facebook"></i></Link>
                                                    <Link to="" className="social"><i className="fa fa-vk"></i></Link>
                                                    <Link to="" className="social"><i
                                                        className="fa fa-instagram"></i></Link>
                                                    <Link to="" className="social"><i className="fa fa-vimeo"></i></Link>
                                                    <Link to="" className="social"><i className="fa fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="map">
                            <div className="container">
                                <div className="map-container">
                                </div>
                            </div>
                        </section>

                        <section className="question">
                            <div className="container">
                                <h3 className="lite-title">У Вас есть вопросы?</h3>
                                <span className="lite-descr">Оставьте свое сообщение и мы обязательно Вам ответим</span>
                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
                                        <form>
                                            <div className="left-block-form">
                                                <label>Ваше имя<input type="text" name="Имя" id="name"
                                                                      required="" /></label>
                                                <label>Ваш телефон<input type="tel" name="Телефон" required=""
                                                                         className="phone_ru" maxLength="17" /></label>
                                            </div>
                                            <div className="right-block-form">
                                                <label>Ваша фамилия<input type="text" name="Фамилия" id="surname"
                                                                          required="" /></label>
                                                <label>Ваш e-mail<input type="email" name="e-mail" required=""
                                                                        pattern="\S+@[a-z]+.[a-z]+" /></label>
                                            </div>
                                            <label className="massage">Ваш вопрос<textarea name="Вопрос"
                                                                                           id="text"></textarea></label>
                                            <div className="button-wrapp">
                                                <button className="btn">Отправить сообщение</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="question2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
                                        <div className="user-iamge"><img src="img/home/Reid_Circle.jpg"
                                                                         alt="Олег Дубровский" /></div>
                                        <div className="user-name">Евгений Смирнов</div>
                                        <form>
                                            <label className="massage">Ваше сообщение<textarea name="Вопрос"
                                                                                               id="text"></textarea></label>
                                            <div className="button-wrapp">
                                                <button className="btn">Отправить сообщение</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default Contacts;