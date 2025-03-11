import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const baseURL = import.meta.env.BASE_URL;

function Home() {
  return (
    <PageTransition>
      <div className="relative px-8 pb-4 md:pt-8 sm:pt-2">
        <img
          src={`${baseURL}/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg`}
          alt="Perth CBD skyline from State War Memorial Lookout"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-start justify-center px-8 pb-4 md:pt-8 sm:pt-2">
          <div
            className="p-8 rounded-lg shadow-lg max-w-4xl w-full text-center mt-16 sm:mt-1 md:mt-16"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }} // Translucent white
          >
            <h1 className="!text-2xl sm:!text-3xl md:!text-4xl font-bold">
              I'm a Frontend Developer specialising in React and TypeScript
            </h1>
            <br />
            <h2 className="!text-xl sm:!text-xl md:!text-2xl font-bold">
              I build modern, responsive, user-friendly web applications.
            </h2>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/projects"
                className="bg-neutral text-lg sm:text-xl md:text-2xl border border-black text-black font-bold m-2 px-4 py-2 rounded-lg hover:text-green-600"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
              >
                View my work
              </Link>
              <Link
                to="/about"
                className="bg-neutral text-lg sm:text-xl md:text-2xl border border-black text-black font-bold m-2 px-4 py-2 rounded-lg hover:text-green-600"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
              >
                More about me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-black hidden md:block">
        I'm located in Perth, Western Australia.
      </p>
    </PageTransition>
  );
}

export default Home;
