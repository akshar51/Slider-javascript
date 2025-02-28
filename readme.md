# Slider Component Documentation

## Overview
This project is a simple image slider that allows users to navigate through images using "Next" and "Prev" buttons. The slider automatically displays images one at a time with a fade effect.

## Live Demo
You can view the live version of the slider here: [Live Slider](https://slider-javascript-theta.vercel.app/)

## Project Structure
The project consists of three main files:

- `index.html` - The HTML structure of the slider.
- `style.css` - The stylesheet for styling the slider.
- `script.js` - The JavaScript logic for handling image transitions.

## 1. HTML Structure (`index.html`)
The HTML file contains:

- A `<div>` with the class `slider` that holds the slider items.
- Each image is wrapped inside a `<div>` with the class `slider-item`.
- Two buttons (`Prev` and `Next`) for navigating through images.
- A reference to the external CSS and JavaScript files.

### Key Elements:
- `<div class="slider">` - Main container for the slider.
- `<div class="slider-item d-none active fade">` - Individual slides.
- `<button onclick="currSlide(-1)" class="prev">Prev</button>` - Button to navigate to the previous image.
- `<button onclick="currSlide(1)" class="next">Next</button>` - Button to navigate to the next image.
- `<script src="./script/script.js"></script>` - Links JavaScript functionality.

## 2. CSS Styling (`style.css`)
### General Styles:
- Resets default margins and paddings.
- Centers the slider in the viewport.
- Sets a background color for the page.

### Slider Styling:
- `.slider`: Defines dimensions, border radius, and shadow effects.
- `.slider-item img`: Ensures the images fit properly inside the slider.
- `.d-none`: Hides slides except the active one.
- `.active`: Displays the current slide and applies a fade-in animation.
- `.prev` & `.next`: Styled navigation buttons with hover effects.

### Key Classes:
- `.slider` - Defines width, height, and styling of the slider.
- `.slider-item` - Represents each slide.
- `.d-none` - Used to hide inactive slides.
- `.active` - Displays the current slide with animation.
- `.next`, `.prev` - Navigation buttons with hover effects.

### Animations:
- `@keyframes fade`: Applies a fade-in effect to the current image.

## 3. JavaScript Functionality (`script.js`)
Handles the image navigation logic:

### Variables:
- `slideIndex`: Tracks the currently active slide.

### Functions:
- `currSlide(n)`: Adjusts the slide index based on user input (-1 for previous, 1 for next).
- `displaySlide(n)`: Updates the displayed slide.
  - Loops through all slides to remove the active class.
  - Adds the active class to the new current slide.

### Logic:
- If `n` exceeds the number of slides, it resets to the first slide.
- If `n` is below 1, it loops back to the last slide.
- The function `displaySlide(slideIndex)` initializes the slider by showing the first slide.

## How to Use
1. Open `index.html` in a browser.
2. Click on `Next` to view the next image.
3. Click on `Prev` to view the previous image.

## Future Enhancements
- Auto-slide functionality.
- Navigation dots for slide indication.
- Touch swipe support for mobile devices.

---

This documentation provides a clear overview of the slider functionality, making it easy for developers to understand and modify. 🚀

