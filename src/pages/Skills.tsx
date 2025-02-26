import PageTransition from '../components/PageTransition';

function Skills() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Skills</h1>

        <h2 className="text-2xl font-bold">Front-end</h2>
        <ul className="mt-4 text-left">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js, and related technologies like React Query, React Hook Form and Redux</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>C#</li>
        </ul>

        <h2 className="text-2xl font-bold">Other</h2>
        <ul className="mt-4 text-left">
          <li>Microsoft PowerShell</li>
          <li>APIs</li>
          <li>C# and .NET (early stage)</li>
          <li>Python (years ago)</li>
        </ul>

        <h2 className="text-2xl font-bold">Tools</h2>
        <ul className="mt-4 text-left">
          <li>Create React App and Vite</li>
          <li>
            IDEs: Visual Studio Code, Sublime Text, some Visual Studio, and VSC extensions including
            ES Lint, Prettier, Code Runner, Copilot, GitLens, etc
          </li>
          <li>Testing: JEST and Vitest</li>
          <li>Source control: Git, GitHub and Bitbucket</li>
          <li>Virtualisation: Docker</li>
          <li>Zapier and its CLI</li>
          <li>Package managers: npm and yarn</li>
        </ul>

        <h2 className="text-2xl font-bold">Soft Skills</h2>
        <ul className="mt-4 text-left">
          <li>Communication and teamwork</li>
          <li>Problem-solving, troubleshooting, analysis</li>
          <li>Attention to detail</li>
          <li>Commitment, determination and persistence</li>
          <li>
            My experience across diverse roles in software development, technical support, and
            customer success has strengthened my ability to understand end-user needs. I am
            passionate about delivering user-centric solutions that solve business problems.
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}

export default Skills;
