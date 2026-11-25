'use client'

import { useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  GraduationCap,
  Camera,
  Landmark,
  Menu,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/628216700693'
const images = {
  hero: '/brosur-1.jpeg',
  courtyard: 'https://images.unsplash.com/photo-1542816417-0983679b4f44?auto=format&fit=crop&w=1000&q=80',
  study: 'https://images.unsplash.com/photo-1594736797933-d0d5b4f2e8d1?auto=format&fit=crop&w=1000&q=80',
  group: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
}

const programs = [
  {
    icon: BookOpen,
    title: 'Qur’an Program',
    text: 'Menjadi ahlul Qur’an, pribadi yang cerdas bersama Al Qur’an. Menjadikan al qur’an dan as sunnah sebagai pedoman hidup.',
    detailGroups: [{
      title: 'Program Al-Qur’an',
      items: [
        'Tahsin dan Tahfidz',
        'Tasmi’ Kamil/baca tanpa melihat mushaf (5/10/15/30 Juz)',
        'Tajwid bersanad',
        'Tadabbur',
        'Menulis metode Qolami',
      ],
    }],
  },
  {
    icon: GraduationCap,
    title: 'Language Program',
    text: 'Menjadi global Muslim citizen, pribadi yang mendunia dengan keterampilan bahasa yang baik.',
    detailGroups: [
      { title: 'English', items: ['English For Adab', 'Grammar', 'Daily Reminder', 'Islamic Preaching', 'TOEFL Prediction'] },
      { title: 'Arab', items: ['Lughotul Arabiyah', 'Nahwu Shorof', 'Muhadharah', 'TOEFL Prediction'] },
    ],
  },
  {
    icon: Landmark,
    title: 'Talent & Leadership Program',
    text: 'Menjadi leader, pribadi yang mampu memimpin diri dan orang lain sesuai teladan nabi Muhammad SAW.',
    detailGroups: [{
      title: 'Pengembangan Bakat dan Kepemimpinan',
      items: [
        'Al Hijrah Football Academy',
        'Beladiri Ju Jitsu',
        'Public Speaking',
        'Perikanan dan peternakan',
        'Multi media',
        'Organisasi Santri',
        'Kepanduan',
        'Pengembangan ibadah, adab dan akhlak',
      ],
    }],
  },
]

const awardees = [
  { name: 'Santri', award: 'Juara 3', event: 'Liga Santri Kediri', image: '/futsal.jpeg' },
  { name: 'Haikal', award: 'Juara 2 Harapan', event: 'Pidato', image: '/pidato-juara-harapan.jpeg', imagePosition: 'object-[50%_18%]' },
  { name: 'Umar', award: 'Juara 1 Harapan', event: 'Pidato', image: '/pidato.jpeg' },
  { name: 'Ihab Amanullah', award: 'Juara 1', event: 'Kick Boxing', image: '/kick-boxing.jpeg' },
]

const gallery = [
  ['/tahfidz.jpg', 'Kegiatan tahfidz Al-Qur’an'],
  ['/even-alquran.jpg', 'Kegiatan Al-Qur’an santri'],
  ['/beladiri.jpg', 'Latihan beladiri Ju Jitsu'],
  ['/pramuka.jpg', 'Kegiatan kepanduan santri'],
  ['/pramuka-1.jpg', 'Pembinaan pramuka'],
  ['/sepak-bola.jpg', 'Akademi sepak bola'],
  ['/sepak-bola-1.jpg', 'Latihan sepak bola santri'],
]

const testimonials = [
  ['/indra.jpg', '“Terima kasih para asatidz yang dengan sabar membimbing para santri yang sedang dalam masa mencari jati diri.”', 'Indra', 'Wali Santri'],
  ['/e-tanjung.webp', '“Respons ustadz bagus, penyampaian informasi dari pondok baik, dan ramah dalam menjawab setiap pertanyaan tentang pondok maupun anak santri.”', 'E-Tanjung', 'Wali Santri'],
  ['/sri-rahayu.jpg', '“Pondok yang nyaman untuk anak, memperhatikan kebutuhan santri dan kondisi wali santri, serta selalu berusaha memberikan yang terbaik.”', 'Sri Rahayu', 'Wali Santri'],
]

type AsatidzProfile = {
  image?: string
  name: string
  education: string[]
  roles: string[]
}

const asatidz: AsatidzProfile[] = [
  {
    name: 'Yogi Eko Widroko, M.Pd.I',
    education: ['S1 Universitas Nusantara PGRI Kediri', 'S2 Darul Ulum Jombang'],
    roles: ['Mudir / Pimpinan', 'Pengampu mata pelajaran Aqidah Akhlak'],
  },
  {
    image: '/ust ahmad.webp',
    name: 'Budi Santoso, M.Pd.',
    education: ['S1 STAI Surabaya', 'S2 AN-Nur Lampung'],
    roles: ['Wakil Mudir', 'Pengampu Tajwid bersanad (Matan Tuhfatul Athfal dan Al-Jazari)'],
  },
  {
    image: '/ust dihya.webp',
    name: "M. Dhiya'ul Haq H, Lc., M.Ag.",
    education: ['S1 Angaff University, Yaman', 'S2 Ma’had Aly Lirboyo'],
    roles: ['Pengampu mata pelajaran Bahasa Arab'],
  },
  {
    image: '/ust juni.webp',
    name: 'Baharudin Juni Hermawan, S.Pd.',
    education: ['S1 Universitas Nusantara PGRI Kediri'],
    roles: ['Pengampu mata pelajaran Bahasa Indonesia, Biologi, dan Matematika'],
  },
  {
    image: '/ust syahrul.webp',
    name: 'Syahrul Mubarak',
    education: [],
    roles: ['Pengampu Siroh & Tadabur'],
  },
]

const unggulan: AsatidzProfile[] = [
  {
    image: '/ust budi.webp',
    name: 'Ahmad Mubarak Abdullah, S.Hub. Int.',
    education: ['Universitas Airlangga Surabaya'],
    roles: ['Koordinator Pendidikan (Formal dan Diniyah)', 'Pengampu mata pelajaran Bahasa Inggris'],
  },
  {
    name: 'Ust. Muhammad Toha',
    education: ['Alumni Ponpes Al-Amin Madura'],
    roles: ['Mas’ul Program Tahfidz'],
  },
  {
    name: 'Coach Ahmad Faruq',
    education: ['Lisensi D PSSI'],
    roles: ['Pelatih SSB (Sekolah Sepak Bola) Darul Hijrah Kediri'],
  },
  {
    name: 'Sensei Jendi Setiawan',
    education: ['Juri Kejurnas, Jakarta 2017', 'Wasit dan Juri SE-Malang Raya 2018'],
    roles: ['Pelatih Beladiri Jujitsu'],
  },
]

function AsatidzCard({ teacher }: { teacher: AsatidzProfile }) {
  const initials = teacher.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <article className="group overflow-hidden rounded-[26px] border border-emerald-900/10 bg-[#f7faf9] shadow-[0_10px_26px_rgba(11,46,41,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(11,46,41,0.12)]">
      <div className="overflow-hidden bg-sand">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="aspect-[4/5] w-full object-cover object-top saturate-[0.85] transition duration-500 group-hover:scale-[1.04] group-hover:saturate-100"
          />
        ) : (
          <div className="grid aspect-[4/5] place-items-center bg-emerald-900/5">
            <span className="grid size-24 place-items-center rounded-full bg-emerald-900/10 font-serif text-3xl text-emerald-950">
              {initials}
            </span>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <h3 className="font-serif text-[1.5rem] leading-tight text-emerald-950">{teacher.name}</h3>
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Lulusan</p>
          {teacher.education.length > 0 ? (
            <ul className="list-inside list-disc space-y-1 text-sm leading-5 text-stone-600">
              {teacher.education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : (
            <p className="text-sm leading-5 text-stone-600">Informasi pendidikan belum dicantumkan.</p>
          )}
        </div>
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Jabatan / Pengajar</p>
          <ul className="list-inside list-disc space-y-1 text-sm leading-5 text-stone-600">
            {teacher.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}

const faqs = [
  ['Berapa kuota penerimaan santri baru?', 'Kuota kami terbatas agar setiap santri mendapatkan pendampingan yang optimal. Silakan hubungi panitia untuk informasi kuota terbaru.'],
  ['Bagaimana skema pembayaran biaya pendidikan?', 'Pembayaran dapat dilakukan secara bertahap sesuai skema yang disepakati. Rincian biaya akan disampaikan saat proses pendaftaran.'],
  ['Apakah wali santri bisa survei pesantren?', 'Tentu. Wali santri dipersilakan berkunjung pada jam operasional dengan melakukan konfirmasi terlebih dahulu melalui WhatsApp.'],
  ['Apakah tersedia program beasiswa?', 'Informasi beasiswa dan keringanan biaya tersedia berdasarkan kebijakan dan kuota pada setiap periode penerimaan.'],
]

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`mb-12 max-w-2xl ${light ? 'text-white' : ''}`}><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>{text && <p className={`mt-5 text-base leading-7 ${light ? 'text-emerald-50/75' : 'text-stone-600'}`}>{text}</p>}</div>
}

function ProgramCard({ program, highlighted }: { program: (typeof programs)[number]; highlighted: boolean }) {
  const Icon = program.icon

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        aria-haspopup="dialog"
        className={`group w-full cursor-pointer rounded-[24px] border p-6 text-left shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${highlighted ? 'border-gold/60 bg-gold text-emerald-950' : 'border-white/10 bg-white/[.04] text-white'}`}
      >
        <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${highlighted ? 'bg-emerald-950/10 text-emerald-950' : 'bg-white/10 text-gold'}`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h3 className="font-serif text-[1.7rem] leading-tight">{program.title}</h3>
        <p className={`mt-3 text-sm leading-6 ${highlighted ? 'text-emerald-900/75' : 'text-emerald-50/70'}`}>{program.text}</p>
        <span className={`mt-5 inline-block text-xs font-bold uppercase tracking-[0.16em] ${highlighted ? 'text-emerald-900' : 'text-gold'}`}>Lihat detail</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-emerald-950/75 backdrop-blur-sm" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-[61] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] border border-emerald-900/10 bg-cream p-6 text-ink shadow-2xl outline-none sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-900 text-gold">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <Dialog.Title className="font-serif text-2xl leading-tight text-emerald-950 sm:text-3xl">{program.title}</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-6 text-stone-600">{program.text}</Dialog.Description>
              </div>
            </div>
            <Dialog.Close aria-label="Tutup detail program" className="grid size-10 shrink-0 place-items-center rounded-full border border-emerald-900/10 text-emerald-950 transition hover:bg-emerald-900 hover:text-white">
              <X size={20} />
            </Dialog.Close>
          </div>

          <div className="mt-7 space-y-6">
            {program.detailGroups.map((group) => (
              <section key={group.title}>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">{group.title}</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-xl border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium leading-5 text-stone-700">
                      <span className="size-2 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function PpdbLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const nav = [['#program', 'Program'], ['#testimoni', 'Kata Mereka'], ['#pendaftaran', 'Pendaftaran'], ['#syarat', 'Syarat'], ['#kontak', 'Kontak']]
  return <div className="min-h-screen bg-cream text-ink">
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between rounded-[28px] border border-emerald-900/10 bg-emerald-950/80 px-4 py-3 shadow-[0_12px_30px_rgba(7,59,50,0.18)] backdrop-blur-sm md:px-6">
          <a href="#beranda" className="flex items-center gap-3 text-white">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/60 bg-white shadow-sm">
              <img src="/logo-dh.png" alt="Logo Darul Hijrah Kediri" className="size-full rounded-full object-contain p-0.5" />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-[1.35rem] leading-none tracking-tight text-white">Darul Hijrah Kediri</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-50/80">Qur’an is Our Crown<br></br>Language is Our Throne<br></br>
Talent is Our Strenght
</span>
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
      <section id="beranda" className="relative flex min-h-[620px] items-start overflow-hidden bg-gradient-to-br from-emerald-950 via-sky-600 to-emerald-900 pb-12 pt-32 text-white md:min-h-[680px] md:pb-16"><img src={images.hero} alt="Brosur Penerimaan Santri Baru Darul Hijrah Kediri 2027/2028" className="absolute inset-0 size-full object-cover object-right-top opacity-60" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%)]" /><div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-emerald-950/10" /><div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/20" /><div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8"><div className="max-w-4xl"><p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold"><span className="h-px w-10 bg-gold" />Penerimaan Santri Baru 2027/2028</p><h1 className="font-serif capitalize text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">Darul Hijrah Kediri melahirkan generasi ahlul qur’an yang berjiwa mujahid dan siap berdakwah ke seluruh dunia, dalam berbagai bidang profesi.</h1><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-emerald-950 transition hover:bg-white">Daftar via WhatsApp <ArrowRight size={17} /></a><a href="#program" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:border-gold hover:text-gold">Jelajahi Program <ArrowRight size={17} /></a><a href="/brosur-ppdb.pdf" download="Brosur-PPDB.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:border-gold hover:text-gold">Unduh Brosur <Download size={17} /></a></div></div></div></section>

      <section id="program" className="scroll-mt-20 border-t-4 border-gold/70 bg-emerald-900 px-5 pt-16 pb-16 text-white md:pt-20 md:pb-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="01 — Program Unggulan" title="Bekal lengkap untuk perjalanan yang panjang." text="Perpaduan pendidikan Al-Qur’an, akademik, dan pengalaman hidup dalam satu ekosistem pembinaan." light /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{programs.map((program, i) => <ProgramCard key={program.title} program={program} highlighted={i === 0} />)}</div></div></section>

      <section className="bg-cream px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="02 — Asatidz & Pengurus" title="Dibimbing oleh mereka yang menjadi teladan." />
          <h3 className="mb-5 font-serif text-2xl text-emerald-950">Pengasuh & Pengajar</h3>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {asatidz.map((teacher) => <AsatidzCard key={teacher.name} teacher={teacher} />)}
          </div>
          <h3 className="mb-5 mt-12 font-serif text-2xl text-emerald-950">Pengampu Program Unggulan</h3>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {unggulan.map((teacher) => <AsatidzCard key={teacher.name} teacher={teacher} />)}
          </div>
        </div>
      </section>

      <section id="penghargaan" className="scroll-mt-20 bg-emerald-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="03 — Galeri Penghargaan" title="Siswa berprestasi." text="Apresiasi atas usaha santri di bidang akademik dan olahraga, termasuk cabang sepak bola." light />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {awardees.map(({ name, award, event, image, imagePosition }, index) => (
              <article key={`${name}-${award}-${event}`} className="rounded-[24px] border border-white/10 bg-white/[.04] p-7 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <div className="mb-6 overflow-hidden rounded-[18px] border border-white/10 bg-white/[.03]">
                  <img
                    src={image}
                    alt={`Foto penghargaan ${name}: ${award}${event ? ` — ${event}` : ''}`}
                    className={`aspect-[16/10] w-full object-cover ${imagePosition ?? 'object-center'}`}
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-3xl text-gold">0{index + 1}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-50/60">Prestasi Santri</span>
                </div>
                <h3 className="mt-8 font-serif text-3xl text-white">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/75">{award}{event && ` — ${event}`}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 — Galeri Kegiatan" title="Hari-hari yang penuh cerita." text="Potret kecil dari kegiatan belajar, pembinaan, dan kebersamaan di Darul Hijrah Kediri." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{gallery.map(([img, caption]) => <figure key={caption} className="group relative aspect-[4/5] overflow-hidden rounded-[24px] border border-emerald-900/10 bg-sand shadow-[0_12px_24px_rgba(11,46,41,0.06)]"><img src={img} alt={caption} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-14 text-sm font-semibold text-white">{caption}</figcaption></figure>)}</div></div></section>

      <section id="testimoni" className="scroll-mt-20 bg-sand px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 — Kata Mereka" title="Cerita baik dari keluarga Darul Hijrah." text="Kepercayaan orang tua dan pengalaman santri menjadi bagian penting dari perjalanan pendidikan kami." /><div className="grid gap-5 lg:grid-cols-3">{testimonials.map(([img, quote, name, role]) => <article key={name} className="flex min-h-72 flex-col justify-between overflow-hidden rounded-[24px] border border-emerald-900/10 bg-cream shadow-[0_12px_24px_rgba(11,46,41,0.05)]"><img src={img} alt={`Foto ${name}`} className="mt-7 size-20 self-center rounded-full object-cover object-top ring-4 ring-sand" /><div className="flex flex-1 flex-col justify-between p-7"><div><span className="font-serif text-5xl leading-none text-gold">“</span><blockquote className="mt-2 font-serif text-xl leading-8 text-emerald-950">{quote.replace(/^“|”$/g, '')}</blockquote></div><footer className="mt-8 border-t border-emerald-900/10 pt-5"><p className="font-bold text-emerald-950">{name}</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">{role}</p></footer></div></article>)}</div></div></section>

      <section id="pendaftaran" className="scroll-mt-20 bg-cream px-5 py-24 text-ink lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="06 — Pendaftaran" title="Pendaftaran Santri Baru 2027/2028" text="Informasi inti pendaftaran. Jadwal lengkap, persyaratan, alur, dan rincian biaya tersedia di file informasi." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-emerald-900/10 bg-white p-5 sm:p-6">
              <h3 className="font-serif text-xl text-emerald-950 sm:text-2xl">Jadwal Pendaftaran</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700 sm:text-base">
                <li><strong>Gelombang I:</strong> Agustus–Desember 2026</li>
                <li><strong>Gelombang II:</strong> Januari–Maret 2027</li>
                <li><strong>Gelombang III:</strong> April–Juni 2027</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-900/10 bg-white p-5 sm:p-6">
              <h3 className="font-serif text-xl text-emerald-950 sm:text-2xl">Kuota Penerimaan</h3>
              <p className="mt-4 text-sm leading-6 text-stone-700 sm:text-base">Boarding School putra: <strong>30 santri</strong><br />Putri: <strong>20 santri</strong></p>
              <p className="mt-2 text-xs leading-5 text-stone-500 sm:text-sm">Pendaftaran ditutup jika kuota telah terpenuhi.</p>
            </article>
            <article className="flex flex-col justify-between rounded-2xl border border-emerald-900/10 bg-white p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
              <div>
                <h3 className="font-serif text-xl text-emerald-950 sm:text-2xl">Informasi Lengkap</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700 sm:text-base">Unduh panduan resmi untuk melihat syarat, alur pendaftaran, jadwal, dan rincian biaya.</p>
              </div>
              <a href="/Informasi_PPDB_SMP_SMA_DH%20KEDIRI%202027-2028.pdf" download className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-900/20 bg-emerald-50 px-4 py-3 text-center text-sm font-bold leading-5 text-emerald-900 transition hover:bg-emerald-900 hover:text-white">
                Unduh File Informasi <Download size={17} className="shrink-0" />
              </a>
            </article>
          </div>
          <a href="https://web-dh-kediri.vercel.app/" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-center text-sm font-bold text-emerald-950 transition hover:bg-emerald-900 hover:text-white sm:w-auto">Mulai Pendaftaran <ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="syarat" className="scroll-mt-20 bg-cream px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2"><div><SectionHeading eyebrow="07 — Syarat Pendaftaran" title="Siapkan dokumen pendaftaran." text="Syarat, ketentuan beasiswa, dan dokumen yang perlu disiapkan tersedia lengkap di file informasi PPDB 2027/2028." /><a href="/Informasi_PPDB_SMP_SMA_DH%20KEDIRI%202027-2028.pdf" download className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-900/20 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-900 hover:text-white sm:w-auto">Unduh File Informasi <Download size={17} /></a></div><div className="rounded-2xl bg-sand p-8"><ShieldCheck className="text-emerald-800" size={34} strokeWidth={1.5} /><h3 className="mt-10 font-serif text-3xl">Butuh informasi lebih lanjut?</h3><p className="mt-3 leading-7 text-stone-600">Tim penerimaan kami siap membantu menjawab pertanyaan Ayah dan Bunda.</p><a href={WHATSAPP} className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800">Tanya panitia <ArrowRight size={17} /></a></div></div></section>

      <section className="bg-sand px-5 py-24 lg:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="10 — Pertanyaan Umum" title="Yang sering ditanyakan." />{faqs.map(([question, answer], i) => <div key={question} className="mb-3 rounded-[20px] border border-emerald-950/10 bg-cream shadow-[0_8px_18px_rgba(11,46,41,0.04)]"><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-serif text-xl"><span>{question}</span><ChevronDown className={`shrink-0 text-gold transition ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <p className="px-5 pb-5 text-sm leading-7 text-stone-600">{answer}</p>}</div>)}</div></section>

      <section id="kontak" className="scroll-mt-20 bg-emerald-950 px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="11 — Hubungi Kami" title="Mari mulai percakapan baik." text="Kunjungi kami atau hubungi panitia untuk mendapatkan informasi PPDB yang lebih lengkap." light /><div className="space-y-4 text-sm text-emerald-50/75">{[['+62 821-6700-693', MessageCircle], ['dhkediri@gmail.com', Landmark], ['Jl. KH Wachid Hasyim, Bandar Lor, Kec. Mojoroto, Kota Kediri, Jawa Timur 64114', Mountain], ['Senin–Sabtu, 08.00–16.00 WIB', Users]].map(([text, Icon]) => <div key={text as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><Icon size={18} /></div><span>{text as string}</span></div>)}</div></div><div className="min-h-72 overflow-hidden rounded-[28px] border border-white/10 bg-emerald-900 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"><iframe title="Lokasi Pondok Darul Hijrah Kediri" src="https://www.google.com/maps?q=Kota%20Kediri%20Jawa%20Timur&output=embed" className="size-full min-h-72 border-0 opacity-80 grayscale" loading="lazy" /></div></div></section>
    </main>
    <footer className="bg-emerald-950 px-5 pb-8 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 text-xs text-emerald-50/60 md:flex-row md:items-center md:justify-between"><p>© 2025 Darul Hijrah Kediri. Semua hak dilindungi.</p><div className="flex items-center gap-4"><a href="#beranda" className="transition hover:text-gold">Kembali ke atas</a><span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold"><Camera size={16} /></span></div></div></footer>
  </div>
}

export default PpdbLanding
