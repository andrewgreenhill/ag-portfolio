import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function Home() {
  return (
    <PageTransition>
      <div className="relative p-8 pb-4">
        <img
          src={'/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg'}
          alt="Perth CBD skyline from State War Memorial Lookout"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-start justify-center p-4 md:p-8">
          <div
            className="p-8 rounded-lg shadow-lg max-w-4xl w-full text-center mt-16 sm:mt-1 md:mt-16"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }} // Custom RGBA background color
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
                // className="bg-neutral text-2xl text-black border border-black font-bold m-2 px-4 py-2 rounded-lg hover:text-green-600"
              >
                View my work
              </Link>
              <Link
                to="/about"
                className="bg-neutral text-lg sm:text-xl md:text-2xl border border-black text-black font-bold m-2 px-4 py-2 rounded-lg hover:text-green-600"
                // className="bg-neutral text-2xl text-black border border-black font-bold m-2 px-4 py-2 rounded-lg hover:text-green-600"
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
