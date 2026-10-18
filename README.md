# Portofolio Faqih Ahmadineza

Portfolio pribadi berbasis Astro + Tailwind CSS untuk menampilkan profile, skill, proyek, pengalaman, dan kontak. Project ini dibuat statis, cepat, dan siap dideploy ke Cloudflare Pages.

## Tech Stack

- Astro
- Tailwind CSS
- Vanilla JavaScript
- Astro sitemap integration

## Menjalankan di lokal

1. Buka terminal di folder project:

```bash
cd D:\Project\Web\Portofolio\portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan server development:

```bash
npm run dev -- --host 0.0.0.0
```

4. Buka browser ke:

```text
http://localhost:4321
```

## Mengganti data dan konten

Semua data utama ada di file berikut:

- `src/data/site.ts` — profile, skill, proyek, pengalaman, pendidikan
- `src/pages/index.astro` — layout halaman utama
- `src/pages/proyek/index.astro` — daftar proyek
- `src/pages/proyek/[slug].astro` — halaman detail proyek

### Ubah profil
Edit bagian `profile` di file:

```ts
src/data/site.ts
```

### Ubah skill
Edit array `skills` di file:

```ts
src/data/site.ts
```

### Ubah proyek
Edit array `projects` di file:

```ts
src/data/site.ts
```

Setiap item proyek memiliki field seperti:
- `slug`
- `title`
- `description`
- `stack`
- `demo`
- `repo`
- `features`

### Ubah form kontak Web3Forms
Buat file `.env` dari contoh:

```bash
cp .env.example .env
```

Isi token Web3Forms:

```env
WEB3FORMS_ACCESS_KEY=your_access_key_here
PUBLIC_SITE_URL=https://faqih-ahmadineza.ajnarafanda.workers.dev
```

## Build untuk produksi

```bash
npm run build
```

Output akan dibuat di folder:

```text
dist/
```

## Deploy ke Cloudflare Pages

1. Push project ke GitHub/GitLab.
2. Masuk ke Cloudflare dashboard.
3. Pilih `Workers & Pages` lalu `Create application`.
4. Pilih `Pages` > `Connect to Git`.
5. Pilih repository project Anda.
6. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
7. Tambahkan environment variables di Cloudflare Pages:
   - `WEB3FORMS_ACCESS_KEY`
   - `PUBLIC_SITE_URL`
8. Deploy project.

## SEO dan sitemap

Project ini sudah dibekali dengan:
- meta title/description
- Open Graph tags
- sitemap otomatis via Astro sitemap integration
- robots.txt generation

## .gitignore

Project sudah dilengkapi dengan `.gitignore` untuk membatasi file sensitif seperti:
- `node_modules`
- `dist`
- `.env`
- `.astro`

## Catatan deploy

Pastikan domain utama diubah di `astro.config.mjs` sesuai domain Cloudflare Pages Anda sebelum deploy publik. Contoh:

```js
site: 'https://faqih-ahmadineza.ajnarafanda.workers.dev'
```

## Lisensi

Project ini dibuat untuk kebutuhan portfolio pribadi. Silakan sesuaikan konten sesuai kebutuhan Anda sebelum publikasi.
