import style from './style.module.scss';

export default function Header() {
    return (
        <>
            <div className={style.contacts}>
                <div className={style.info}>
                    <div className={style.phone}></div>
                    <p>(414) 857 - 0107</p>
                    <div className={style.postcard}></div>
                    <p>yummy@bistrobliss</p>
                </div>
                <div className={style.media}>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.third}></div>
                    <div className={style.fourth}></div>
                </div>
            </div>

            <div className={style.navigation}>
                <div className={style.logo}>
                    <div className={style.logoImg}></div>
                    <h1>Bistro Bliss</h1>
                </div>
                <nav></nav>
                <div className={style.buttonBook}></div>
            </div>
        </>
    )
}
