import PageTransition from '../components/PageTransition';

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
    </PageTransition>
  );
}

export default Home;
