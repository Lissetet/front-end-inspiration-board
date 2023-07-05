import { Icon } from '@iconify/react';
import teamMembers from '../data/teamMembers';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 py-4 px-8 mt-20 bottom-0">
      <section 
        className="flex flex-col lg:flex-row max-w-7xl gap-10 sm:gap-20 mx-auto py-2"
      >
        <article className="flex flex-col lg:w-1/2">
          <div className="flex gap-2 mb-4">
            <Icon icon="fluent:board-heart-20-filled" className="text-2xl"/>
            <span className="text-xl font-bold">Inspiration Board</span>
          </div>
          <p>
            The Full-Stack Inspiration Board is a digital platform that enables 
            users to share encouraging messages through a system of "boards" and 
            "cards". Developed with Flask and React JS, this application showcases 
            the interaction between front-end and back-end layers in a full-stack 
            project. Users can create boards, post cards with inspirational messages, 
            and like the ones they resonate with, demonstrating the project's 
            user-friendly interface and component-based architecture.
          </p>
        </article>
        <article className="flex flex-col lg:w-1/2">
          <div className="flex gap-2 mb-4">
            <Icon icon="fluent:people-team-16-filled" className="text-2xl"/>
            <span className="text-xl font-bold">Created By</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {teamMembers.map((member, index) => (
              <li key={index}>
                <a 
                  href={member.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 hover:underline hover:text-primary"
                >
                  <img 
                    src={member.imgUrl} 
                    alt={`#${member.first} ${member.last}`} 
                    className="w-24 aspect-square rounded-full bg-white border-white border-2"
                  />
                  <span className="font-bold">
                    {`${member.first} ${member.last}`}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="border-t max-w-7xl mx-auto mt-4 pt-2 flex justify-center gap-3">
        <span>Copyright {new Date().getFullYear()} - All Rights Reserved</span>
      </section>
    </footer>
  );
}

export default Footer;
