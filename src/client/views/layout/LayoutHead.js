import Head from 'next/head';
import PropTypes from 'prop-types';

const config = {
  google: 'UA-119418003-1',
};

const LayoutHead = (props) => {
  const { title } = props;
  return (
    <Head>
      <title>{ title.toUpperCase() || 'TOP' }-- Draw Sunflower</title>
      <meta charSet="utf-8" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.google}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};
gtag('js', new Date());gtag('config', '${config.google}');
              `,
        }}
      />
    </Head>
  );
};

LayoutHead.propTypes = {
  title: PropTypes.string,
};

LayoutHead.defaultProps = {
  title: '',
};

export default LayoutHead;
