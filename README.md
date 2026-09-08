# PreludePost — Veer & Zara Digital Wedding Invitation

A digital wedding invitation website crafted for **[preludepost.com](https://preludepost.com)**, built with Next.js 14 App Router, Vanilla CSS Modules, and TypeScript. Designed for high fidelity, quiet luxury aesthetics, and seamless deployment on Vercel's free tier.

---

## ✨ Features

- 💌 **Interactive Envelope Opening Experience**:
  - Realistic 3D flap flip animation and wax seal with initials (V&Z).
  - Tap-to-open gesture with rising formal invitation card.
  - Smooth session memory so returning guests aren't forced to re-open unless desired.
- 🏰 **Curated Hero Section**:
  - Full-bleed floral ceremony aesthetic with typographic overlay.
- ⏳ **Live Countdown Timer**:
  - Real-time countdown to June 30, 2027 in Days, Hours, Minutes, and Seconds.
- 📜 **Alternating Program Timeline**:
  - Modern vertical connector timeline of events from Guest Arrival through the Evening Reception.
- 💃 **Pre-Wedding Events & Venue Itinerary (`/events`)**:
  - Mahendi, Haldi, and Sangeet cards with date badges and high-res event photography.
  - Full venue showcase of The Taj Mahal Palace, Mumbai with one-tap Google Maps directions.
  - Accommodation (group code `WEDDING2026`) and shuttle transportation logistics.
- ✍️ **RSVP & Dress Code (`/celebrate`)**:
  - Dress code recommendations for ladies and gentlemen.
  - Accessible, validated RSVP form with honeypot spam protection and Web3Forms integration.
  - Warm "Gifts & Blessings" note.
- 🛡️ **Enterprise-Grade Security & Performance**:
  - Comprehensive Content Security Policy (CSP), HSTS, X-Frame-Options, X-Content-Type-Options.
  - No secrets in git (`.env.local` gitignored, `.env.example` provided).
  - Sanitized inputs against XSS and injection vulnerabilities.
  - Responsive, mobile-first design with bottom tab navigation for quick access.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed

### 2. Setup Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Get a free Web3Forms access key at [web3forms.com](https://web3forms.com) and add it:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your_access_key_here"
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel & Connecting preludepost.com (GoDaddy)

### Step 1: Push to GitHub Organization
```bash
git init
git add .
git commit -m "feat: initial production-ready digital wedding invitation"
git branch -M main
git remote add origin https://github.com/<your-org>/preludepost.git
git push -u origin main
```

### Step 2: Import Project on Vercel
1. Log in to [vercel.com](https://vercel.com) (free hobby tier).
2. Click **Add New...** > **Project**.
3. Select your GitHub repository `preludepost`.
4. Add your Environment Variable:
   - Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: `<your-key>`
5. Click **Deploy**.

### Step 3: Connect GoDaddy Domain (`preludepost.com`)
1. In your Vercel Project Dashboard, go to **Settings** > **Domains**.
2. Enter `preludepost.com` and click **Add**.
3. Vercel will prompt you with the recommended DNS records:
   - **A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Log in to your **GoDaddy DNS Management Console** for `preludepost.com`:
   - Add/Update the `A` record with Host `@` pointing to `76.76.21.21` (TTL: 1/2 hour or 1 hour).
   - Add/Update the `CNAME` record with Host `www` pointing to `cname.vercel-dns.com`.
5. Vercel will automatically provision a free SSL certificate within a few minutes!
