import style from './style.module.scss';

export default function AboutPage() {
    return (
        <>
            <section className={style.healtyFood}>
                <div className={style.wrapper}>
                    <div className={style.pastaImg}></div>
                    <div className={style.information}>
                        <h1>We provide healthy food for your family.</h1>
                        <p1>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p1>
                        <p2>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p2>
                    </div>
                </div>

            </section>

            <section className={style.guests}>
                <div className={style.statistic}>
                    <div className={style.textInfo}>
                        <h2>A little information for our valuable guest</h2>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                </div>
                <div className={style.imgCook}></div>
            </section>
        </>
    )
}