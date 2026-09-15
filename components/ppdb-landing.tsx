'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  Camera,
  Landmark,
  Menu,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/6281211832567'
const images = {
  hero: '/w1.jpg',
  courtyard: 'https://images.unsplash.com/photo-1542816417-0983679b4f44?auto=format&fit=crop&w=1000&q=80',
  study: 'https://images.unsplash.com/photo-1594736797933-d0d5b4f2e8d1?auto=format&fit=crop&w=1000&q=80',
  group: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
}

const programs = [
  { icon: BookOpen, title: 'Tahfizh Bersanad', text: 'Hafalan terarah dengan talaqqi, tasmi’ dan pendampingan ustadz yang amanah.' },
  { icon: GraduationCap, title: 'Sekolah Terintegrasi', text: 'Kurikulum formal yang seimbang dengan pendidikan diniyah dan karakter.' },
  { icon: Landmark, title: 'Asrama 24 Jam', text: 'Lingkungan pembinaan yang hangat, tertib dan mendukung tumbuh kembang santri.' },
  { icon: Compass, title: 'Kepanduan', text: 'Melatih disiplin, keberanian, kepemimpinan dan kecintaan pada alam.' },
  { icon: Sparkles, title: 'Life Skill', text: 'Membekali santri dengan kemandirian, karya dan jiwa kewirausahaan.' },
]

const activities = [
  ['01', 'Bela Diri', 'Membangun keberanian dan ketangguhan diri.'],
  ['02', 'Kepanduan', 'Belajar memimpin, bekerja sama dan mencintai alam.'],
  ['03', 'Bola Voli', 'Menjaga kebugaran melalui olahraga tim yang seru.'],
  ['04', 'Tenis Meja', 'Melatih fokus, refleks dan sportivitas.'],
  ['05', 'Futsal', 'Menumbuhkan kerja sama dan semangat berkompetisi.'],
  ['06', 'Peternakan', 'Merawat makhluk hidup dan belajar bertanggung jawab.'],
]

const gallery = [
  [images.courtyard, 'Suasana halaman pesantren'],
  [images.study, 'Halaqoh Al-Qur’an pagi'],
  [images.group, 'Kebersamaan santri'],
  ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80', 'Belajar penuh semangat'],
  ['https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=80', 'Kegiatan kepanduan'],
  ['https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80', 'Olahraga bersama'],
]

const faqs = [
  ['Berapa kuota penerimaan santri baru?', 'Kuota kami terbatas agar setiap santri mendapatkan pendampingan yang optimal. Silakan hubungi panitia untuk informasi kuota terbaru.'],
  ['Bagaimana skema pembayaran biaya pendidikan?', 'Pembayaran dapat dilakukan secara bertahap sesuai skema yang disepakati. Rincian biaya akan disampaikan saat proses pendaftaran.'],
  ['Apakah wali santri bisa survei pesantren?', 'Tentu. Wali santri dipersilakan berkunjung pada jam operasional dengan melakukan konfirmasi terlebih dahulu melalui WhatsApp.'],
  ['Apakah tersedia program beasiswa?', 'Informasi beasiswa dan keringanan biaya tersedia berdasarkan kebijakan dan kuota pada setiap periode penerimaan.'],
]

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`mb-12 max-w-2xl ${light ? 'text-white' : ''}`}><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>{text && <p className={`mt-5 text-base leading-7 ${light ? 'text-emerald-50/75' : 'text-stone-600'}`}>{text}</p>}</div>
}

export function PpdbLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const nav = [['#visi', 'Visi & Misi'], ['#program', 'Program'], ['#ekstrakurikuler', 'Ekstrakurikuler'], ['#pendaftaran', 'Pendaftaran'], ['#syarat', 'Syarat'], ['#kontak', 'Kontak']]
  return <div className="min-h-screen bg-cream text-ink">
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between rounded-[28px] border border-emerald-900/10 bg-emerald-950/80 px-4 py-3 shadow-[0_12px_30px_rgba(7,59,50,0.18)] backdrop-blur-sm md:px-6">
          <a href="#beranda" className="flex items-center gap-3 text-white">
            <span className="grid size-11 place-items-center rounded-full border border-gold/60 bg-white/10 shadow-sm">
              <Sparkles size={18} className="text-gold" />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-[1.35rem] leading-none tracking-tight text-white">Darul Hijrah Kediri</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-50/80">Al Quran Mahkota Kami, Bahasa Tahta Kami</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-semibold text-emerald-50/80 transition hover:text-gold">
                {label}
              </a>
            ))}
          </nav>

          <button aria-label="Buka menu" className="text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-3 rounded-[22px] border border-emerald-900/10 bg-emerald-950/85 px-5 py-4 backdrop-blur-sm lg:hidden">
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3 text-sm font-medium text-white last:border-b-0">
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>

    <main>
      <section id="beranda" className="relative flex min-h-[760px] items-end overflow-hidden bg-gradient-to-br from-emerald-950 via-sky-600 to-emerald-900 pb-20 pt-32 text-white md:min-h-[850px] md:pb-28"><img src={images.hero} alt="Santri berjalan di lingkungan pesantren" className="absolute inset-0 size-full object-cover opacity-60" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%)]" /><div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-emerald-950/10" /><div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/20" /><div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold"><span className="h-px w-10 bg-gold" />Penerimaan Santri Baru 2025/2026</p><h1 className="font-serif text-5xl leading-[1.04] tracking-tight md:text-7xl">Tumbuh dalam <em className="font-serif text-gold">iman,</em><br />berkarya dengan <em className="font-serif text-gold">ilmu.</em></h1><p className="mt-7 max-w-xl text-base leading-7 text-emerald-50/80 md:text-lg">Membangun generasi Qur’ani yang beradab, mandiri, dan siap memberi manfaat. Tempat terbaik untuk menumbuhkan hafalan, karakter, dan cita-cita. Darul Hijrah Kediri hadir untuk membentuk santri yang berakhlak dan siap berkarya.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-emerald-950 transition hover:bg-white">Daftar via WhatsApp <ArrowRight size={17} /></a><a href="#program" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:border-gold hover:text-gold">Jelajahi Program <ArrowRight size={17} /></a></div></div></div></section>

      <section id="visi" className="scroll-mt-20 bg-cream px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><SectionHeading eyebrow="01 — Arah Pendidikan" title="Mendidik hati, menajamkan akal, menguatkan langkah." text="Kami percaya setiap anak membawa fitrah kebaikan. Tugas kami adalah menemani, mengarahkan, dan memberi ruang agar potensi itu tumbuh menjadi amal." /><div className="rounded-2xl bg-emerald-900 p-7 text-white md:p-9"><p className="font-serif text-2xl leading-relaxed">“Menjadi lembaga pendidikan Islam yang melahirkan penghafal Al-Qur’an berakhlak mulia, berwawasan luas, dan siap memimpin peradaban.”</p></div></div><div className="space-y-7">{['Menjaga fitrah santri dengan pembinaan adab dan akhlak.', 'Menguatkan hafalan mutqin melalui talaqqi dan muraja’ah.', 'Membekali bahasa Arab, ulumuddin dan wawasan keislaman.', 'Menumbuhkan jiwa kepemimpinan serta kecakapan hidup.'].map((item, i) => <div key={item} className="flex gap-5 border-b border-emerald-900/10 pb-6"><span className="font-serif text-2xl text-gold">0{i + 1}</span><p className="pt-1 text-base font-semibold leading-6">{item}</p></div>)}</div></div></section>

      <section id="program" className="scroll-mt-20 bg-emerald-950 px-5 py-24 text-white lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="02 — Program Unggulan" title="Bekal lengkap untuk perjalanan yang panjang." text="Perpaduan pendidikan Al-Qur’an, akademik, dan pengalaman hidup dalam satu ekosistem pembinaan." light /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">{programs.map(({ icon: Icon, title, text }, i) => <article key={title} className={`group rounded-[24px] border p-6 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 ${i === 0 ? 'border-gold/60 bg-gold text-emerald-950' : 'border-white/10 bg-white/[.04]'} `}><div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? 'bg-emerald-950/10 text-emerald-950' : 'bg-white/10 text-gold'}`}><Icon size={22} strokeWidth={1.8} /></div><h3 className="font-serif text-[1.7rem] leading-tight">{title}</h3><p className={`mt-3 text-sm leading-6 ${i === 0 ? 'text-emerald-900/75' : 'text-emerald-50/70'}`}>{text}</p></article>)}</div></div></section>

      <section className="bg-sand px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="03 — Pola Pembinaan" title="Dekat, terarah, dan personal." text="Setiap hari adalah kesempatan untuk belajar lebih baik, dalam suasana yang aman dan saling menguatkan." /><div className="grid gap-5 md:grid-cols-3">{[['01', 'Halaqoh Harian', 'Setoran hafalan dan muraja’ah dalam kelompok kecil bersama pembimbing.'], ['02', 'Kajian Tarbawi', 'Ruang dialog untuk memahami adab, nilai, dan makna di balik setiap ilmu.'], ['03', 'Mentoring Personal', 'Pendampingan berkala untuk mengenali kebutuhan dan potensi setiap santri.']].map(([num, title, text]) => <article key={num} className="rounded-[24px] border border-emerald-900/10 bg-cream p-7 shadow-[0_10px_24px_rgba(11,46,41,0.04)]"><span className="inline-flex rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">{num}</span><h3 className="mt-10 font-serif text-3xl text-emerald-950">{title}</h3><p className="mt-3 leading-7 text-stone-600">{text}</p></article>)}</div></div></section>

      <section className="bg-cream px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 — Asatidz & Pengurus" title="Dibimbing oleh mereka yang menjadi teladan." /><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{[['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80', 'Ust. Budi Santoso', 'Pimpinan Pesantren'], ['https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80', 'Ust. Toha', 'Koordinator Tahfizh'], ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', 'Ust. Ahmad Mubarok', 'Pembina Asrama'], ['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80', 'Ustadzah Dihya', 'Guru Sekolah']].map(([img, name, role]) => <article key={name} className="group overflow-hidden rounded-[26px] border border-emerald-900/10 bg-[#f7faf9] shadow-[0_10px_26px_rgba(11,46,41,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(11,46,41,0.12)]"><div className="overflow-hidden bg-sand"><img src={img} alt={name} className="aspect-[4/5] w-full object-cover saturate-[0.85] transition duration-500 group-hover:scale-[1.04] group-hover:saturate-100" /></div><div className="p-5"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Tim Pembina</p><h3 className="font-serif text-[1.8rem] leading-tight text-emerald-950">{name}</h3><p className="mt-2 text-sm font-medium text-stone-600">{role}</p></div></article>)}</div></div></section>

      <section id="ekstrakurikuler" className="scroll-mt-20 bg-sand px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 — Ekstrakurikuler" title="Bertumbuh lewat pengalaman nyata." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{activities.map(([num, title, text]) => <article key={num} className="group rounded-[24px] border border-emerald-950/10 bg-cream p-6 shadow-[0_10px_22px_rgba(11,46,41,0.04)] transition duration-300 hover:-translate-y-1 hover:border-emerald-800/40"><div className="flex items-center justify-between gap-4"><span className="font-serif text-3xl text-gold">{num}</span><span className="h-px flex-1 bg-emerald-900/10" /></div><h3 className="mt-8 font-serif text-2xl text-emerald-950 transition group-hover:text-emerald-700">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div></div></section>

      <section className="bg-cream px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="06 — Galeri Kegiatan" title="Hari-hari yang penuh cerita." /><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{gallery.map(([img, caption], i) => <figure key={caption} className={`group relative overflow-hidden rounded-[24px] border border-emerald-900/10 bg-sand shadow-[0_12px_24px_rgba(11,46,41,0.06)] ${i === 0 ? 'md:row-span-2' : ''}`}><img src={img} alt={caption} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${i === 0 ? 'h-[420px] md:h-[520px]' : 'h-52 md:h-64'}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 text-sm font-medium text-white">{caption}</figcaption></figure>)}</div></div></section>

      <section id="pendaftaran" className="scroll-mt-20 bg-emerald-900 px-5 py-24 text-white lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="07 — Alur Pendaftaran" title="Satu langkah kecil menuju masa depan yang besar." light /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[['Isi Formulir', 'Lengkapi data calon santri melalui formulir pendaftaran online.'], ['Bayar Biaya Pendaftaran', 'Lakukan pembayaran biaya pendaftaran sesuai nominal yang ditentukan.'], ['Transfer ke Rekening Resmi', 'Gunakan rekening resmi pondok untuk memastikan pembayaran tercatat dengan aman.'], ['Konfirmasi via WhatsApp', 'Kirim bukti pembayaran kepada panitia melalui WhatsApp.'], ['Observasi & Wawancara', 'Ikuti proses observasi dan wawancara bersama tim penerimaan santri.'], ['Daftar Ulang', 'Selesaikan administrasi daftar ulang untuk mengamankan tempat santri.']].map(([title, description], i) => <article key={title} className="rounded-2xl border border-white/20 bg-white/[.04] p-6 transition hover:border-gold/70 hover:bg-white/[.08]"><span className="font-serif text-4xl text-gold">0{i + 1}</span><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-emerald-50/75">{description}</p></article>)}</div><a href="https://pstb-dh-kediri.vercel.app/" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-emerald-950">Mulai Pendaftaran <ArrowRight size={17} /></a></div></section>

      <section id="syarat" className="scroll-mt-20 bg-cream px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2"><div><SectionHeading eyebrow="08 — Syarat & Ketentuan" title="Siapkan dokumen terbaiknya." text="Pastikan seluruh berkas berikut telah tersedia sebelum memulai proses pendaftaran." /><ul className="space-y-4">{['Mengisi formulir pendaftaran dengan lengkap.', 'Surat keterangan sehat dari fasilitas kesehatan.', 'Fotokopi ijazah atau surat keterangan lulus.', 'Fotokopi akta kelahiran dan Kartu Keluarga.', 'Memiliki kemampuan membaca Al-Qur’an dasar.'].map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-900 text-gold"><Check size={13} /></span>{item}</li>)}</ul></div><div className="rounded-2xl bg-sand p-8"><ShieldCheck className="text-emerald-800" size={34} strokeWidth={1.5} /><h3 className="mt-10 font-serif text-3xl">Butuh informasi lebih lanjut?</h3><p className="mt-3 leading-7 text-stone-600">Tim penerimaan kami siap membantu menjawab pertanyaan Ayah dan Bunda.</p><a href={WHATSAPP} className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800">Tanya panitia <ArrowRight size={17} /></a></div></div></section>

      <section className="bg-sand px-5 py-24 lg:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="09 — Pertanyaan Umum" title="Yang sering ditanyakan." />{faqs.map(([question, answer], i) => <div key={question} className="mb-3 rounded-[20px] border border-emerald-950/10 bg-cream shadow-[0_8px_18px_rgba(11,46,41,0.04)]"><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-serif text-xl"><span>{question}</span><ChevronDown className={`shrink-0 text-gold transition ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <p className="px-5 pb-5 text-sm leading-7 text-stone-600">{answer}</p>}</div>)}</div></section>

      <section id="kontak" className="scroll-mt-20 bg-emerald-950 px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="10 — Hubungi Kami" title="Mari mulai percakapan baik." text="Kunjungi kami atau hubungi panitia untuk mendapatkan informasi PPDB yang lebih lengkap." light /><div className="space-y-4 text-sm text-emerald-50/75">{[['0812 1183 2567', MessageCircle], ['dhkediri@gmail.com', Landmark], ['Jl. KH Wachid Hasyim, Bandar Lor, Kec. Mojoroto, Kota Kediri, Jawa Timur 64114', Mountain], ['Senin–Sabtu, 08.00–16.00 WIB', Users]].map(([text, Icon]) => <div key={text as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><Icon size={18} /></div><span>{text as string}</span></div>)}</div></div><div className="min-h-72 overflow-hidden rounded-[28px] border border-white/10 bg-emerald-900 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"><iframe title="Lokasi Pondok Darul Hijrah Kediri" src="https://www.google.com/maps?q=Kota%20Kediri%20Jawa%20Timur&output=embed" className="size-full min-h-72 border-0 opacity-80 grayscale" loading="lazy" /></div></div></section>
    </main>
    <footer className="bg-emerald-950 px-5 pb-8 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 text-xs text-emerald-50/60 md:flex-row md:items-center md:justify-between"><p>© 2025 Darul Hijrah Kediri. Semua hak dilindungi.</p><div className="flex items-center gap-4"><a href="#beranda" className="transition hover:text-gold">Kembali ke atas</a><span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold"><Camera size={16} /></span></div></div></footer>
  </div>
}

export default PpdbLanding

