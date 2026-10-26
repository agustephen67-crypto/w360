# my implementation of the talent pipeline 

This dashboard is basically a very small rollout that contains the requirements listed

## How to run it

This is Nextjs 16 so please ensure you have Node 20 or later versions 
after cloning the repo, run the following commands

```
npm install
npm run dev
```

Open http://localhost:3000. 

## How it's put together



### Backend

The backend is Next.js route handlers on top of a SQLite database, this was the quickest rollout. `lib/db.ts` sets up the database and seeds it when you first run the project, and `lib/candidates.ts` is where the business logic is. The API routes live in `app/api/candidates`: `GET /api/candidates` returns the candidates and `PATCH /api/candidates/:id` updates a candidate's stage.

### Frontend

`components/candidate-dashboard.tsx` is the main component. It fetches the candidates from the API, handles search and filtering, and saves stage changes. The other components just display what it passes to them and are basically composers wrapped around reusable shadcn components.
