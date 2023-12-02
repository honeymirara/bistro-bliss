import style from './style.module.scss';

export default function ImgBreakfast({ id }) {

    switch (id) {
        case '1':
            return (
                <div className={style.cupImg}>
                </div>
            );
        case '2':
            return (
                <div className={style.dishImg}></div>
            );
        case '3':
            return (
                <div className={style.drinkImg}></div>
            );

        case '4':
            return (
                <div className={style.cakeImg}></div>
            );
            
        default:
            return
    }
}