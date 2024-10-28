import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    src: require('@site/static/img/example1.png').default,
    description: (
      <>
        The Mixer App is designed to feel integrated with the windows system, making it easy to understand and use.
      </>
    ),
  },
  {
    title: 'Features',
    src: require('@site/static/img/example2.png').default,
    description: (
      <>
        Mixer allows you to change the volume on any individual application, speaker or microphone.
      </>
    ),
  },
  {
    title: 'Powered by React',
    src: require('@site/static/img/example3.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
