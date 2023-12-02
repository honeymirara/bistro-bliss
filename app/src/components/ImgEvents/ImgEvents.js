import style from './style.module.scss';

export default function ImgEvents({ id }) {

    switch (id) {
        case '1':
            return (
                <div className={style.caterinImg}>
                </div>
            );
        case '2':
            return (
                <div className={style.birthdayImg}></div>
            );
        case '3':
            return (
                <div className={style.weddingImg}></div>
            );

        case '4':
            return (
                <div className={style.eventImg}></div>
            );
            
        default:
            return
    }
}