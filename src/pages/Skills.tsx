import PageTransition from '../components/PageTransition';

function Skills() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p className="mt-2 text-gray-600">Here's a list of my relevant skills...</p>
        <ul className="mt-4 text-left">
          <li>
            <em>This list is under construction but here are my main skills:</em>
          </li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Redux</li>
          <li>Python</li>
          <li>C#</li>
        </ul>
      </div>
    </PageTransition>
  );
}

export default Skills;
