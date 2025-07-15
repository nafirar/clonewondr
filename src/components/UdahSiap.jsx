export default function Udahsiap() {
  return (
    <div class="bg-lime-200 relative pt-6 lg:px-0 lg:pt-[72px]">
      <div class="container-120">
        <div class="text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-demibold">
            Udah siap #JadiinMaumu bareng wondr?
          </h2>
          <div class="md:px-[120px]">
            <div class="font-light text-xs md:text-base lg:text-2xl leading-[140%] mt-2 md:mt-6 lg:mt-10">
              <div class="ql-content-wrapper">
                <div class="ql-content ql-editor text-black font-normal">
                  <p class="ql-align-center">
                    Cukup siapin handphone dan dokumen identitas diri, kamu siap
                    daftar wondr by BNI. Jangan lupa ajak temanmu biar makin
                    seru~
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="px-8 py-[19px] text-sm text-black text- font-demibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-4xl mt-6 md:mt-10 !py-3 !px-6 md:!py-[19px] md:!px-8"
          >
            Lihat Cara Daftar
          </button>
        </div>
        <div class="relative flex flex-col items-center justify-center mt-10 lg:mt-0 mx-auto">
          <img
            alt="download-landing"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            class="object-cover w-5/6 md:w-full md:mt-6 mb-2 md:mb-3 h-auto max-w-xl z-10 relative"
            src="/assets/images/download-landing/download-landingID.png"
            style=""
          />
        </div>
      </div>
      <div class="absolute h-[140px] md:h-[255px] w-full bottom-0">
        <div class="relative h-[150px] md:h-[255px] bg-[#ECF789] bottom-0">
          <div
            class="absolute z-[1] top-0 w-full overflow-hidden"
            style="height: 150px"
          >
            <img
              alt="ornament"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              class="w-full h-full object-cover rotate-180"
              src="https://wondr.bni.co.id/assets/images/download-landing/ornament.png"
              style="color: transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
