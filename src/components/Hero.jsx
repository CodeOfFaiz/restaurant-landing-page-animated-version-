export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between
                 px-6 md:px-12 lg:px-20 py-14 md:py-0 min-h-[88vh]
                 bg-[url('/bg.jpg')] bg-cover bg-center overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />

      {/* Decorative red blob */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-red-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-40 h-40 rounded-full bg-red-500/10 blur-2xl pointer-events-none" />

      {/* Text */}
      <div className="hero-text relative z-10 w-full md:w-1/2 max-w-lg flex flex-col gap-5 text-center md:text-left text-white">
        {/* Badge */}
        <span className="inline-block w-fit mx-auto md:mx-0 px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-full text-red-300 text-xs font-semibold tracking-widest uppercase">
          🔥 Fresh &amp; Hot Daily
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          Food Made{' '}
          <span className="text-red-400 drop-shadow-lg">With Love</span>
        </h1>

        <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-sm mx-auto md:mx-0">
          Delicious meals prepared with fresh ingredients and authentic flavours —
          made to satisfy your cravings every single time.
        </p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
          <a
            href="#order"
            className="btn-pulse px-6 py-2.5 bg-red-500 text-white font-semibold rounded-full
                       hover:bg-red-600 transition-all duration-200 hover:-translate-y-1
                       hover:shadow-xl hover:shadow-red-500/40"
          >
            Order Now →
          </a>
          <a
            href="#popular"
            className="px-6 py-2.5 border-2 border-white/60 text-white font-semibold rounded-full
                       hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            View Menu
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex gap-6 justify-center md:justify-start mt-3">
          {[['500+', 'Happy Customers'], ['50+', 'Menu Items'], ['4.9★', 'Avg Rating']].map(
            ([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-lg font-bold text-red-400">{val}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Floating burger */}
      <div className="hero-image-wrapper relative z-10 mt-10 md:mt-0">
        <img
          src="/src/assets/burger.png"
          alt="Delicious Burger"
          className="w-60 md:w-80 lg:w-[400px] xl:w-[460px] drop-shadow-2xl"
        />
      </div>
    </section>
  )
}
