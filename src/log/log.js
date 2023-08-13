import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB06qDA6ukOZyiFmheIMnyZKypSoT7CESY',
  authDomain: 'camiverse-31.firebaseapp.com',
  projectId: 'camiverse-31',
  storageBucket: 'camiverse-31.appspot.com',
  messagingSenderId: '835441545765',
  appId: '1:835441545765:web:061f8fb958ff580cd425cc',
  measurementId: 'G-M33E0CDWK0',
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};