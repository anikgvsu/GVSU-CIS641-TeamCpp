# Team C++

## Project Description

Buddy Bites is not just another event planning app; it's your go-to solution for hosting memorable and customized gatherings. Whether you're organizing a cozy dinner, a lively party, or a professional networking event, Buddy Bites is designed to simplify your event planning journey.

With Buddy Bites, you can create events effortlessly. Specify the event details, and invite your guests, all from one intuitive platform. Say goodbye to the hassle of coordinating events through multiple channels.

Delight your guests with culinary creations tailored to their preferences and dietary habits. Our app helps you discover recipes that match your guests' tastes, ensuring everyone leaves with a satisfied palate.

Build communities with like-minded individuals who share your interests. Invite your community members to your events or discover events organized by others in your community. Buddy Bites fosters connections beyond the event, making every gathering more meaningful.

Your privacy is our priority. Buddy Bites aggregates guest dietary preferences, presenting them as a collective summary to hosts. Individual information remains confidential, creating a secure and trustworthy environment for all users. Welcome to Buddy Bites – where event planning meets simplicity and connection!

## Team Members and Roles

* [Mohammad Shafiqul Islam](https://github.com/anikgvsu/CIS641-HW2-Islam) - Overseeing UI/UX design, managing user registration, verification, and authentication processes, handling event management, Firebase backend development, and ensuring the final deployment to Expo.

* [S M Azizul Hakim](https://github.com/azizHakim/CIS641-HW2-Hakim) - Spearheading Google Maps integration, orchestrating Recipe API integration, contributing to the community feature, and leading the development of the hangout feature.

## Prerequisites

Ensure you have the following tools and dependencies installed:

* [Node.js](https://nodejs.org/)
* [React Native](https://reactnative.dev/)
* [Firebase](https://firebase.google.com/)
* [Expo](https://expo.dev/)

You will also need API keys for the following services:

* [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Spoonacular API Key](https://spoonacular.com/food-api)

Update the `api_key.js` file with your API keys:

```javascript
// api_key.js

// Google Maps API Key
export const maps_KEY = 'YOUR_GOOGLE_MAPS_KEY';

// Spoonacular API Key
export const apiKey = 'YOUR_SPOONCULAR_API_KEY';
```

Create a Firebase project and update the `fb-credentials.js` file with your Firebase project configuration:

```javascript
// fb-credentials.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

## Run Instructions

1. Clone the repository: `git clone https://github.com/anikgvsu/GVSU-CIS641-TeamCpp.git`
2. Navigate to the project folder: `cd src`
3. Install dependencies: `npm install`
4. Start the application: `expo start`
5. Follow the Expo CLI instructions to run the app on an emulator or a physical device.