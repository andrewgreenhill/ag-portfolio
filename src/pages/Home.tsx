import PageTransition from '../components/PageTransition';
import UnderConstructionLogo from '../assets/under-construction.png';

function Home() {
  return (
    <PageTransition>
      <h1 className="text-4xl font-bold">
        I'm a Frontend Developer specialising in React and TypeScript
      </h1>
      <br />
      <h2 className="text-2xl font-bold">
        I build modern, responsive, and user-friendly web applications.
      </h2>
      {/* <p className="mt-4 text-lg text-gray-600">
        I build modern, responsive, and user-friendly web applications
      </p> */}

      <br />
      <p className="mt-2 text-gray-600">
        My portfolio is under construction. More content is coming soon... {/* TODO */}
      </p>
      <br />
      <img
        src={UnderConstructionLogo}
        alt="Under Construction"
        className="under-construction-logo"
      />
    </PageTransition>
  );
}

export default Home;
