'use client'

import { useState } from "react";

const Page =()=>{
    const [formData, setFormData] = useState({
        nama: '',
        tanggalLahir: '',
        email: '',
        nomorHp: '',
        keluhan: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Pendaftaran Berhasil!');
        // Di sini Anda dapat mengirim data ke backend atau database.
      };
return (
    <div>
    <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Pendaftaran Pasien Online</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Tanggal Lahir</label>
          <input
            type="date"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Nomor HP</label>
          <input
            type="tel"
            name="nomorHp"
            value={formData.nomorHp}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Keluhan</label>
          <textarea
            name="keluhan"
            value={formData.keluhan}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
          Daftar
        </button>
      </form>
    </div>
    </div>
)
}

export default Page