export const defaultConfig = {
    API_URL: 'http://13.229.224.211/api/',
  };
  
  export const App = {
    config: defaultConfig,
  };
  
  window.env  = window.env || defaultConfig;
  App.config = {...window.env};
  
  export const API_URL = () => App.config.API_URL;
  