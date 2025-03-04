import PageTransition from '../components/PageTransition';

function Skills() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front-end Skills Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-left">Frontend</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li className="hanging-indent">JavaScript</li>
              <li className="hanging-indent">TypeScript</li>
              <li className="hanging-indent">
                React.js and related technologies like React Query, React Hook Form and Redux
              </li>
              <li className="hanging-indent">HTML</li>
              <li className="hanging-indent">CSS</li>
            </ul>
          </div>

          {/* Other Skills Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-left">Other</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li className="hanging-indent">Microsoft PowerShell</li>
              <li className="hanging-indent">APIs</li>
              <li className="hanging-indent">C# and .NET (early stage)</li>
              <li className="hanging-indent">Python (years ago)</li>
            </ul>
          </div>

          {/* Tools Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-left">Tools</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li className="hanging-indent">Create React App and Vite</li>
              <li className="hanging-indent">
                IDEs: Visual Studio Code, Sublime Text, some Visual Studio, and VSC extensions
                including ES Lint, Prettier, Code Runner, Copilot, GitLens, etc
              </li>
              <li className="hanging-indent">Testing: JEST and Vitest</li>
              <li className="hanging-indent">Source control: Git, GitHub and Bitbucket</li>
              <li className="hanging-indent">Virtualisation: Docker</li>
              <li className="hanging-indent">Zapier and its CLI</li>
              <li className="hanging-indent">Package managers: npm and yarn</li>
            </ul>
          </div>

          {/* Soft Skills Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-left">Soft skills</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li className="hanging-indent">Communication and teamwork</li>
              <li className="hanging-indent">Problem-solving, troubleshooting, analysis</li>
              <li className="hanging-indent">Attention to detail</li>
              <li className="hanging-indent">Commitment, determination and persistence</li>
              <li className="hanging-indent">
                My experience across diverse roles in software development, technical support, and
                customer success has strengthened my ability to understand end-user needs. I am
                passionate about delivering user-centric solutions that solve business problems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Skills;
