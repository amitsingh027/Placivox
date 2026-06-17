export default function Stats() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">10K+</h2>
          <p className="text-gray-400">Resumes Built</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">5K+</h2>
          <p className="text-gray-400">Interview Sessions</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">20K+</h2>
          <p className="text-gray-400">Quiz Attempts</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">95%</h2>
          <p className="text-gray-400">Success Rate</p>
        </div>
      </div>
    </section>
  );
}