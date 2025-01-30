import PageTransition from '../components/PageTransition';

function About() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-2 text-gray-600">I'm passionate about frontend development.</p>
      </div>
    </PageTransition>
  );
}

export default About;
