import ImgBreakfast from '@/components/ImgBreakfast/ImgBreakfast';
import style from './style.module.scss';
import ImgEvents from '@/components/ImgEvents/ImgEvents';


const breakfastArr = [{
    "id": "1",
    "h3": "Breakfast",
    "p": "In the new era of technology we look in the future with certainty and pride for our life.",
}, {
    "id": "2",
    "h3": "Main Dishes",
    "p": "In the new era of technology we look in the future with certainty and pride for our life.",
}, {
    "id": "3",
    "h3": "Drinks",
    "p": "In the new era of technology we look in the future with certainty and pride for our life.",
}, {
    "id": "4",
    "h3": "Desserts",
    "p": "In the new era of technology we look in the future with certainty and pride for our life.",
}];

const eventsArr = [{
    "id": "1",
    "h5": "Caterings",
    "p": "In the new era of technology we look in the future with certainty and pride for our life."
},
{
    "id": "2",
    "h5": "Birthdays",
    "p": "In the new era of technology we look in the future with certainty and pride for our life."
},
{
    "id": "3",
    "h5": "Weddings",
    "p": "In the new era of technology we look in the future with certainty and pride for our life."
},
{
    "id": "4",
    "h5": "Events",
    "p": "In the new era of technology we look in the future with certainty and pride for our life."
}];

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
                <div className={style.meals}>
                    {breakfastArr.map((el, index) =>
                        <div className={style.breakfast} key={index}>
                            <ImgBreakfast id={el.id} />
                            <h3>{el.h3}</h3>
                            <p>{el.p}</p>
                            <h4>Explore menu</h4>
                        </div>
                    )}
                </div>

            </section>

            <section className={style.events}>
                <h6>We also offer unique services for your events</h6>
                <div className={style.pins}>
                    {eventsArr.map((el, index) =>
                        <div className={style.cards} key={index}>
                            <ImgEvents id ={el.id}/>
                            <h5>{el.h5}</h5>
                            <p>{el.p}</p>
                        </div>)}
                </div>
            </section>

        </>
    )
}
