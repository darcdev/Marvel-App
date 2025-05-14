import variablesConfig from '../config/variables';

const getMarvelApiUrl = (url?: string, queryParams?: string) => {
  return `${variablesConfig.marvelUrl}/${url}${
    queryParams ? `?${queryParams}` : ''
  }${queryParams ? '&' : '?'}ts=${variablesConfig.marvelTimestamp}&apikey=${
    variablesConfig.marvelApiKey
  }&hash=${variablesConfig.marvelHash}`;
};

export default getMarvelApiUrl;
