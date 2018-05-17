import Head from 'next/head';
import PropTypes from 'prop-types';

const LayoutHead = (props) => {
  const { title } = props;
  return (
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
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
