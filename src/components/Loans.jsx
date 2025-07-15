export default function Loans() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
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
                Ubah Tagihan Kamu!
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                Punya tagihan yang besar? Yuk ubah menjadi cicilan dengan tenor
                yang sesuai kebutuhan kamu.
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
                Dapetin Kartu Kredit BNI!
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                Ajukan secara mudah dan cepat lewat wondr dan nikmatin segala
                benefitnya. Ajukan kartu kredit via wondr.
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
