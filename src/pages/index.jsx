import P from 'prop-types';
// import Head from 'next/head';
// import styled from 'styled-components';

import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const pageData = mapData([attributes]);
  const data = pageData;

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
