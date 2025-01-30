import PageTransition from '../components/PageTransition';

function Home() {
  return (
    <PageTransition>
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600">I'm a Frontend Developer specializing in React and TypeScript.</p>
    </PageTransition>
  );
}

export default Home;
