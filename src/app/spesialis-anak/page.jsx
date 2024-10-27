import React from 'react'

const page = () => {
  return (
    <div>
            <div className="max-w-5xl mx-auto p-6">
      {/* Header Spesialis Anak */}
      <section className="bg-green-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Poliklinik Spesialis Anak</h1>
        <p className="text-lg">
          Layanan khusus untuk kesehatan anak-anak, mulai dari bayi hingga remaja, dengan dokter spesialis berpengalaman.
        </p>
      </section>

      {/* Tentang Poliklinik Spesialis Anak */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Tentang Poliklinik Spesialis Anak</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Poliklinik Spesialis Anak Rumah Sakit Sehat Selalu menyediakan layanan kesehatan komprehensif bagi anak-anak. 
          Kami menyediakan perawatan medis khusus mulai dari pemeriksaan rutin hingga penanganan penyakit kronis.
        </p>
      </section>

      {/* Layanan Spesialis Anak */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Layanan yang Tersedia</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Pemeriksaan kesehatan rutin untuk bayi dan anak-anak</li>
          <li>Vaksinasi lengkap sesuai usia</li>
          <li>Konsultasi gizi dan tumbuh kembang anak</li>
          <li>Penanganan infeksi dan penyakit kronis pada anak</li>
          <li>Konsultasi masalah kesehatan mental dan perilaku anak</li>
          <li>Pemeriksaan dan penanganan alergi pada anak</li>
        </ul>
      </section>

      {/* Keunggulan Poliklinik Spesialis Anak */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Keunggulan Layanan Spesialis Anak</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">1. Dokter Spesialis Anak Terlatih</h3>
            <p className="text-gray-600">
              Tim kami terdiri dari dokter spesialis anak yang berpengalaman dalam berbagai bidang pediatri untuk memastikan
              anak Anda mendapatkan perawatan terbaik.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">2. Fasilitas Ramah Anak</h3>
            <p className="text-gray-600">
              Poliklinik kami dirancang dengan kenyamanan anak-anak dalam pikiran, memberikan pengalaman positif
              untuk pasien kecil kami.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">3. Pendekatan Holistik dan Proaktif</h3>
            <p className="text-gray-600">
              Kami mengutamakan pendekatan holistik, tidak hanya menangani penyakit tetapi juga memastikan tumbuh kembang optimal anak Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Dokter Spesialis Anak */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Jadwal Dokter Spesialis Anak</h2>
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
              <td className="py-2 px-4 border">Dr. Aisyah Rahmawati, Sp.A</td>
              <td className="py-2 px-4 border">Senin - Rabu</td>
              <td className="py-2 px-4 border">08:00 - 12:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Dr. Ridwan Hidayat, Sp.A</td>
              <td className="py-2 px-4 border">Kamis - Sabtu</td>
              <td className="py-2 px-4 border">10:00 - 14:00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Dr. Maria Susanti, Sp.A</td>
              <td className="py-2 px-4 border">Senin - Jumat</td>
              <td className="py-2 px-4 border">13:00 - 17:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cara Pendaftaran */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Cara Pendaftaran</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Untuk mendaftar layanan di Poliklinik Spesialis Anak, Anda dapat melakukan pendaftaran secara online dengan mengisi formulir yang tersedia, atau mengunjungi bagian pendaftaran di rumah sakit.
        </p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
          Daftar Sekarang
        </button>
      </section>
    </div>
    </div>
  )
}

export default page