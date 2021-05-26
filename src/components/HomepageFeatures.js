import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Integrate with your dbt projects',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Metriql integrates with <a target="_blank" href="https://getdbt.com">dbt</a> and maps dbt resources as <a href="/tutorial/for-dbt-users">datasets</a>. It can also create automatic dbt roll-up models to save data teams time.
      </>
    ),
  },
  {
    title: 'Define your metrics centrally',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Define metrics centrally in a single place for once and all. No more defining metrics for each data tool one by one.
      </>
    ),
  },
  {
    title: 'Consume your metrics reliably',
    // Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Synchronize your metrics to your BI tools or build embedded analytics applications via the REST API. 
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
