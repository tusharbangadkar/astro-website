# The Astrology World — Booking Website

A full-stack website for Astrologer Anshuuvman Mishrra (The Astrology World): Tantra Kriya & Vastu services, testimonials, and a working appointment booking system.
working appointment booking system.

- **Backend:** Java 17 + Spring Boot 3 (REST API, H2 in-memory database)
- **Frontend:** React 18 + Vite

## What's included

- Home page with hero, about, services, "how it works", reviews, and a booking form
- Each service has its own price in ₹ (INR), editable in `backend/src/main/resources/data.sql`.
- 8 sample five-star-style testimonials (replace with real client reviews when available)
- A real booking flow: pick a date → see live open time slots → submit your details →
  slot is saved to the database and blocked from being double-booked

## Email notifications for bookings

Every booking now sends two emails automatically: one to
`astrologeranshuuvmanmishrra@gmail.com` with the client's details, and one confirming
the booking to the client. This uses Gmail's SMTP server, so you need a Gmail **App
Password** (not the normal Gmail password) — Google requires this for apps that send
mail on your behalf.

**Setup (one-time):**

1. Turn on 2-Step Verification on the Gmail account that will send the emails:
   https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords
   → choose "Mail" as the app, generate it, and copy the 16-character password.
3. Set two environment variables before starting the backend:

   ```bash
   # macOS/Linux
   export MAIL_USERNAME=youraddress@gmail.com
   export MAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
   cd backend && mvn spring-boot:run
   ```

   ```powershell
   # Windows PowerShell
   $env:MAIL_USERNAME="youraddress@gmail.com"
   $env:MAIL_APP_PASSWORD="xxxxxxxxxxxxxxxx"
   cd backend
   mvn spring-boot:run
   ```

If these aren't set, bookings still work as normal — the app just skips sending email
and logs a warning instead of failing the booking.

To change which inbox receives the owner notification, edit
`app.notifications.owner-email` in `backend/src/main/resources/application.properties`.

## WhatsApp/SMS notifications

Automatically sending a WhatsApp or SMS message (rather than a click-to-chat link)
requires a paid third-party provider such as Twilio, since Gmail and free tools can't
send WhatsApp messages directly. If you'd like this added, you'd need a Twilio account
with WhatsApp/SMS enabled and its API credentials — happy to wire it in once you have
those.

## Running the backend

Requires Java 17+ and Maven (or use the included `mvnw` wrapper if you add one — plain
Maven commands below assume `mvn` is installed).

```bash
cd backend
mvn spring-boot:run
```

The API starts on **http://localhost:8080**. Key endpoints:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/services` | List all services |
| GET | `/api/reviews` | List all reviews |
| GET | `/api/appointments/availability?date=YYYY-MM-DD` | Open 30-min slots for a date |
| POST | `/api/appointments` | Book an appointment |

Data is seeded on startup from `data.sql` into an in-memory H2 database, so it resets
every time the app restarts. To make bookings persistent, switch the datasource in
`application.properties` to MySQL/Postgres (add the matching driver to `pom.xml`).

## Running the frontend

Requires Node.js 18+.

```bash
cd frontend
npm install
npm run dev
```

Opens on **http://localhost:5173** and proxies `/api/*` calls to the backend on port
8080 (see `vite.config.js`). Run the backend first, then the frontend.

To build for production:

```bash
npm run build
```

This outputs static files to `frontend/dist`, which you can deploy to any static host
(Netlify, Vercel, S3, nginx, etc.) — just point it at your deployed backend URL.

## Customizing for your friend

- **Name & branding:** "Astrologer Anshuuvman Mishrra" and "The Astrology World" are
  already set in `frontend/src/components/*.jsx` and `frontend/index.html` — update
  further there if anything changes.
- **Services & pricing:** edit `backend/src/main/resources/data.sql`.
- **Reviews:** replace the sample testimonials in `data.sql` with real client reviews.
- **Business hours / slot length:** edit `OPEN`, `CLOSE`, and the 30-minute increment in
  `AppointmentController.java`.
- **Email confirmations / payments:** not included — the booking form currently saves
  the appointment to the database and shows an on-screen confirmation. Wiring up email
  (e.g. via SendGrid/SMTP) or payment collection (e.g. Stripe) would be the next step
  before taking this live with real clients.

## Notes

- CORS is configured to allow `localhost:5173` and `localhost:3000` — update
  `CorsConfig.java` with your real domain before deploying.
- The sample testimonials and astrologer bio are placeholder content — swap them for
  your friend's real details, photo, and credentials before launch.
