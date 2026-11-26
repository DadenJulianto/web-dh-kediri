import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    absolute: 'SSB Kediri – Prestasi Juara 3 Liga Santri & Pembinaan Sepak Bola | Darul Hijrah Kediri',
  },
  description: 'Liputan prestasi tim sepak bola santri Darul Hijrah Kediri meraih Juara 3 Liga Santri Kediri serta informasi lengkap pendaftaran Sekolah Sepak Bola (SSB) di Kediri.',
  keywords: [
    'SSB Kediri',
    'Sekolah Sepak Bola Kediri',
    'Liga Santri Kediri',
    'SSB Darul Hijrah Kediri',
    'Pesantren Sepak Bola Kediri',
  ],
  alternates: {
    canonical: 'https://www.darulhijrahkediri.com/ssb-kediri',
  },
}

export default function SsbKediriPage() {
  return (
    <main className="min-h-screen bg-[#063b2c] px-5 py-8 text-white sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
        >
          ← Kembali ke Beranda
        </Link>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-amber-300/20 bg-[#f8f6ef] text-emerald-950 shadow-2xl shadow-black/20 sm:mt-10">
          <header className="bg-[#073b32] px-6 py-10 sm:px-10 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Prestasi Santri · Sepak Bola
            </p>
            <h1 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-5xl">
              SSB Kediri: Meraih Juara 3 Liga Santri Kediri &amp; Membina Generasi Pesepak Bola Santri
            </h1>
          </header>

          <figure>
            <img
              src="/futsal.jpeg"
              alt="Tim Sepak Bola Santri Darul Hijrah Kediri Juara 3 Liga Santri Kediri - SSB Kediri"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="bg-[#eee7d7] px-6 py-3 text-sm text-emerald-900 sm:px-10">
              Tim sepak bola santri Darul Hijrah Kediri, peraih Juara 3 Liga Santri Kediri.
            </figcaption>
          </figure>

          <div className="space-y-10 px-6 py-9 sm:px-10 sm:py-12">
            <section>
              <h2 className="font-serif text-2xl text-emerald-950 sm:text-3xl">
                Kisah Perjalanan Meraih Juara 3 Liga Santri Kediri
              </h2>
              <p className="mt-4 leading-8 text-stone-700">
                Prestasi Juara 3 Liga Santri Kediri menjadi kebanggaan bagi para santri Darul Hijrah Kediri.
                Hasil ini lahir dari semangat berlatih, kerja sama tim, disiplin, dan keberanian untuk terus
                belajar di setiap pertandingan. Kompetisi ini juga menjadi ruang bagi para santri untuk
                mengembangkan kemampuan sekaligus menjaga sportivitas dan sikap saling menghargai.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-emerald-950 sm:text-3xl">
                Profil Sekolah Sepak Bola (SSB) Darul Hijrah Kediri
              </h2>
              <p className="mt-4 leading-8 text-stone-700">
                Pembinaan sepak bola Darul Hijrah Kediri mengembangkan kemampuan fisik dan teknik bermain
                seiring dengan pendidikan tahfidz serta pembentukan karakter santri. Latihan olahraga
                menjadi bagian dari pendidikan yang mendorong disiplin, tanggung jawab, kerja sama, dan
                semangat untuk berusaha dengan baik, baik di lapangan maupun dalam kehidupan sehari-hari.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-emerald-950 sm:text-3xl">
                Program Latihan, Kelompok Usia, dan Jadwal Kegiatan
              </h2>
              <p className="mt-4 leading-8 text-stone-700">
                Program latihan mencakup kebugaran, penguasaan teknik dasar, pemahaman permainan, dan
                latihan kerja sama tim. Pembinaan dapat disesuaikan dengan tahap perkembangan dan kelompok
                usia peserta. Jadwal kegiatan serta informasi kelompok yang tersedia disampaikan langsung
                oleh panitia saat konsultasi pendaftaran agar sesuai dengan kegiatan pendidikan santri.
              </p>
            </section>

            <section className="rounded-2xl border border-amber-400/50 bg-[#eee7d7] p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-emerald-950 sm:text-3xl">
                Bergabung dengan Pembinaan Sepak Bola Santri
              </h2>
              <p className="mt-3 leading-7 text-stone-700">
                Hubungi panitia untuk menanyakan pendaftaran, kelompok usia, program latihan, dan jadwal kegiatan.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/628216700693"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#063b2c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-900"
                >
                  Tanya via WhatsApp
                </a>
                <Link
                  href="/#pendaftaran"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-900/20 px-6 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-white/70"
                >
                  Informasi Pendaftaran
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
