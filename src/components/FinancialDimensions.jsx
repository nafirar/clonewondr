export default function FinancialDimensions() {
  return (
    <section className="py-10 md:py-[72px] bg-off-white">
      <div className="container-120 mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black font-semibold mb-4">
          Kenalan sama 3 dimensi keuangan
        </h2>
        <p className="text-sm md:text-lg lg:text-2xl text-neutral-900 leading-[140%] font-normal max-w-4xl mx-auto">
          wondr siap bantu di tiap dimensi keuanganmu: transaksi di masa kini,
          pantau alur keluar-masuk uang di masa lalu, sampai investasi untuk
          masa depan.
        </p>
      </div>

      <div className="px-6 lg:px-[54px] mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Transaksi */}
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col h-full shadow-sm">
            <div className="pt-6 lg:pt-8 px-6">
              <img
                alt="Transaksi"
                loading="lazy"
                className="w-full h-auto object-contain"
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_1751484975817.png"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mb-2">
                Transaksi
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-neutral-900 font-normal leading-relaxed">
                Berbagai kemudahan untuk kirim uang, belanja, hingga bayar
                tagihan.
              </p>
            </div>
          </div>

          {/* Insight */}
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col h-full shadow-sm">
            <div className="pt-6 lg:pt-8 px-6">
              <img
                alt="Insight"
                loading="lazy"
                className="w-full h-auto object-contain"
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_(1)_1751485012612.png"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mb-2">
                Insight
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-neutral-900 font-normal leading-relaxed">
                Pantau pemasukan dan pengeluaran, jadi tahu rekomendasi keuangan
                yang cocok buat kamu.
              </p>
            </div>
          </div>

          {/* Growth */}
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col h-full shadow-sm">
            <div className="pt-6 lg:pt-8 px-6">
              <img
                alt="Growth"
                loading="lazy"
                className="w-full h-auto object-contain"
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_(2)_1751485081149.png"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mb-2">
                Growth
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-neutral-900 font-normal leading-relaxed">
                Jaga nilai dan kembangin aset kamu dengan beragam instumen untuk
                masa depan terjamin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

