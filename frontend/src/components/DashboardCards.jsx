const cards = [
  {
    title: "Resume Score",
    value: "82%",
  },
  {
    title: "Interview Sessions",
    value: "12",
  },
  {
    title: "Applications",
    value: "24",
  },
  {
    title: "Quiz Attempts",
    value: "48",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 p-6 rounded-xl"
        >
          <h3 className="text-gray-400">
            {card.title}
          </h3>

          <p className="text-3xl font-bold mt-3">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}