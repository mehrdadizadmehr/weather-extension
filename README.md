
# Next.js Weather App

This is a weather application built with Next.js, Chart.js, Axios, and TailwindCSS. It fetches weather data from the Open-Meteo API and displays a temperature trend using a line chart.

## Created by

This project was created by **Mehrdad Izadmehr**.

## Features

- Automatic geolocation to fetch the current weather.
- Manual location input (latitude and longitude) to fetch weather for a specific location.
- Displays weather conditions (temperature, windspeed, humidity, pressure) and visual icons.
- Hourly temperature trend visualization using Chart.js.

## Developer Setup Guide

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>=14.x)
- **npm** or **yarn**
- **Git**

### Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:

   Open your terminal and clone the repository using Git:

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

   Replace `username` and `repository-name` with your GitHub username and repository name.

2. **Navigate into the project directory**:

   ```bash
   cd repository-name
   ```

3. **Install dependencies**:

   Run the following command to install all required dependencies for the project:

   ```bash
   npm install
   ```

4. **Set up environment variables** (optional):

   If the project uses environment variables, create a `.env` file in the root directory. Add any necessary environment variables as instructed in the project.

   Example `.env` file:

   ```
   API_KEY=your_api_key
   ```

5. **Run the development server**:

   Start the development server with the following command:

   ```bash
   npm run dev
   ```

6. **Open the project in your browser**:

   After running the development server, open your browser and go to:

   ```
   http://localhost:3000
   ```

7. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Project Structure

```
- app/
  - api/
    - weather/
      - route.ts  // API route for weather data
  - globals.css  // Global styles with TailwindCSS
  - layout.tsx   // Layout wrapper for the app
  - page.tsx     // Main page with weather and chart
- public/
- tailwind.config.js  // TailwindCSS configuration
- README.md  // Project documentation
```

### Running in Production

To run the project in production mode:

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

### Testing (Optional)

If the project includes tests, you can run them with the following command:

```bash
npm run test
```

### Built With

- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Open-Meteo API](https://open-meteo.com/)

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository: [Next.js GitHub](https://github.com/vercel/next.js).



### License

This project is created by **Mehrdad Izadmehr** and is free to use for any developer.
