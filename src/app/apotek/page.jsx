import React from 'react'

const page = () => {
  return (
    <div>
            <div className="max-w-5xl mx-auto p-6">
      {/* Header Apotek */}
      <section className="bg-teal-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Layanan Apotek</h1>
        <p className="text-lg">
          Apotek kami menyediakan berbagai obat dengan pelayanan profesional dan ramah.
        </p>
      </section>

      {/* Tentang Layanan Apotek */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Tentang Layanan Apotek</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Apotek kami mendukung kebutuhan obat-obatan untuk pasien rawat inap dan rawat jalan dengan ketersediaan obat yang lengkap.
        </p>
      </section>

      {/* Jenis Obat yang Tersedia */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Jenis Obat yang Tersedia</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Obat Resep</li>
          <li>Obat Bebas</li>
          <li>Vitamin dan Suplemen</li>
          <li>Produk Kesehatan lainnya</li>
        </ul>
      </section>

      {/* Keunggulan Layanan Apotek */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Keunggulan Layanan Apotek Kami</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">1. Obat Lengkap dan Terjamin</h3>
            <p className="text-gray-600">
              Kami menyediakan berbagai jenis obat yang aman, terjamin, dan selalu tersedia untuk kebutuhan pasien.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">2. Konsultasi dengan Apoteker</h3>
            <p className="text-gray-600">
              Apoteker kami siap membantu Anda dengan informasi terkait penggunaan obat dan dosis yang sesuai.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Layanan Apotek */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Jadwal Layanan Apotek</h2>
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
              <td className="py-2 px-4 border">08:00 - 18:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Sabtu - Minggu</td>
              <td className="py-2 px-4 border">09:00 - 14:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cara Pendaftaran */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Cara Pendaftaran dan Pengambilan Obat</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Untuk pengambilan obat, Anda dapat datang langsung ke apotek atau melalui layanan online kami dengan registrasi cepat dan mudah.
        </p>
        <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
          Daftar Sekarang
        </button>
      </section>
    </div>
    </div>
  )
}

export default page