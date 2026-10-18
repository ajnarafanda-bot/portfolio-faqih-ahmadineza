export type ProjectStatus = 'Tersedia' | 'Dalam Pengembangan';

export const projects = [
  {
    slug: 'claim-tracker',
    title: 'Claim Tracker: Monitoring Klaim Retur Supplier',
    category: 'Monitoring & Digitalisasi Proses',
    status: 'Tersedia' as ProjectStatus,
    description:
      'Aplikasi monitoring klaim retur supplier berbasis Google Sheets dan Google Apps Script untuk memudahkan pencatatan dan pemantauan status klaim secara lebih terstruktur.',
    longDescription:
      'Sebelumnya, pencatatan klaim retur supplier masih bergantung pada catatan kertas dan file yang tersebar, sehingga pencarian dan pemantauan status klaim membutuhkan proses manual yang memakan waktu. Claim Tracker dikembangkan untuk menjawab kebutuhan tersebut dengan pendekatan yang sederhana namun efektif.',
    background:
      'Pencatatan sebelumnya lewat catatan kertas dan berbagai file sehingga mencari status klaim butuh penelusuran manual.',
    featureList: [
      'Pendataan klaim retur',
      'Pengelolaan data supplier',
      'Monitoring status klaim',
      'Pemantauan tukar guling',
      'Pemantauan potong nota',
      'Pencatatan tanggal dan keterangan proses'
    ],
    tech: ['Google Sheets', 'Google Apps Script', 'JavaScript'],
    result:
      'Menerapkan ilmu Sistem Informasi untuk memecahkan masalah pencatatan dan penelusuran informasi dalam lingkungan kerja nyata.',
    nextStep: 'Dalam pengembangan: rekap laporan bulanan.',
    demo: null,
    repo: null
  },
  {
    slug: 'stockflow-warehouse',
    title: 'StockFlow Warehouse',
    category: 'Aplikasi Mobile Manajemen Gudang',
    status: 'Dalam Pengembangan' as ProjectStatus,
    description:
      'Aplikasi mobile manajemen gudang sebagai proyek pembelajaran yang mencakup proses masuk, keluar, dan pemantauan barang.',
    longDescription:
      'Proyek ini dibuat sebagai ruang belajar untuk mengimplementasikan alur kerja gudang secara digital, mulai dari autentikasi hingga pengelolaan data barang dan transaksi.',
    background:
      'Project pembelajaran yang fokus pada struktur data, pengalaman pengguna, dan alur transaksi operasional di gudang.',
    featureList: [
      'Login',
      'Dashboard',
      'Master barang',
      'Barang masuk',
      'Barang keluar',
      'Riwayat transaksi',
      'Profil dan pengaturan'
    ],
    tech: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    result:
      'Berfokus pada pemahaman data dan alur operasional gudang untuk membangun aplikasi yang sederhana, terstruktur, dan mudah dikembangkan lebih lanjut.',
    nextStep: 'Masih dalam tahapan pembelajaran dan penguatan struktur aplikasi.',
    demo: null,
    repo: null
  },
  {
    slug: 'aplikasi-web-pengelolaan-proyek',
    title: 'Aplikasi Web Pengelolaan Proyek',
    category: 'Web Application',
    status: 'Dalam Pengembangan' as ProjectStatus,
    description:
      'Proyek praktik untuk membangun aplikasi web pengelolaan proyek dengan fokus pada autentikasi, struktur data, dan pengembangan fitur dasar.',
    longDescription:
      'Aplikasi ini menjadi pengalaman belajar dalam merancang sistem berbasis web dengan penyusunan database, alur kerja pengguna, dan pengelolaan data proyek secara sistematis.',
    background:
      'Proyek praktik yang menekankan struktur database, autentikasi, dan pengerjaan fitur inti aplikasi berbasis web.',
    featureList: [
      'Autentikasi',
      'Pengelolaan data proyek',
      'Struktur database',
      'Pengembangan fitur dasar',
      'Manajemen data dan relasi'
    ],
    tech: ['PHP', 'Laravel', 'MySQL'],
    result:
      'Memberikan pengalaman praktis dalam membangun sistem informasi berbasis web dengan pendekatan yang lebih terstruktur dan terukur.',
    nextStep: 'Masih dalam proses pengembangan dan penguatan fitur.',
    demo: null,
    repo: null
  },
  {
    slug: 'website-wisata-banten',
    title: 'Website Wisata Banten',
    category: 'Website Informasi Pariwisata',
    status: 'Tersedia' as ProjectStatus,
    description:
      'Website informasi pariwisata dengan fokus pada struktur halaman, penyajian informasi destinasi, dan pengalaman pengguna yang nyaman.',
    longDescription:
      'Proyek ini berfokus pada pengalaman pengguna di halaman informasi wisata, dengan tata letak yang bersih, struktur konten yang mudah dibaca, dan pendalaman kebutuhan informasi destinasi.',
    background:
      'Website informasi wisata dibuat dengan pendekatan konten yang jelas dan tata letak yang mempermudah pengunjung menemukan destinasi yang relevan.',
    featureList: [
      'Struktur halaman yang jelas',
      'Penyajian informasi destinasi',
      'Tata letak konten yang rapi',
      'Pengalaman pengguna yang nyaman'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    result:
      'Menyampaikan informasi pariwisata secara lebih terstruktur dan mudah dipahami melalui pendekatan desain yang bersih dan responsif.',
    nextStep: 'Dapat dikembangkan lebih lanjut dengan penambahan konten dan fitur interaktif.',
    demo: null,
    repo: null
  }
];
