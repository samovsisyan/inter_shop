import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CategorysMenu extends Component {
    render() {
        return (
            <div>
                <ul className="megamnu-dropdown dropdown-menu">
                    <li><Link to="category-page.html">Обувь</Link></li>
                    <li><Link to="category-page.html">Футболки и топы</Link></li>
                    <li><Link to="category-page.html">Худи и толстовки</Link></li>
                    <li><Link to="category-page.html">Куртки и жилеты</Link></li>
                    <li><Link to="category-page.html">Брюки и тайтсы</Link></li>
                    <li><Link to="category-page.html">Шорты</Link></li>
                    <li><Link to="category-page.html">Аксессуары и снаряжение</Link></li>
                    <li><Link to="category-page.html">Куртки и жилеты</Link></li>
                    <li><Link to="category-page.html">Брюки и тайтсы</Link></li>
                    <li><Link to="category-page.html">Шорты</Link></li>
                    <li><Link to="category-page.html">Аксессуары и снаряжение</Link></li>
                    <li><Link to="category-page.html">Шорты</Link></li>
                </ul>
            </div>
        );
    }
}

export default CategorysMenu;