import React from 'react'

const page = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
    {/* Header UGD */}
    <section className="bg-red-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">Unit Gawat Darurat (UGD)</h1>
      <p className="text-lg">Pelayanan darurat yang siap membantu Anda 24 jam sehari, 7 hari seminggu.</p>
    </section>

    {/* Tentang UGD */}
    <section className="my-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Tentang Layanan UGD</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unit Gawat Darurat Rumah Sakit Sehat Selalu berkomitmen untuk menyediakan perawatan cepat dan tepat
        untuk pasien yang membutuhkan penanganan darurat. Didukung oleh dokter dan tenaga medis profesional,
        kami siap menangani berbagai kondisi darurat, mulai dari kecelakaan, serangan jantung, hingga komplikasi serius lainnya.
      </p>
    </section>

    {/* Fasilitas UGD */}
    <section className="my-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Fasilitas UGD</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>Ambulans siap 24 jam dengan peralatan medis lengkap.</li>
        <li>Ruang penanganan pasien darurat dengan alat bantu hidup dasar dan lanjutan.</li>
        <li>Peralatan untuk pemantauan dan stabilisasi pasien kritis.</li>
        <li>Tim medis terlatih dalam penanganan trauma dan kegawatdaruratan.</li>
        <li>Kamar isolasi untuk penyakit infeksi atau situasi khusus lainnya.</li>
      </ul>
    </section>

    {/* Keunggulan UGD */}
    <section className="my-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Keunggulan Layanan UGD Kami</h2>
      <div className="space-y-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">1. Penanganan Cepat dan Tanggap</h3>
          <p className="text-gray-600">
            Kami memahami bahwa dalam situasi darurat, setiap detik berharga. Tim UGD kami terlatih untuk memberikan
            respons cepat dan sigap dalam menangani pasien.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">2. Tenaga Medis Profesional</h3>
          <p className="text-gray-600">
            UGD kami didukung oleh dokter dan perawat dengan keahlian khusus dalam menangani kasus-kasus darurat.
            Setiap anggota tim siap memberikan perawatan yang tepat dan profesional.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">3. Fasilitas Lengkap dan Modern</h3>
          <p className="text-gray-600">
            Kami dilengkapi dengan peralatan medis terbaru untuk mendukung diagnosa cepat dan penanganan darurat
            secara optimal.
          </p>
        </div>
      </div>
    </section>

    {/* Jadwal Operasional */}
    <section className="my-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Jadwal Operasional UGD</h2>
      <p className="text-gray-700 mb-4">
        UGD Rumah Sakit Sehat Selalu beroperasi 24 jam sehari, 7 hari seminggu. Kami siap menerima pasien kapan pun Anda membutuhkan bantuan darurat.
      </p>
    </section>

    {/* Kontak Darurat */}
    <section className="my-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Kontak Darurat</h2>
      <p className="text-gray-700 mb-4">
        Jika Anda atau keluarga mengalami keadaan darurat medis, segera hubungi kami di nomor berikut:
      </p>
      <p className="text-xl font-bold text-red-600">+62 123 4567 890</p>
      <p className="text-gray-700 mt-4">
        Pastikan untuk memberikan informasi yang jelas saat menghubungi kami agar tim kami dapat merespons secara cepat dan tepat.
      </p>
    </section>
  </div>
  )
}

export default page