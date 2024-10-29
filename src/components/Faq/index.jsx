"use client"
import React, { useState } from 'react';

const FAQPage = () => {
  // Data pertanyaan dan jawaban
  const faqData = [
    {
      question: 'Bagaimana cara mendaftar layanan secara online?',
      answer: 'Anda bisa mendaftar layanan secara online melalui halaman pendaftaran di website kami. Pilih layanan yang diinginkan, isi formulir pendaftaran, dan ikuti petunjuk selanjutnya hingga pendaftaran selesai.',
    },
    {
      question: 'Apa saja jam operasional rumah sakit?',
      answer: 'Jam operasional rumah sakit kami adalah 24 jam untuk layanan darurat. Poliklinik buka dari Senin hingga Jumat, pukul 08:00 - 16:00, dan Sabtu, pukul 08:00 - 12:00.',
    },
    {
      question: 'Apakah perlu membuat janji temu untuk konsultasi?',
      answer: 'Untuk konsultasi dengan dokter spesialis, Anda disarankan untuk membuat janji temu terlebih dahulu untuk menghindari waktu tunggu yang lama. Untuk pendaftaran janji temu, silakan kunjungi halaman layanan atau hubungi kami.',
    },
    {
      question: 'Apakah rumah sakit menerima asuransi kesehatan?',
      answer: 'Ya, kami bekerja sama dengan berbagai perusahaan asuransi kesehatan. Silakan hubungi bagian administrasi kami untuk informasi lebih lanjut tentang asuransi yang dapat digunakan di rumah sakit ini.',
    },
    {
      question: 'Bagaimana cara mendapatkan hasil lab atau radiologi?',
      answer: 'Hasil lab dan radiologi dapat diambil langsung di bagian administrasi setelah proses pemeriksaan selesai. Anda juga bisa mengakses hasil secara online melalui portal pasien yang tersedia di website kami.',
    },
    // Tambahkan pertanyaan dan jawaban lain sesuai kebutuhan
  ];

  // State untuk menyimpan pertanyaan yang terbuka
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Fungsi untuk mengatur pertanyaan yang terbuka
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div id='faq' className="max-w-4xl mx-auto p-6">
      {/* Header FAQ */}
      <section className="bg-purple-600 text-white p-8 rounded-lg shadow-lg text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h1>
        <p className="text-lg">
          Temukan jawaban atas pertanyaan umum mengenai layanan dan fasilitas rumah sakit kami.
        </p>
      </section>

      {/* Daftar Pertanyaan dan Jawaban */}
      <section>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-purple-600">
                {item.question}
              </h2>
              <span className={`text-purple-600 text-xl transform ${openQuestionIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
            {openQuestionIndex === index && (
              <p className="text-gray-700 mt-4">{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQPage;