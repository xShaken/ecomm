export default function App() {
  return (
    <div className="min-h-screen bg-[#dbeef2] flex flex-col">
      {/* Top banner */}
      <div className="bg-[#3b2d2b] text-white text-xs text-center py-2 tracking-[0.2em] font-medium uppercase">
        Free Shipping Over $50
      </div>

      {/* Header */}
      <header className="py-8 text-center bg-white shadow-sm">
        <h1 className="text-3xl md:text-4xl tracking-[0.3em] text-gray-800 font-semibold">
          YOUR LOGO
        </h1>
        <nav className="mt-6 flex justify-center gap-10 text-sm text-gray-500 uppercase tracking-widest flex-wrap">
          <a href="#" className="hover:text-gray-800 transition">Contact</a>
          <a href="#" className="hover:text-gray-800 transition">Menu</a>
          <a href="#" className="hover:text-gray-800 transition">About</a>
          <a href="#" className="hover:text-gray-800 transition">Service</a>
        </nav>
      </header>

      {/* Hero section */}
      <section className="w-full bg-gray-200 h-[400px] md:h-[550px] flex items-center justify-center text-gray-500 text-sm">
        Image Placeholder
      </section>

      {/* Subtitle section */}
      <section className="w-full bg-white py-16 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 h-64 bg-[#fbe083] flex items-center justify-center text-gray-700 text-xs uppercase">
            Photo
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="uppercase text-gray-800 text-lg tracking-[0.2em] font-semibold mb-4">
              Subtitle
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </p>
            <button className="mt-6 border border-[#b3d8e3] text-[#5fa7bc] px-4 py-2 text-sm uppercase tracking-wide rounded-sm hover:bg-[#e8f5f8] transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Online Store section */}
      <section className="w-full bg-[#f4fafd] py-16 px-6 md:px-20 lg:px-40 text-center">
        <h4 className="uppercase text-gray-700 tracking-[0.3em] text-sm font-semibold mb-4">
          Online Store
        </h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <button className="bg-[#bce0ea] text-white px-6 py-2 text-sm uppercase tracking-wider rounded-sm hover:bg-[#a3d3e0] transition">
          Learn More
        </button>
      </section>

      {/* ===== NEW SECTION (Option 1 / 2 + Percentages) ===== */}
      <section className="w-full bg-white py-16 px-6 md:px-20 lg:px-40">
        <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Option 1 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-full h-56 bg-[#bce0ea] flex items-center justify-center text-gray-600 text-xs uppercase">
              Option 1 Image
            </div>
            <h3 className="uppercase text-gray-800 text-sm tracking-[0.2em] font-semibold">
              Option 1
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-full h-56 bg-[#e1e5f2] flex items-center justify-center text-gray-600 text-xs uppercase">
              Option 2 Image
            </div>
            <h3 className="uppercase text-gray-800 text-sm tracking-[0.2em] font-semibold">
              Option 2
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </div>
        </div>

        {/* Learn More button */}
        <div className="text-center mt-10">
          <button className="border border-[#b3d8e3] text-[#5fa7bc] px-5 py-2 text-sm uppercase tracking-wider rounded-sm hover:bg-[#e8f5f8] transition">
            Learn More
          </button>
        </div>

        <div className="border-t border-gray-200 my-14"></div>

        {/* Online store title */}
        <div className="text-center">
          <h4 className="uppercase text-gray-800 tracking-[0.3em] text-sm font-semibold mb-3">
            Online Store
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim.
          </p>
        </div>

        {/* Percentages */}
        <div className="flex justify-center gap-16 flex-wrap">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">50%</h3>
            <button className="mt-3 border border-[#b3d8e3] text-[#5fa7bc] px-4 py-1 text-xs uppercase tracking-wider rounded-sm hover:bg-[#e8f5f8] transition">
              Learn More
            </button>
            <p className="mt-2 text-gray-600 text-xs">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">75%</h3>
            <button className="mt-3 border border-[#b3d8e3] text-[#5fa7bc] px-4 py-1 text-xs uppercase tracking-wider rounded-sm hover:bg-[#e8f5f8] transition">
              Learn More
            </button>
            <p className="mt-2 text-gray-600 text-xs">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </section>

      {/* ===== NEW ADDED SECTION (From Uploaded Image) ===== */}
      <section className="bg-white py-20 text-center">
        {/* Great Deals */}
        <div className="max-w-md mx-auto">
          <h2 className="uppercase tracking-[0.3em] text-gray-800 text-sm font-semibold mb-2">
            Great Deals
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <p className="text-gray-900 font-semibold mb-10">$75</p>
        </div>

        {/* Subtitle Section */}
        <div className="bg-[#e8f5f8] py-10 px-6 md:px-16 max-w-3xl mx-auto rounded-lg mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="uppercase text-gray-800 text-sm tracking-[0.2em] font-semibold mb-3">
                Subtitle
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod.
              </p>
              <button className="border border-[#b3d8e3] text-[#5fa7bc] px-5 py-2 text-xs uppercase tracking-wider rounded-sm hover:bg-[#e8f5f8] transition">
                Learn More
              </button>
            </div>
            <div className="w-40 h-40 bg-gray-300 flex items-center justify-center text-gray-600 text-xs uppercase">
              Image
            </div>
          </div>
        </div>

        {/* Online Store image */}
        <div className="w-full flex justify-center mb-10">
          <div className="w-full md:w-2/3 h-72 bg-gray-200 flex items-center justify-center text-gray-600 text-xs uppercase">
            Image Placeholder
          </div>
        </div>

        {/* Online Store text */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h4 className="uppercase text-gray-700 tracking-[0.2em] text-sm font-semibold mb-3">
            Online Store
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim.
          </p>
        </div>

        {/* Social icons */}
        <div className="bg-[#e8f5f8] py-6">
          <p className="uppercase text-gray-700 tracking-[0.2em] text-xs font-semibold mb-4">
            Follow Us
          </p>
          <div className="flex justify-center gap-6 text-gray-700 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </section>

      
    </div>
  );
}
