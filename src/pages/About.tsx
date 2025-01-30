import PageTransition from '../components/PageTransition';

function About() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="mt-2 text-gray-600">
          I am a professional software engineer specializing in front-end development. My experience
          includes building web applications using React.js, TypeScript, and related web
          technologies. Known for my commitment, attention to detail, and persistence, I take
          ownership of projects from start to finish - from understanding the specifications,
          developing functional code, collaborating with stakeholders, to post-deployment
          maintenance. I am passionate about delivering user-centric solutions that solve business
          problems.
        </p>
        <p className="mt-2 text-gray-600">
          My experience across diverse roles in software development, technical support, and
          customer success has strengthened my ability to understand end-user needs and build
          practical, scalable applications.
        </p>
        <br />

        <h2 className="text-2xl font-bold">Background</h2>
        <p className="mt-2 text-gray-600">
          I began programming while at school, teaching myself. I started with Basic, then when I
          wanted more capabilities, I taught myself machine code. I started creating my own
          operating system “GDOS”, and when I did my final year 12 computing project, that ran on my
          OS. I wrote that all in hexadecimal machine code. The project was a game of{' '}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Reversi#Othello">
            Othello
          </a>
          , with artificial intelligence that could beat many of my classmates. Following that, I
          wrote many games, and fractal-making programs, 3D graphics, blackjack simulation and
          probability analysis, a mortgage simulator, etc. Usually in Pascal, back then.
        </p>
        <p className="mt-2 text-gray-600">
          I studied programming at UWA and Curtin University. I have programmed in 12 languages. I
          have also made a computer from the ground up from very basic components: a CPU, RAM,
          buses, etc.
        </p>
        <p className="mt-2 text-gray-600">
          Circumstances shifted my course away from the above though, I worked for different
          software companies but did technical support, training and solution engineering. I did
          programming at every opportunity but that wasn't enough for me, I never stopped longing to
          be programming full time. So, I drove my path back into software development, where I am
          now again - at my happiest and most engaged :-)
        </p>
        <br />

        <h2 className="text-2xl font-bold">Web site theme</h2>
        <p className="mt-2 text-gray-600">
          For this web site, and my logo, I chose the Matrix theme for this site because when I was
          writing in machine code, I did that using a hexadecimal editor that looked similar to the
          screenshot below but with green or amber coloured text. I can easily convert between
          hexadecimal numbers and binary, and so I was only 1 step removed from writing directly in
          binary. Doing that, I could create cool things like above, and a moving blimp, and play
          music notes, etc. - an infinite variety of things.
        </p>
        <img
          src="https://i0.wp.com/blog.compactbyte.com/wp-content/uploads/2019/02/vcxsrv_2019-02-18_23-24-30.png?is-pending-load=1#038;ssl=1"
          alt="Hexadecimal editor screenshot"
        />
      </div>
    </PageTransition>
  );
}

export default About;
