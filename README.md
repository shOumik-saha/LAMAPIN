# LamaPin

A Pinterest-style full-stack web app built with React + Vite (frontend) and Node.js + Express + MongoDB (backend).

## Features
- User authentication with JWT stored in HTTP-only cookies
- Register, login, logout
- Pin feed with infinite scroll
- Create and publish pins with image upload
- Image editing options (text, orientation, size, background color)
- Like and save interactions
- Comment system per pin
- User profiles and follow/unfollow
- Boards API support

## Tech Stack
- Frontend: React, Vite, React Query, Zustand, Axios, ImageKit React
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs, sharp, ImageKit SDK
- Database: MongoDB Atlas
- Deployment: Vercel (frontend), Render (backend)

## Project Structure
```text
LAMAPIN/
  backend/     # Express API
  client/      # React app
```

## Prerequisites
- Node.js 18+
- npm
- MongoDB Atlas connection string
- ImageKit credentials

## Environment Variables

### Backend (`backend/.env`)
```env
MONGO=<your_mongodb_connection_string>
CLIENT_URL=https://your-frontend.vercel.app,http://localhost:5173
JWT_SECRET=<your_jwt_secret>
IK_PUBLIC_KEY=<your_imagekit_public_key>
IK_PRIVATE_KEY=<your_imagekit_private_key>
IK_URL_ENDPOINT=<your_imagekit_url_endpoint>
```

### Frontend (`client/.env`)
```env
VITE_API_ENDPOINT=http://localhost:3000
VITE_URL_IK_ENDPOINT=<your_imagekit_url_endpoint>
```

## Local Development

### 1. Install dependencies
```bash
cd backend
npm install

cd ../client
npm install
```

### 2. Start backend
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:3000` by default.

### 3. Start frontend
```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:5173` by default.

## API Routes (Overview)

### User
- `POST /users/auth/register`
- `POST /users/auth/login`
- `POST /users/auth/logout`
- `GET /users/:username`
- `POST /users/follow/:username` (auth)

### Pins
- `GET /pins`
- `GET /pins/:id`
- `POST /pins` (auth, multipart upload)
- `GET /pins/interaction-check/:id`
- `POST /pins/interact/:id` (auth)

### Comments
- `GET /comments/:postId`
- `POST /comments` (auth)

### Boards
- `GET /boards/:userId`

Note: `/api/*` aliases are also available in production for compatibility.

## Deployment

### Backend on Render
1. Create a new **Web Service** from this repo.
2. Set Root Directory to `backend`.
3. Build Command: `npm install`
4. Start Command: `node index.js`
5. Add backend env vars from above.
6. Deploy.

### Frontend on Vercel
1. Import this repo in Vercel.
2. Set Root Directory to `client`.
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add frontend env vars from above.
7. Deploy.

## Troubleshooting
- App shows only loading pins:
  - Verify `VITE_API_ENDPOINT` points to the correct backend URL.
  - Open `<backend_url>/healthz` to confirm backend is up.
  - Check Render logs for Mongo connection errors.
- Auth works locally but not in production:
  - Ensure `CLIENT_URL` includes your Vercel URL.
  - Keep `withCredentials: true` on frontend requests.
- Icons or images not visible:
  - Verify `VITE_URL_IK_ENDPOINT` in Vercel.

## Scripts

### Backend
- `npm run dev` - Start API with watch mode and env file

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License
This project is for educational and personal use.
