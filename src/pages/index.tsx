import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'; // Vamos criar este CSS logo abaixo

// 1. Definição da Interface do Produto
interface ProductItem {
  title: string;
  acronym: string; // Ex: 'Sh', 'Tu'
  description: string;
  link: string;
  color: string;   // A cor da marca do produto
}

// 2. Dados dos Produtos (Adicionei as cores próximas das originais)
const ProductList: ProductItem[] = [
  {
    title: 'Shio CMS',
    acronym: 'Sh',
    description: 'Model Content, Use GraphQL and Create Site using Javascript with Native Cache and Search.',
    link: '/docs/cms/intro',
    color: '#00b894', // Verde estilo Shio
  },
  {
    title: 'Turing ES',
    acronym: 'Tu',
    description: 'Semantic Navigation, Chatbot using Search Engine and NLP Vendors.',
    link: '/docs/es/intro',
    color: '#0984e3', // Azul estilo Turing
  },
];

// 3. Componente do Card de Produto
function ProductCard({title, acronym, description, link, color}: ProductItem) {
  return (
    <div className={clsx('col col--6')}>
      <Link to={link} className={styles.productCard}>
        <div className={styles.cardHeader}>
          {/* O Ícone Quadrado Colorido */}
          <div className={styles.acronymBox} style={{ backgroundColor: color }}>
            {acronym}
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.cardBody}>
          <p>{description}</p>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.learnMore} style={{ color: color }}>
            Read Documentation &rarr;
          </span>
        </div>
      </Link>
    </div>
  );
}

// 4. Componente do Cabeçalho (Hero)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

// 5. Página Principal
export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation about Viglet Products">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {ProductList.map((props, idx) => (
                <ProductCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}