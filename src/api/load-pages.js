import config from '../config';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/pages/${cleanSlug}`;

  // const raw = await fetch(url); // Correct
  const raw = await fetch(config.url); // With this because it's without server
  const json = await raw.json();
  const { attributes } = json.data[0];
  const pageData = mapData([attributes]);
  const data = pageData;

  return data;
};
