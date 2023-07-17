import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const ProfileCard = (prop) => {
	const { imgUrl, first, last, githubUrl, linkedInUrl, email, porfolioSite } = prop
	const name = `${first} ${last}`
	const links = [
		{href: githubUrl, icon: 'mdi:github', label: `${name} github`},
		{href: linkedInUrl, icon: 'mdi:linkedin', label: `${name} linkedin`},
		{href: email && `mailto:${email}`, icon: 'mdi:email', label: `${name} email`},
		{href: porfolioSite, icon: 'mdi:web', label: `${name} portfolio`}
	]
	return (
		<div className="card flex-col overflow-hidden hover:scale-105">
			<div className='flex justify-center my-8'>
				<img
					className='w-3/4 border-4 rounded-full bg-white'
					src={imgUrl}
					aria-label={`${name} profile`}
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
					link.href ? (
						<a key={index}
							className="hover:text-primary transition-all duration-300"
							href={link.href}
							target='_blank'
							rel='noreferrer'
							aria-label={link.label}
						>
							<Icon className='text-2xl cursor-pointer' icon={link.icon} />
						</a>
					) : null
				))
			}
			</div>
		</div>
	);
}

ProfileCard.propTypes = {
	first: PropTypes.string.isRequired,
	last: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	githubUrl: PropTypes.string.isRequired,
	linkedInUrl: PropTypes.string,
	email: PropTypes.string,
	porfolioSite: PropTypes.string,
};

export default ProfileCard;
