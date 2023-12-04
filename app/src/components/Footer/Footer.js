import style from './style.module.scss';


export default function Footer() {
  return (

    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <div className={style.logo}>
            <div className={style.imgFood}></div>
            <h1>Bistro Bliss</h1>
          </div>
          <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
        </div>

        <div className={style.pages}>
          <h2>Pages</h2>
          <div className={style.paragraphs}>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Contacts</p>
            <p>Delivery</p>
          </div>

        </div>
        <div className={style.upages}>
          <h2>Utility Pages</h2>
          <div className={style.paragraphs}>
            <p>Start Here</p>
            <p>Styleguide</p>
            <p>Password Protected</p>
            <p>404 Not Found</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>View More</p></div>
        </div>
        <div className={style.follow}>
          <h2>Follow Us On Instagram</h2>
          <div className={style.images}>
            <div className={style.first}></div>
            <div className={style.second}></div>
            <div className={style.third}></div>
            <div className={style.fourth}></div>
          </div>

        </div>

      </div>
      <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

    </>

  )
}
