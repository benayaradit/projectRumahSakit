import Link from "next/link"
import ServiceCard from "../ServiceCard"
import Testimonial from "../Testimonial"

const InfoHomePage=()=>{
    return(
        <div className="container p-4">
  <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Rumah Sakit Ayahanda</h1>
        <p className="text-lg mb-6">Kami berkomitmen untuk menyediakan layanan kesehatan terbaik untuk Anda dan keluarga.</p>
        <Link
          href="#form-pendaftaran"
          className="bg-white text-teal-700 py-3 px-6 rounded-md hover:bg-gray-200 font-semibold transition"
        >
          Daftar Sekarang
        </Link>
      </section>

      {/* About Us Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Tentang Kami</h2>
        <p className="text-gray-700 leading-relaxed">
          Rumah Sakit Sehat Selalu telah berdiri sejak 1990 dengan visi untuk memberikan layanan kesehatan yang aman, nyaman, dan terpercaya bagi masyarakat. Dengan tenaga medis profesional dan fasilitas yang modern, kami siap melayani Anda 24 jam sehari.
        </p>
      </section>

      {/* Services Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard href={'/ugd'} title="Unit Gawat Darurat (UGD)" description="Layanan darurat 24 jam dengan tenaga medis berpengalaman." />
          <ServiceCard href={'/poliklinik'} title="Poliklinik Umum" description="Layanan konsultasi umum untuk berbagai keluhan kesehatan." />
          <ServiceCard href={'/spesialis-anak'} title="Spesialis Kesehatan Anak" description="Perawatan khusus untuk kesehatan anak Anda." />
          <ServiceCard href={'/laboratorium'} title="Laboratorium" description="Layanan lab lengkap untuk tes darah, urinalisis, dan lainnya." />
          <ServiceCard href={'/radiologi'} title="Radiologi" description="Pemindaian X-ray, CT-scan, dan MRI dengan teknologi terbaru." />
          <ServiceCard href={'/apotek'} title="Apotek" description="Layanan apotek dengan obat-obatan lengkap dan berkualitas." />
        </div>
      </section>

      {/* Doctor Schedule Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Jadwal Dokter</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">Temui dokter spesialis kami sesuai jadwal:</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 font-medium text-gray-600">Nama Dokter</th>
                <th className="border-b p-2 font-medium text-gray-600">Spesialisasi</th>
                <th className="border-b p-2 font-medium text-gray-600">Hari & Jam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Dr. Benaya</td>
                <td className="border-b p-2">Umum</td>
                <td className="border-b p-2">Senin - Jumat, 09:00 - 16:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Dr. Darius </td>
                <td className="border-b p-2">Anak</td>
                <td className="border-b p-2">Selasa & Kamis, 13:00 - 17:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Dr. Gabriel</td>
                <td className="border-b p-2">Kardiologi</td>
                <td className="border-b p-2">Rabu & Jumat, 10:00 - 15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Testimoni Pasien</h2>
        <div className="space-y-6">
          <Testimonial
            name="Andika Rahman"
            feedback="Pelayanan yang luar biasa! Dokternya sangat profesional dan ramah. Saya merasa sangat terbantu."
          />
          <Testimonial
            name="Siti Aisyah"
            feedback="Rumah sakit yang bersih dengan fasilitas yang lengkap. Saya merasa nyaman saat berobat di sini."
          />
          <Testimonial
            name="Yusuf Pratama"
            feedback="Layanan gawat darurat sangat cepat dan responsif. Terima kasih untuk semua bantuan tim medis."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-10">
        <Link
          href="#form-pendaftaran"
          className="bg-teal-700  text-white py-3 px-6 rounded-md hover:bg-teal-800 font-semibold transition"
        >
          Daftar Online Sekarang
        </Link>
      </section>
    </div>
</div>
    )
}

export default InfoHomePage