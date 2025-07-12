import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  src: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Desteği ve ARGE Platformu',
    src: require('@site/static/img/rdforce_logo.png').default,
    description: (
      <>
       RDForce, akıllı öneriler, otomatik dokümantasyon ve yapay zeka destekli karar desteğiyle Ar-Ge projelerinizi planlamanıza, izlemenize ve geliştirmenize yardımcı olur;
      hepsi tek bir yerde.
      </>
    ),
  },
  {
    title: 'Fikirden Uygulamaya',
    src: require('@site/static/img/rdforce_logo.png').default,
    description: (
      <>
        Yenilikçi fikirleri zahmetsizce yapılandırılmış projelere dönüştürün.
        RDForce, her özelliği izlenebilir dokümantasyona, görevlere ve ölçülebilir ilerlemeye dönüştürür.
      </>
    ),
  },
  {
    title: 'Sürekli Gelişen İçin Tasarlandı',
    src: require('@site/static/img/rdforce_logo.png').default,
    description: (
      <>
        İster bir girişimde ister kurumsal bir laboratuvarda olun,
        RDForce, teknoloji ve Ar-Ge ekiplerinin iş birliği yapmasına,
        uyum içinde kalmasına ve anlamlı sonuçlara odaklanmasına yardımcı olmak için tasarlanmıştır.
      </>
    ),
  },
];

function Feature({title, src, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
