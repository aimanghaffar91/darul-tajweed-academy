# Darul Tajweed Academy (دار التجويد)
**"Learn Quran • Perfect Tajweed • Live Sunnah"**

A luxury Islamic editorial and cinematic one-page website designed and built for **Darul Tajweed Academy**, founded by **Aiman Ghaffar** (online Quran teacher, Islamabad, Pakistan).

---

## 🌟 Features & Highlights

- **Cinematic Full-Screen Video Hero**:
  - Real, looping cinematic background video (`/videos/hero-quran.mp4`) with smooth emerald color grading.
  - Automatic fallback poster image for low-bandwidth or reduced-motion environments.
  - Subtle animated scroll indicator and genuine Arabic Bismillah calligraphy.
- **Brand Identity & Crest**:
  - Uses the official uploaded Darul Tajweed Academy circular crest and branding.
- **Meet Your Quran Teacher (Aiman Ghaffar)**:
  - Exact editorial copy detailing her 2 years of online teaching experience, Tajweed mastery, and Al-Huda academic background.
  - Tasteful Islamic arch portrait placeholder ready for Aiman's personal photograph.
- **5 Comprehensive Course Programs**:
  1. *Quran with Tajweed* (Makharij, Pronunciation Mastery & Melodic Recitation)
  2. *Quran Tafseer* (Deep Meanings, Contextual Wisdom & Divine Guidance)
  3. *Hadith & Sunnah Studies* (Living the Prophetic Way • Manners & Daily Character)
  4. *Fahm-ul-Quran* (Understanding Quranic Language, Themes & Core Messages)
  5. *Asma-ul-Husna* (Knowing Allah Through His Most Beautiful Names)
  - Interactive "Learn More" modal and "Enquire" buttons that pre-fill the contact form and WhatsApp message.
- **Verified Educational Qualifications**:
  - Displays original high-resolution uploaded certificates from **Al-Huda International Welfare Foundation, Islamabad**:
    - *Fahm al-Quran* (Session Jan 2019 – Dec 2019, Achievement: **95.43%**)
    - *Fiqh Asma i Allah i Al-Husna* (Session Sep 2021 – Aug 2022, Achievement: **93.75%**)
  - Full-screen interactive lightbox with zoom in/out, previous/next, and keyboard navigation (`Esc`, `←`, `→`).
- **Why Choose Darul Tajweed Academy**:
  - 6 feature cards emphasizing personalized learning, Tajweed-focused teaching, supportive environment, and two years of online experience (no fake statistics or artificial reviews).
- **How to Get Started**:
  - 4-step horizontal timeline on desktop / vertical on mobile (Get in Touch → Discuss Needs → Arrange Classes → Begin Learning).
- **Interactive FAQ Accordion**:
  - 6 exact questions answered with smooth expand/collapse.
- **Functional Contact & Enrolment**:
  - Direct WhatsApp enquiry button configured for `+923185690089`.
  - Functional contact form that formats enquiries for instant delivery via **WhatsApp** or **Email**.
  - Persistent floating WhatsApp button with subtle pulse and tooltip.
- **Luxury Islamic Editorial Aesthetic**:
  - Deep Emerald (`#073B2A`), Forest Green (`#0B3024`), Antique Gold (`#B89545`), Warm Ivory (`#FAF8F0`), Soft Beige (`#EDE5D4`), and Charcoal (`#242820`).
  - Cormorant Garamond, Cinzel, Plus Jakarta Sans, and authentic Amiri Arabic typography.

---

## 🚀 Running the Website Locally

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 How to Publish / Deploy Online

### Option A: Vercel (Recommended — Free & 1-Click)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"New Project"** and select your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your site will be live on an HTTPS domain within 60 seconds!

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repository and set build command to `npm run build` with publish directory `dist`.

---

## 📷 Customization Note (Adding Teacher Photograph)

To replace the teacher portrait placeholder with Aiman Ghaffar's actual photograph:
1. Copy the photo to `public/images/aiman-ghaffar.jpg`.
2. In `src/sections/TeacherSection.tsx`, replace the placeholder `<User className="..." />` block with:
   ```tsx
   <img
     src="/images/aiman-ghaffar.jpg"
     alt="Aiman Ghaffar - Quran Teacher"
     className="w-full h-full object-cover rounded-full"
   />
   ```

---

© 2026 Darul Tajweed Academy. All rights reserved.
