import React from 'react';
import '../../src/assets/css/shoes.css';
import { Product } from '../components/Products/Product';
import shoe1 from '../assets/img/shoes1.jpg';
import shoe2 from '../assets/img/shoes2.jpg';
import shoe3 from '../assets/img/shoes3.jpg';
import shoe4 from '../assets/img/shoes4.jpg';
import shoe5 from '../assets/img/shoes5.jpg';

export const Shoes = (props) => {

    const productData = [
        {
            image: shoe1,
            name: 'Shoe 1',
            brand: 'test brand',
            price: '$40',
            rating: 3.2
        },
        {
            image: shoe2,
            name: 'Shoe 2',
            brand: 'test brand 2',
            price: '$80',
            rating: 2.2
        },
        {
            image: shoe3,
            name: 'Shoe 3',
            brand: 'test brand 3',
            price: '$55',
            rating: 4.2
        },
        {
            image: shoe4,
            name: 'Shoe 4',
            brand: 'test brand 4',
            price: '$60',
            rating: 1.6
        },
        {
            image: shoe5,
            name: 'Shoe 5',
            brand: 'test brand 5',
            price: '$20',
            rating: 4
        },                
    ]
    const category = props;
    console.log(category)


    return (
        <main class="main">
            
            <div class="content">
                <ul class="products">
                    <Product data={productData} />
                </ul>
            </div>
        </main>
    );
}