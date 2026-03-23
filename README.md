<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/451d63ae-7127-4161-9e6d-117ab96acf62

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Pages

GitHub Pages only serves the static frontend (`npm run build`). The Express APIs in `server.ts` (Google Drive, sharing, Google Docs export) do not run on Pages; host that server separately and set `VITE_API_BASE_URL` to its origin when building, or use only client-side features (upload + Gemini) on Pages.

1. Push this project to a GitHub repository.
2. **Settings → Secrets and variables → Actions**: add `GEMINI_API_KEY` so the production build can embed the key (optional if users enter a key in the app).
3. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
4. Push to `main` or `master`, or run the **Deploy to GitHub Pages** workflow manually. The workflow sets `VITE_BASE_PATH` for project sites (`/repo-name/`) or `/` for a `*.github.io` repository.

After deployment, the site URL is shown under **Settings → Pages** and in the workflow run.
