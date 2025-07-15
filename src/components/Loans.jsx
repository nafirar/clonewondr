export default function Loans() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-normal">
            Pinjaman fleksibel, akses cepat, bunga bersahabat!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ubah Cicilan */}
          <div className="bg-[#E5D9FF] rounded-2xl lg:rounded-3xl flex flex-col overflow-hidden">
            <div className="p-6 lg:p-8 space-y-4">
              <h3 className="text-sm md:text-base text-black font-light">
                Ubah Cicilan
              </h3>
              <h2 className="text-xl md:text-3xl font-semibold text-black">
                Bayar tagihan jadi ringan
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                Punya tagihan yang besar? Jadiin lebih enteng dengan ubah ke cicilan. Tersedia pilihan tenor hingga 12 bulan.
              </p>
            </div>
            <div className="relative">
              <img
                alt="ubahcicilan"
                src="https://wondr.bni.co.id/api/image/frame_1597880519_1751484415405.png"
                className="w-full h-auto object-cover rounded-b-2xl lg:rounded-b-3xl"
              />
            </div>
          </div>

          {/* Card to Cash */}
          <div className="bg-[#E5D9FF] rounded-2xl lg:rounded-3xl flex flex-col overflow-hidden">
            <div className="p-6 lg:p-8 space-y-4">
              <h3 className="text-sm md:text-base text-black font-light">
                Card to Cash
              </h3>
              <h2 className="text-xl md:text-3xl font-semibold text-black">
                Pinjam dana dari limit kartu kredit
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                Dapetin akses pinjaman dana tunai dari limit kartu kreditmu—langsung cair ke rekening.
              </p>
            </div>
            <div className="relative">
              <img
                alt="cardtocash"
                src="https://wondr.bni.co.id/api/image/group_427323197_1751484797654.png"
                className="w-full h-auto object-cover rounded-b-2xl lg:rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
