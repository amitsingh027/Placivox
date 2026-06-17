export default function Hero() {
  return (
    <section className="text-center py-32 px-4">
      <h1 className="text-7xl font-extrabold">
        Placivox 🚀
      </h1>

      <p className="text-2xl text-gray-400 mt-6 max-w-3xl mx-auto">
        Build Resumes, Improve ATS Scores, Crack Interviews,
        Practice Coding and Track Applications — all in one place.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-gray-600 px-8 py-3 rounded-xl">
          Learn More
        </button>
      </div>
    </section>
  );
}