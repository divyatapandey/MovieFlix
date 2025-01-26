# MovieFlix 

LiveLink: https://movieflix-dgmg.onrender.com
- MovieFlix is a sleek and modern movie browsing application that allows users to explore movie cards, rate their favorites, add movies to their cart, and mark them as favorites. The platform focuses on user-friendly interactivity and responsive design.

## Features

- **Dynamic Movie Cards**: Each card displays a movie's poster, title, rating, and price.
- **Interactive Buttons**: 
  - `+` and `-` buttons to adjust the star rating.
  - `Favorite` button to mark/unmark a movie as a favorite.
  - `Add to Cart` button to manage cart functionality.
- **Responsive Design**: Movie cards and layout adapt to various screen sizes for a seamless user experience.
- **Customizable Styling**: Styled using `styled-components` for modern CSS.

## Technology Stack

- **Frontend**:
  - React.js for UI components.
  - Styled Components for CSS-in-JS styling.
  - Modern JavaScript (ES6+).
- **Backend**: [Optional, depending on your project scope]
- **Deployment**: [Add deployment details if applicable]

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divyatapandey/MovieFlix.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd MovieFlix
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Components Overview

### 1. `MovieCard`
- Displays a movie poster, title, price, and star rating.
- Includes buttons for rating, favorites, and cart management.
- Example styling for buttons:
  - Minimalistic design with gradient hover effects.
  - Subscript positioning for rating controls.

### 2. `PaymentWindow`
- Modal to handle payment functionality.
- Displays total price and allows users to confirm or close the payment process.
- Styled with `styled-components` for an elegant overlay and responsive design.

### 3. `Navbar`
- Contains the platform title and other key navigation items.
- Includes branding with a logo and consistent typography.

## Styling Highlights

- **Typography**: 
  - "Poppins" and "Montserrat" fonts for modern and clean aesthetics.
  - Uppercase titles with slight letter-spacing for emphasis.
- **Colors**:
  - Neutral shades of white for gradients and background.
  - Bold action colors (e.g., `#ff5722` for favorites, `#f9a825` for cart).
- **Animations**:
  - Subtle hover effects for buttons.
  - Fade-in animations for modals and titles.

## Future Enhancements

- **Search Functionality**: Allow users to search for movies by title.
- **Filter and Sort**: Add options to filter movies by genre, rating, and price.
- **Backend Integration**: Connect to a movie database API for dynamic data.
- **User Authentication**: Enable user accounts for personalized experience.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

