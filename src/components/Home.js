import Card from './Card';
const Home = () => {
  const cardProps = {
    "date_created": "Tue, 27 Jun 2023 16:15:12 GMT", 
    "id": 1, 
    "likes_count": 11, 
    "message": "Test Message will go here. "
  }

  return (
    <section className="flex flex-col gap-10">
      <h1>Login page will go here eventually</h1>
      <Card {...cardProps}/>
    </section>
  )
};

export default Home;