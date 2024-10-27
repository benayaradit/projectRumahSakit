import React from 'react';

const HospitalInfo = () => {
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-teal-700 mb-4">Rumah Sakit Sehat Selalu</h1>
      <p className="text-gray-600 mb-2">Jl. Kesehatan No. 123, Jakarta</p>
      <p className="text-gray-600 mb-4">Kontak: +62 123 4567 890</p>

      <h2 className="text-xl font-semibold text-teal-700 mb-2">Jam Operasional</h2>
      <p className="text-gray-700">Senin - Jumat: 08:00 - 20:00</p>
      <p className="text-gray-700 mb-4">Sabtu - Minggu: 08:00 - 17:00</p>

      <h2 className="text-xl font-semibold text-teal-700 mb-2">Layanan Utama</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Unit Gawat Darurat (UGD)</li>
        <li>Poliklinik Umum & Spesialis</li>
        <li>Laboratorium</li>
        <li>Radiologi</li>
        <li>Apotek</li>
      </ul>
    </div>
  );
};

export default HospitalInfo;
