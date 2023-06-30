import ProfileCard from "./ProfileCard"

const Team = (prop) => {
  return (
    <section className="flex-column justify-center items-center text-center ">
      <h1 className="text-7xl m-20">MEET OUR TEAM</h1>
      <div className="flex gap-10">
        <ProfileCard
          imgUrl=' https://www.novusdigital.co/images/liz.png'
          name='Liz Trejo'
          githubUrl='https://github.com/lissetet'
          linkedInUrl='https://www.linkedin.com/in/liz-trejo/'
          email=' liz@liztrejo.dev'
          porfolioSite='https://liztrejo.dev/' />
        <ProfileCard
          imgUrl='https://media.licdn.com/dms/image/D5603AQEqI7Lo9bI6IA/profile-displayphoto-shrink_800_800/0/1680802403259?e=1693440000&v=beta&t=c4FO4EN4-HTKsmm__36WEmpekRMVGXH35eC8gXGdceQ'
          name='Lu Sun               '
          githubUrl='https://github.com/lulusde1210'
          linkedInUrl='https://www.linkedin.com/in/lu-sun-a69048170/'
          email='lulusun1210@gmail.com'
          porfolioSite='https://main--lusun.netlify.app/' />
        <ProfileCard
          imgUrl='default-profile.jpeg'
          name='La Tasha Pollard'
          githubUrl='https://github.com/LCanCode'
          linkedInUrl='#'
          email='#'
          porfolioSite='#' />
        <ProfileCard
          imgUrl='default-profile.jpeg'
          name='Luwam Ghebremicael'
          githubUrl='https://github.com/luwammikael'
          linkedInUrl='#'
          email='#'
          porfolioSite='#' />
      </div>

    </section>

  );
}

export default Team;
