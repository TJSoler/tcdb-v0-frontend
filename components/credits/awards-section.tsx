interface Award {
  name: string
  year: string
  project?: string
  category?: string
}

interface AwardsSectionProps {
  awards: Award[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-black mb-6 tracking-tight">AWARDS & RECOGNITION</h2>
      <div className="border-2 border-black bg-white">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-left">Award</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((award, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="p-3 font-bold">{award.name}</td>
                <td className="p-3">{award.year}</td>
                <td className="p-3">{award.project || "—"}</td>
                <td className="p-3">{award.category || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
