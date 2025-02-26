export const defaultConfig = {
    API_URL: 'https://nate-davenport-33982-staging.botics.co/',
  };
  
  export const App = {
    config: defaultConfig,
  };
  
  window.env  = window.env || defaultConfig;
  App.config = {...window.env};
  
  export const API_URL = () => App.config.API_URL;
  