import { useState } from "react";
import { Icon } from "@iconify/react";
import InputField from "../components/InputField";

const Home = () => {
  const [username, setUsername] = useState('')
  return (
    <>
      <h1 className="text-center">
        Welcome to Inspiration Board!
      </h1>
      <h2 className="text-lg text-center py-2 text-gray-200">
        View, create, and edit boards of inspiration!
      </h2>
      <section 
        id="login" 
        className="flex flex-col bg-primary/30 mx-auto my-10 max-w-md w-full
        py-6 px-6 gap-6 rounded-lg shadow-2xl"
      >
        <h2 className="font-bold text-xl">Please login</h2>
        <form className="grid grid-cols-[auto,1fr,auto] gap-2 items-center">
          <InputField
            label="username"
            value={username}
            setValue={setUsername}
          />
          <button 
            className="" 
            type="submit"
          >
            <Icon icon="mdi:login" className="text-2xl" />
          </button>
        </form>
      </section>
      
    </>
  )
};

export default Home;