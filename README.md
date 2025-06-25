# 🛍️ E-Commerce Landing Page

Landing page e-commerce modern dan responsif yang siap deploy ke GitHub Pages. Dibuat khusus untuk [ISI_NAMA_BRAND] dengan fitur lengkap dan performa optimal.

## ✨ Fitur Utama

### 🎨 **Desain Modern**
- **Responsive Design** - Optimal di semua device (mobile, tablet, desktop)
- **Modern UI/UX** - Design trends terkini dengan animasi smooth
- **Custom Color Scheme** - Mudah disesuaikan dengan brand colors
- **Fast Loading** - Optimized untuk Core Web Vitals

### 🛒 **E-Commerce Features**
- **Product Gallery** - Multiple images dengan zoom functionality
- **Variant Selector** - Pilihan warna dan ukuran dengan preview
- **Quantity Control** - Increment/decrement dengan validation
- **Price Display** - Harga normal vs promo dengan discount badge
- **Stock Indicator** - Real-time stock status dengan progress bar
- **Countdown Timer** - Urgency untuk flash sale/promo

### 📱 **WhatsApp Integration**
- **Auto Message Generator** - Template pesan otomatis dengan detail produk
- **Smart Link Building** - Include semua variant yang dipilih
- **Multiple CTA Buttons** - Strategically placed untuk conversion
- **Order Form Integration** - Dukungan external form dan WhatsApp

### 🎯 **Conversion Optimization**
- **Social Proof** - Customer testimonials dan rating
- **Trust Signals** - Garansi, gratis ongkir, customer service 24/7
- **FAQ Section** - Jawab keraguan customer sebelum checkout
- **Urgency Elements** - Limited stock, countdown timer, flash sale badge

### 📊 **Analytics & SEO**
- **Google Analytics Ready** - Event tracking untuk semua interaksi
- **Facebook Pixel Support** - Conversion tracking untuk ads
- **SEO Optimized** - Meta tags, schema markup, semantic HTML
- **Open Graph Tags** - Perfect sharing di social media

### ♿ **Accessibility**
- **WCAG Compliant** - Keyboard navigation, screen reader friendly
- **High Contrast Support** - Readable untuk semua user
- **Skip Links** - Quick navigation untuk keyboard users
- **ARIA Labels** - Proper accessibility attributes

## 🚀 Quick Start

### 1. **Download Files**
```bash
# Clone atau download repository ini
git clone [REPOSITORY_URL]
cd ecommerce-landing-page
```

### 2. **Customize Content**
Edit file `index.html` dan ganti semua placeholder dengan data real Anda:

```html
<!-- Ganti semua [ISI_...] dengan data real -->
<title>[ISI_META_TITLE] - [ISI_NAMA_BRAND]</title>
<!-- Contoh menjadi: -->
<title>Hijab Premium Berkualitas - Hijab Cantik Store</title>
```

### 3. **Upload ke GitHub**
```bash
# Create repository baru di GitHub
# Upload semua files ke repository

# Enable GitHub Pages:
# 1. Go to repository Settings
# 2. Scroll ke GitHub Pages section
# 3. Source: Deploy from a branch
# 4. Branch: main / master
# 5. Save
```

### 4. **Test Website**
- Akses website di: `https://[USERNAME].github.io/[REPOSITORY_NAME]`
- Test di mobile dan desktop
- Test semua fitur: gallery, variant selector, WhatsApp link

## 📁 Struktur File

```
ecommerce-landing-page/
├── index.html              # Halaman utama
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet utama
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Folder untuk gambar
│       ├── logo.png
│       ├── product-1.jpg
│       └── ...
├── README.md               # Dokumentasi ini
└── .gitignore             # Git ignore file
```

## 🔧 Customization Guide

### **1. Colors & Branding**

Edit CSS variables di `assets/css/style.css`:

```css
:root {
    --primary-color: #FF6B6B;    /* Warna utama brand */
    --secondary-color: #4ECDC4;  /* Warna sekunder */
    --accent-color: #45B7D1;     /* Warna accent */
}
```

### **2. Product Information**

Ganti placeholder di `index.html`:

```html
<!-- Product Info -->
[ISI_NAMA_PRODUK] → Hijab Voal Premium Polos
[ISI_HARGA_NORMAL] → 75000
[ISI_HARGA_PROMO] → 45000
[ISI_PERSENTASE] → 40

<!-- Business Info -->
[ISI_NAMA_BRAND] → Hijab Cantik Store
[ISI_NOMOR_WA] → 6281234567890
[ISI_INSTAGRAM] → hijabcantikstore
```

### **3. Images**

Upload gambar ke folder `assets/images/` atau gunakan URL external:

```html
[ISI_LINK_GAMBAR_UTAMA] → assets/images/product-main.jpg
[ISI_LINK_LOGO] → assets/images/logo.png
```

**Rekomendasi ukuran gambar:**
- **Logo**: 200x80px (PNG dengan background transparan)
- **Product Main**: 600x600px (JPG/PNG, max 200KB)
- **Gallery Images**: 600x600px (JPG, max 150KB each)

### **4. WhatsApp Integration**

Pastikan nomor WhatsApp format internasional:

```html
[ISI_NOMOR_WA] → 6281234567890
<!-- 
Format: [country_code][number]
Indonesia: 62 + nomor tanpa 0 di depan
Contoh: 081234567890 → 6281234567890
-->
```

### **5. Analytics Setup**

**Google Analytics:**
1. Buat akun di [Google Analytics](https://analytics.google.com)
2. Dapatkan Measurement ID (GA4)
3. Uncomment dan ganti di `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel:**
1. Buat Pixel di Facebook Business Manager
2. Uncomment dan ganti Pixel ID di `index.html`

## 🎯 Optimization Tips

### **Performance**
- **Compress Images**: Gunakan [TinyPNG](https://tinypng.com) untuk kompresi
- **Use WebP Format**: Convert ke WebP untuk ukuran lebih kecil
- **Minify CSS/JS**: Gunakan tools online untuk minify code
- **Enable GZIP**: GitHub Pages otomatis enable GZIP compression

### **SEO**
- **Meta Description**: Tulis deskripsi menarik 150-160 karakter
- **Alt Text**: Semua gambar harus punya alt text descriptive
- **Internal Links**: Link ke section lain di halaman yang sama
- **Loading Speed**: Pastikan loading < 3 detik

### **Conversion**
- **Mobile First**: 70%+ traffic dari mobile, pastikan UX mobile optimal
- **Clear CTA**: Button "Beli Sekarang" harus prominent dan mudah ditemukan
- **Trust Signals**: Tampilkan testimoni, garansi, dan contact info
- **Urgency**: Gunakan countdown timer dan stock indicator

## 📱 Mobile Optimization

### **Touch Targets**
- Minimum 44px untuk semua button
- Spacing antar element minimum 8px
- Easy thumb navigation

### **Performance**
- Lazy loading untuk semua images
- Minified CSS dan JavaScript
- Optimized untuk 3G connection

### **UX**
- Swipeable gallery
- Collapsible mobile menu
- One-thumb operation
- Fast tap response

## 🔍 SEO Checklist

- [ ] **Title Tag** unique dan descriptive
- [ ] **Meta Description** compelling dan include keywords
- [ ] **H1 Tag** hanya satu per halaman
- [ ] **Alt Text** untuk semua images
- [ ] **Internal Links** dengan anchor text relevan
- [ ] **Schema Markup** untuk product information
- [ ] **Open Graph Tags** untuk social sharing
- [ ] **Mobile
