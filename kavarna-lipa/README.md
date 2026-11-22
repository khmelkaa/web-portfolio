# Kavárna Lípa — Demo Website

## Concept
A warm, Scandinavian-meets-Prague single-page website concept for a fictional newly opened specialty coffee shop and sourdough bakery in Vinohrady, Prague (Korunní 42). Designed as a portfolio showcase for local hospitality businesses.

## Features
- Full Czech / English language toggle with `localStorage` persistence
- Interactive tabbed menu (Coffee, Tea & More, Bakery, Breakfast) with live Vegan / Gluten-Free dietary filters
- Daily specials section with formatted Prague date
- Live "Open now / Closed" indicator computed in real time (`Europe/Prague` timezone) plus current-day highlight in the opening hours table
- Interactive table reservation form with date limits, guest counter, opening-hours-aware time slot picker, validation, confirmation state, and Netlify Forms support (`data-netlify="true"`)
- Lightbox photo gallery (`<dialog>` with keyboard navigation), Google Maps embed, reviews, and JSON-LD `CafeOrCoffeeShop` structured data

## Tech Stack
- Plain static HTML5, modern CSS3 (custom properties, grid, responsive layout, `prefers-reduced-motion`), vanilla JavaScript — zero build tools required.

## Client-Facing Description (for Portfolio)
Kavárna Lípa is a bilingual (CZ/EN) landing page concept for a specialty coffee shop and bakery in Prague. It combines a calm Nordic editorial aesthetic with practical conversion features — filterable seasonal menu, real-time opening status, embedded directions, and a frictionless table reservation flow.
