import Icons from './Icons';
import style from './style.module.scss';

export default function Header() {
    return (
        <>
            <div className={style.contacts}>
                <div className={style.info}>
                    <div className={style.firstBlock}>
                        <div className={style.phone}></div>
                        <p>(414) 857 - 0107</p>
                    </div>
                    <div className={style.secondBlock}>
                        <div className={style.postcard}></div>
                        <p>yummy@bistrobliss</p>
                    </div>

                </div>
                <div className={style.media}>
                    <Icons id='bird' />
                    <Icons id='facebook' />
                    <Icons id='insta' />
                    <Icons id='github' />
                </div>
            </div>

            <div>
                <div className={style.navigation}>
                    <div className={style.logo}>
                        <div className={style.logoImg}></div>
                        <h1>Bistro Bliss</h1>
                    </div>
                    <nav className={style.nav}>
                        {/* <Link href={'/'}> <p className={pathname === '/' ? style.active : null}>Home</p> </Link>
                        <Link href={'/about'}> <p className={pathname === '/about' ? style.active : null}>About</p> </Link>
                        <Link href={'/menu'}> <p className={pathname === '/menu' ? style.active : null}>Menu</p> </Link> */}
                    </nav>
                    <div className={style.buttonBook}></div>
                </div>
            </div>

        </>
    )
}
