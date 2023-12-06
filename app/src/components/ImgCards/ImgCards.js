import style from './style.module.scss';

export default function ImgBreakfast({ id }) {

    switch (id) {
        case '1':
            return (
                <div className={style.eggs}>
                </div>
            );
        case '2':
            return (
                <div className={style.pizza}></div>
            );
        case '3':
            return (
                <div className={style.wine}></div>
            );

        case '4':
            return (
                <div className={style.cake}></div>
            );

        case '5':
            return (
                <div className={style.mohito}></div>
            );
        case '6':
            return (
                <div className={style.icecream}></div>
            );

        case '7':
            return (
                <div className={style.burger}></div>
            );

        case '8':
            return (
                <div className={style.pancake}></div>
            );

        default:
            return
    }
}