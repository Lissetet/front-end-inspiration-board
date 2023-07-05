import ProfileCard from "../components/ProfileCard"
import teamMembers from "../data/teamMembers"

const Team = (prop) => {
  const gridClasses = "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
  return (
    <section className="flex-col">
      <h1 className="mb-10">Meet our Team</h1>
      <div className={`${gridClasses} w-fit mx-auto gap-6 justify-center`}>
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </section>

  );
}

export default Team;
