
# Next.js Weather App

This is a weather application built with Next.js, Chart.js, Axios, and TailwindCSS. It fetches weather data from the Open-Meteo API and displays a temperature trend using a line chart.

## Features

- Automatic geolocation to fetch the current weather.
- Manual location input (latitude and longitude) to fetch weather for a specific location.
- Displays weather conditions (temperature, windspeed, humidity, pressure) and visual icons.
- Hourly temperature trend visualization using Chart.js.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>=14.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. Navigate into the project directory:

   ```bash
   cd repository-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. (Optional) Create a `.env` file if you need environment-specific configurations.

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

3. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Project Structure

```
- app/
  - api/
    - weather/
      - route.ts  // API route for weather data
  - page.tsx  // Main page with weather and chart
- public/
- styles/
  - globals.css  // Global styles with TailwindCSS
- tailwind.config.js  // TailwindCSS config
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

### Deployment

To deploy the app, you can use platforms like [Vercel](https://vercel.com) (creators of Next.js). You can find detailed instructions in the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
