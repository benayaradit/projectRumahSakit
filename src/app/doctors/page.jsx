import React from 'react'

const page = () => {
    const doctors = [
        {
          name: 'Dr. Darius, Sp.A',
          specialization: 'Spesialis Anak',
          schedule: [
            { day: 'Senin', time: '08:00 - 12:00' },
            { day: 'Rabu', time: '10:00 - 14:00' },
            { day: 'Jumat', time: '08:00 - 12:00' },
          ],
        },
        {
          name: 'Dr. Benaya, Sp.PD',
          specialization: 'Spesialis Penyakit Dalam',
          schedule: [
            { day: 'Selasa', time: '09:00 - 13:00' },
            { day: 'Kamis', time: '13:00 - 17:00' },
            { day: 'Sabtu', time: '10:00 - 14:00' },
          ],
        },
        {
          name: 'Dr. Gabriel, Sp.Rad',
          specialization: 'Spesialis Radiologi',
          schedule: [
            { day: 'Senin', time: '13:00 - 17:00' },
            { day: 'Kamis', time: '08:00 - 12:00' },
          ],
        },
        // Tambahkan data dokter lainnya di sini
      ];
    
      return (
        <div className="max-w-6xl mx-auto p-6">
          {/* Header Dokter */}
          <section className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Daftar Dokter dan Jadwal</h1>
            <p className="text-lg">
              Temukan informasi tentang dokter spesialis kami dan jadwal praktik mereka.
            </p>
          </section>
    
          {/* Daftar Dokter dan Jadwal */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition">
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">{doctor.name}</h2>
                <p className="text-gray-700 mb-4">{doctor.specialization}</p>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Jadwal Praktik:</h3>
                <ul className="text-gray-700 space-y-2">
                  {doctor.schedule.map((daySchedule, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{daySchedule.day}</span>
                      <span>{daySchedule.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      );
}

export default page