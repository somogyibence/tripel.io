import styles from '../styles/Hero.module.css';
import useTranslation from 'next-translate/useTranslation';

export default function Hero() {
  const { t } = useTranslation('hero');
  return <section className={styles.hero}>
    <div className="container">
      <div className={styles.hero__logo}>
        <img className={styles.hero__logo__img} src="/tripelio.svg" alt="Tripelio" width="150" height="42"/>
      </div>

      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: t('Your carefully selected favourites') }}/>

            <p>{t('promise')}</p>

            <span className={styles.hero__cta}>{t('All percent inspiration, no percent perspiration')}</span>
          </div>
        </div>

        <div className={styles.hero__content__preview}>
          <picture>
            <source srcSet="/dashboard.webp" type="image/webp"/>
            <source srcSet="/dashboard.jpg" type="image/jpeg"/>
            <img src="/dashboard.jpg" alt="Product dashboard" width="600" height="427"/>
          </picture>
        </div>
      </div>
    </div>

    <div className={styles.hero__map}/>
  </section>;
}
