# 🌤️ Weather App – Next.js 16 + Open-Meteo API

A simple and modern weather application built with **Next.js 16 (App Router)**.  
It displays real-time weather data, daily & hourly forecasts, and detailed weather info using **Open-Meteo API**.

## 📦 Features

- 🌡 **Current Weather Info** (temp, humidity, wind speed, UV index)
- 📅 **7-Day Daily Forecast**
- ⏳ **24-Hour Hourly Forecast**
- 🔄 **Switch Temperature Unit (°C / °F)**
- 📍 **Weather based on location (search or default city)**

# Copy env example and create your local environment file

## 🔗 API Used

This project uses the **Open-Meteo API**:

# Open-Meteo Geocoding API(Search Place)

https://geocoding-api.open-meteo.com/v1/search

# Website (Docs):

https://open-meteo.com/en/docs/geocoding-api

# Open-Meteo Weather Forecast API

https://api.open-meteo.com/v1/forecast

# Example query

https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m

# Website (Docs):

https://open-meteo.com/en/docs

▶️ How to Run Locally
npm install
npm run dev

📦 Build for Production
npm run build
npm start
