import Header from '@/components/Header/Header'
import style from './style.module.scss'
import Footer from '@/components/Footer/Footer'


export default function HomePage() {
    return (
        <>
           
            <section className={style.preview}>
                <div className={style.wrapper}>
                    <h1>Best food for your taste</h1>
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                    <div className={style.buttons}>
                        <div className={style.firstButton}>Book a Table</div>
                        <div className={style.secondButton}>Explore Menu</div>
                    </div>
                </div>
            </section>

            <section className={style.menu}>
                <h2>Browse Our Menu</h2>
                <div className={style.breakfast}>
                    <div className={style.cupImg}></div>
                    <h3>Breakfast</h3>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h4>Explore menu</h4>
                </div>
                <div className={style.mainDishes}>
                    <div className={style.dishImg}></div>
                    <h3>Main Dishes</h3>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h4>Explore menu</h4>
                </div>
                <div className={style.drinks}>
                    <div className={style.drinkImg}></div>
                    <h3>Drinks</h3>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h4>Explore menu</h4>
                </div>
                <div className={style.desserts}>
                    <div className={style.cakeImg}></div>
                    <h3>Desserts</h3>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h4>Explore menu</h4>
                </div>
            </section>

            <section className={style.events}>
                <div className={style.pins}>
                    <div className={style.caterings}>
                        <div className={style.caterinImg}></div>
                        <h5>Caterings</h5>
                        <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    </div>
                    <div className={style.birthdays}>
                        <div className={style.birthdayImg}></div>
                        <h5>Birthdays</h5>
                        <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    </div>
                    <div className={style.weddings}>
                        <div className={style.weddingImg}></div>
                        <h5>Caterings</h5>
                        <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    </div>
                    <div className={style.events}>
                        <div className={style.eventImg}></div>
                        <h5>Events</h5>
                        <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    </div>
                </div>
            </section>
           
        </>
    )
}
