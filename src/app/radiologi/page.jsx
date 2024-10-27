import React from 'react'

const page = () => {
  return (
    <div>
            <div className="max-w-5xl mx-auto p-6">
      {/* Header Radiologi */}
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Layanan Radiologi</h1>
        <p className="text-lg">
          Kami menyediakan layanan radiologi dengan teknologi terbaru untuk mendukung diagnosa yang akurat.
        </p>
      </section>

      {/* Tentang Layanan Radiologi */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Layanan Radiologi</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Layanan Radiologi kami meliputi pemeriksaan diagnostik dengan teknologi seperti X-ray, CT scan, MRI, dan USG.
        </p>
      </section>

      {/* Jenis Pemeriksaan yang Tersedia */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Jenis Pemeriksaan yang Tersedia</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Rontgen (X-ray)</li>
          <li>CT Scan</li>
          <li>MRI (Magnetic Resonance Imaging)</li>
          <li>USG (Ultrasonography)</li>
          <li>Mammografi</li>
          <li>Fluoroskopi</li>
        </ul>
      </section>

      {/* Keunggulan Layanan Radiologi */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Keunggulan Layanan Radiologi Kami</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">1. Teknologi Terkini</h3>
            <p className="text-gray-600">
              Radiologi kami dilengkapi dengan peralatan modern yang memastikan hasil yang detail dan cepat.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">2. Dokter Spesialis Berpengalaman</h3>
            <p className="text-gray-600">
              Tim kami terdiri dari dokter spesialis radiologi yang profesional dan berpengalaman.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Layanan Radiologi */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Jadwal Layanan Radiologi</h2>
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
              <td className="py-2 px-4 border">08:00 - 16:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Sabtu</td>
              <td className="py-2 px-4 border">08:00 - 12:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cara Pendaftaran */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Cara Pendaftaran</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Untuk melakukan pemeriksaan radiologi, Anda bisa mendaftar secara online atau mengunjungi bagian radiologi rumah sakit kami.
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