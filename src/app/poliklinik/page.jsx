import React from 'react'

const page = () => {
  return (
    <div>
            <div className="max-w-5xl mx-auto p-6">
      {/* Header Poliklinik Umum */}
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Poliklinik Umum</h1>
        <p className="text-lg">Layanan kesehatan umum dengan dokter berpengalaman untuk pemeriksaan rutin dan diagnosa awal.</p>
      </section>

      {/* Tentang Poliklinik Umum */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Poliklinik Umum</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Poliklinik Umum Rumah Sakit Sehat Selalu menyediakan layanan pemeriksaan dan konsultasi umum untuk pasien dari segala usia.
          Kami menawarkan pemeriksaan kesehatan rutin, diagnosis awal, serta perawatan untuk berbagai kondisi kesehatan umum.
        </p>
      </section>

      {/* Layanan Poliklinik Umum */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Layanan yang Tersedia</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Pemeriksaan kesehatan umum</li>
          <li>Konsultasi kesehatan untuk berbagai kondisi umum</li>
          <li>Pemeriksaan tekanan darah, kadar gula, dan kolesterol</li>
          <li>Penanganan awal untuk kondisi akut ringan seperti flu, demam, dan sakit kepala</li>
          <li>Rujukan ke spesialis bila diperlukan</li>
        </ul>
      </section>

      {/* Keunggulan Poliklinik Umum */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Keunggulan Poliklinik Umum Kami</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">1. Tim Dokter Berpengalaman</h3>
            <p className="text-gray-600">
              Dokter umum kami memiliki pengalaman dan pengetahuan luas untuk membantu Anda menjaga kesehatan secara optimal.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">2. Fasilitas Lengkap</h3>
            <p className="text-gray-600">
              Poliklinik Umum kami dilengkapi dengan fasilitas modern untuk mendukung diagnosis dan perawatan yang akurat.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">3. Pendekatan Holistik</h3>
            <p className="text-gray-600">
              Kami percaya pada pendekatan menyeluruh, memastikan setiap pasien mendapatkan perhatian yang sesuai untuk kondisi kesehatan mereka.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Dokter */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Jadwal Dokter Poliklinik Umum</h2>
        <table className="w-full text-gray-700 border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Nama Dokter</th>
              <th className="py-2 px-4 border">Hari Praktik</th>
              <th className="py-2 px-4 border">Jam Praktik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">Dr. Andi Santoso</td>
              <td className="py-2 px-4 border">Senin - Rabu</td>
              <td className="py-2 px-4 border">08:00 - 12:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Dr. Budi Setiawan</td>
              <td className="py-2 px-4 border">Kamis - Sabtu</td>
              <td className="py-2 px-4 border">10:00 - 14:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Dr. Cindy Lestari</td>
              <td className="py-2 px-4 border">Senin - Jumat</td>
              <td className="py-2 px-4 border">13:00 - 17:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cara Pendaftaran */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Cara Pendaftaran</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Untuk mendaftar konsultasi di Poliklinik Umum, Anda dapat melakukan pendaftaran secara online dengan mengisi formulir pendaftaran yang tersedia di halaman ini, atau mengunjungi bagian pendaftaran di rumah sakit kami.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Daftar Sekarang
        </button>
      </section>
    </div>
    </div>
  )
}

export default page