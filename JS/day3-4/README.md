
# Crypto Pulse

A real-time cryptocurrency market tracker developed
as an educational web development project.

## Overview

Crypto Pulse retrieves public cryptocurrency market
data from the Binance Spot REST API and displays
USDT trading pairs through a responsive Midnight
Glass interface.

## Features

- Public cryptocurrency market data retrieval
- Automatic API requests every second
- USDT trading pair filtering
- Cryptocurrency symbol search
- All Markets and Watchlist tabs
- Watchlist management using LocalStorage
- Price change visualization
- Responsive Bootstrap interface
- Duplicate API request prevention
- API error handling
- Rate limit response handling
- API connection status display

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3.3
- Binance Spot REST API
- Web Storage API

## Project Structure

    day3-4/
    ├── crypto.html
    ├── crypto.css
    ├── crypto.js
    └── README.md

## How to Run

1. Open the project folder in VS Code.
2. Open crypto.html using Live Server.
3. Make sure an internet connection is available.

No API key or Binance account is required.

## API Usage

Endpoint:

https://api4.binance.com/api/v3/ticker/24hr

Method: GET

The application requests market data every second,
as required by the assignment.

Search, tab switching, and watchlist interactions
use locally stored market data without making
additional API requests.

Overlapping API requests are prevented.

Automatic updates are stopped when an API error,
network error, or rate limit response occurs.

Please avoid running multiple instances of the
application from the same IP address.

## Learning Objectives

- Fetch API
- Promise handling
- DOM manipulation
- Event listeners
- Arrays and conditional statements
- LocalStorage
- JSON parsing and serialization
- Separation of concerns
- Error handling
- Bootstrap responsive design
- CSS customization

## External Resources

### Binance Spot REST API

https://developers.binance.com/en/docs/products/spot/rest-api

### Bootstrap

https://getbootstrap.com/

Bootstrap is licensed under the MIT License.

https://getbootstrap.com/docs/5.3/about/license/

Bootstrap CSS is loaded through jsDelivr CDN
with Subresource Integrity (SRI) verification.

## Disclaimer

This project is intended for educational and
non-commercial purposes only.

Market data is retrieved from the Binance
public API and remains subject to the
applicable provider terms and restrictions.

This project is not affiliated with, sponsored
by, or endorsed by Binance.

Market data may be delayed, inaccurate,
or unavailable.

This application does not execute trades
or provide financial or investment advice.
