import style from './style.module.scss';


export default function dishInfo() {
 return (
        <>
            <div className={style.wrapper}>
                <div className={style.image}></div>
                <div className={style.info}>
                    <h1>Fried Eggs</h1>
                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    <h2>Total: $ 9.99</h2>
                </div>
            </div>
        </>
    )
}
