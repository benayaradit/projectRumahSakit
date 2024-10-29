'use client'
import React, { useState } from 'react';

const FormPendaftaran = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Langkah 1: Informasi Pribadi</h2>
          {/* Form Informasi Pribadi */}
          <button onClick={nextStep} className="bg-teal-600 text-white py-2 px-4 rounded-md mt-4">Lanjut</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Langkah 2: Informasi Kesehatan</h2>
          {/* Form Informasi Kesehatan */}
          <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2">Kembali</button>
          <button onClick={nextStep} className="bg-teal-600 text-white py-2 px-4 rounded-md">Lanjut</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Langkah 3: Konfirmasi</h2>
          {/* Konfirmasi Informasi */}
          <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2">Kembali</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md">Daftar</button>
        </div>
      )}
    </div>
  );
};

export default FormPendaftaran;