# Netflix Clone

A Netflix clone built using React.js, CSS, and React Router. This project mimics the look and feel of Netflix, providing features like browsing popular movies, viewing details, and watching trailers.

**Live Demo**: [Netflix Clone](https://netflix-clone-git-main-muaaz-naeems-projects.vercel.app/)

## Features

- **Responsive Design**: The app is fully responsive, adapting to various screen sizes from desktop to mobile.
- **Movie Listings**: Fetches real-time data from the **TMDB API** (The Movie Database) to display the latest movies.
- **Play Trailers**: Click on a movie to watch its trailer embedded from YouTube.
- **User Authentication**: Sign up and sign-in functionalities (with simple form handling).
- **Customizable Pages**: Different movie categories such as "Top Picks", "Popular", "Top Rated", etc.

## Screenshots

- Home screen showing the main banner and movie titles.
- Video player page with embedded trailers.

## Tech Stack

- **Frontend**: React.js, React Router, CSS, HTML
- **API**: The Movie Database (TMDB)
- **Styling**: Custom CSS for layout and design
- **Hosting**: Vercel (Live site deployment)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/mkgdevelopers/netflix-clone.git
    ```

2. **Navigate to the project directory**
    ```bash
    cd netflix-clone
    ```

3. **Install dependencies**
    ```bash
    npm install
    ```

4. **Create an `.env` file** in the root directory and add your TMDB API key.
    ```bash
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

5. **Start the development server**
    ```bash
    npm start
    ```

   Your app will be live at `http://localhost:3000`.

## API Integration

The app fetches movie data from the **TMDB API**:

- **API endpoint**: `https://api.themoviedb.org/3/movie/{category}?language=en-US&page=1`
- **Categories**:
    - `now_playing`
    - `top_rated`
    - `popular`
    - `upcoming`
  
For accessing API data, you'll need to add your **TMDB API Key**.

## Features to Add

- **User Profiles**: Allow users to create and manage their profiles.
- **Watchlist**: Enable users to add movies to a personal watchlist.
- **User Reviews**: Users can leave reviews for movies.

## Issues & Contributions

Feel free to fork this project and open pull requests. If you encounter any issues or have suggestions, create an **issue** on GitHub.

## License

This project is licensed under the **MIT License**.
