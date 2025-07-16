export default function Insight() {
  return (
    <section className="py-6 md:py-9 xl:py-[72px] px-4 md:px-8 xl:px-[200px] bg-white">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight text-black font-semibold">
          Insight cermat dari kebiasaan keuangan
        </h2>
      </div>
      <div className="mt-6 md:mt-12 flex justify-center">
        <div className="w-full max-w-[600px]">
          <img
            alt="insight"
            loading="lazy"
            width="600"
            height="400"
            decoding="async"
            className="w-full h-auto rounded-lg"
            src="https://wondr.bni.co.id/api/image/content_1751486086818.png"
          />
        </div>
      </div>
    </section>
  );
}
