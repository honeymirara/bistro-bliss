'use client'

import style from './style.module.scss';
import ImgCards from '@/components/ImgCards/ImgCards';
import Link from 'next/link';


const cardArr = [{
    "id": "1",
    "h1": "$ 9.99",
    "h2": "Fried Eggs",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
}, {
    "id": "2",
    "h1": "$ 15.99",
    "h2": "Hawaiian Pizza",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "3",
    "h1": "$ 7.25",
    "h2": "Martinez Cocktail",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "4",
    "h1": "$ 20.99",
    "h2": "Butterscotch Cake",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "5",
    "h1": "$ 5.89",
    "h2": "Mint Lemonade",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "6",
    "h1": "$ 18.05",
    "h2": "Chocolate Icecream",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "7",
    "h1": "$ 12.55",
    "h2": "Cheese Burger",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
},
{
    "id": "8",
    "h1": "$ 12.99",
    "h2": "Classic Waffles",
    "p": "Made with eggs, lettuce, salt, oil and other ingredients."
}]


export default function menu() {

    function getResult(e){
        console.log(e.currentTarget)
    }
   
    return (
        <>
            <section className={style.menuWrap}>
                <div className={style.info}>
                    <h1>Our Menu</h1>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

                </div>
                <div className={style.cards}>
                    {cardArr.map((el, index) =>
                        <div className={style.dishes} key={index} onClick={getResult}>
                            <ImgCards id={el.id} />
                           <Link href={`/menu/${el.id}`} ><h1>{el.h1}</h1></Link> 
                            <h2>{el.h2}</h2>
                            <p>{el.p}</p>
                        </div>)}
                </div>
            </section>
        </>)
}