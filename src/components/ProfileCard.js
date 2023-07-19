import { Icon } from '@iconify/react';

const ProfileCard = (prop) => {
    const { imgUrl, first, last, githubUrl, linkedInUrl, email, porfolioSite } = prop
    return (
        <div className="rounded-lg shadow-2xl overflow-hidden hover:scale-105 transition duration-120 ease-out w-72 ">
            <div className='flex justify-center my-8'>
                <img className='w-3/4 border-4 rounded-full' src={imgUrl} alt='profil-pic' />
            </div>
            <div className='flex flex-col justify-center h-28'>
                <h2 className='text-center text-2xl font-bold'>{first} {last}</h2>
                <p className='text-center'>Software Engineer</p>
            </div>
            <div className='flex justify-center gap-8 my-8' >
                <a href={githubUrl}><Icon className='text-2xl cursor-pointer' icon="devicon:github" /></a>
                <a href={linkedInUrl}><Icon className='text-2xl cursor-pointer' icon="line-md:linkedin" /></a>
                <a href={email}><Icon className='text-2xl cursor-pointer' icon="fxemoji:email" /></a>
                <a href={porfolioSite}><Icon className='text-2xl cursor-pointer' icon="gg:website" /></a>
            </div>
        </div>
    );
}

export default ProfileCard;
