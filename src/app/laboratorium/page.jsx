import React from 'react'

const page = () => {
  return (
    <div>
            <div className="max-w-5xl mx-auto p-6">
      {/* Header Laboratorium */}
      <section className="bg-purple-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Layanan Laboratorium</h1>
        <p className="text-lg">
          Layanan laboratorium yang lengkap dan terpercaya untuk berbagai pemeriksaan medis dengan teknologi terbaru.
        </p>
      </section>

      {/* Tentang Layanan Laboratorium */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Tentang Layanan Laboratorium</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Laboratorium kami menyediakan berbagai jenis pemeriksaan medis yang membantu dalam diagnosis dan pemantauan
          kesehatan pasien, dengan hasil yang cepat dan akurat.
        </p>
      </section>

      {/* Jenis Pemeriksaan yang Tersedia */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Jenis Pemeriksaan yang Tersedia</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Pemeriksaan Darah Lengkap (Complete Blood Count)</li>
          <li>Profil Lipid (Kolesterol, LDL, HDL)</li>
          <li>Pemeriksaan Gula Darah (Glukosa Puasa, Tes HbA1c)</li>
          <li>Urinalisis</li>
          <li>Fungsi Hati (SGOT, SGPT)</li>
          <li>Fungsi Ginjal (Ureum, Kreatinin)</li>
          <li>Pengujian Infeksi (Tes Antibodi dan Antigen)</li>
          <li>Pemeriksaan Hormon dan Endokrinologi</li>
          <li>Pengujian Alergi</li>
        </ul>
      </section>

      {/* Keunggulan Layanan Laboratorium */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Keunggulan Layanan Laboratorium Kami</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">1. Teknologi Mutakhir</h3>
            <p className="text-gray-600">
              Laboratorium kami dilengkapi dengan alat diagnostik terbaru untuk hasil yang akurat dan cepat.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">2. Tim Profesional dan Berpengalaman</h3>
            <p className="text-gray-600">
              Didukung oleh tenaga profesional terlatih, termasuk ahli patologi, teknisi laboratorium, dan staf medis lainnya.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">3. Proses Cepat dan Hasil Akurat</h3>
            <p className="text-gray-600">
              Kami berkomitmen untuk memberikan hasil pemeriksaan yang akurat dan tepat waktu.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Layanan Laboratorium */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Jadwal Layanan Laboratorium</h2>
        <table className="w-full text-gray-700 border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Hari</th>
              <th className="py-2 px-4 border">Jam Buka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">Senin - Jumat</td>
              <td className="py-2 px-4 border">07:00 - 17:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Sabtu</td>
              <td className="py-2 px-4 border">08:00 - 13:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Minggu</td>
              <td className="py-2 px-4 border">Tutup</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cara Pendaftaran */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Cara Pendaftaran</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Untuk mendaftar layanan laboratorium, Anda dapat melakukan pendaftaran secara online atau langsung di laboratorium kami.
          Silakan isi formulir di bawah atau kunjungi bagian pendaftaran di rumah sakit kami.
        </p>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
          Daftar Sekarang
        </button>
      </section>
    </div>
    </div>
  )
}

export default page