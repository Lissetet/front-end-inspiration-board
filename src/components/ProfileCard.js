import { Icon } from '@iconify/react';

const ProfileCard = (prop) => {
    const { imgUrl, first, last, githubUrl, linkedInUrl, email, porfolioSite } = prop
    const links = [
        {href: githubUrl, icon: 'mdi:github'},
        {href: linkedInUrl, icon: 'mdi:linkedin'},
        {href: `mailto:${email}`, icon: 'mdi:email'},
        {href: porfolioSite, icon: 'iconoir:www'}
    ]
    return (
        <div className="card flex-col overflow-hidden hover:scale-105">
            <div className='flex justify-center my-8'>
                <img 
                    className='w-3/4 border-4 rounded-full bg-white' 
                    src={imgUrl} 
                    alt={`${first} ${last} profile`}
                />
            </div>
            <div className='flex flex-col justify-center h-28'>
                <h2 className='text-center text-2xl font-bold'>{first}</h2>
                <h2 className='text-center text-2xl font-bold'>{last}</h2>
                <p className='text-center'>Software Engineer</p>
            </div>
            <div className='flex justify-evenly pt-6 pb-2' >
                {
                    links.map((link, index) => (
                        <a key={index} 
                            className="hover:text-primary transition-all duration-300" 
                            href={link.href}
                        >
                            <Icon className='text-2xl cursor-pointer' icon={link.icon} />
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default ProfileCard;
