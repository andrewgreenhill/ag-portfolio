import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Contact me</h1>
        {/* <h2 className="text-2xl font-bold">Let's Connect</h2> */}
        <br />

        <ContactForm titleMessage="Let's Connect!" />
        <br />

        {/* <h2 className="text-2xl font-bold">~Social media ????????</h2> */}
        <ul className="mt-4 text-left">
          <li>
            LinkedIn{' '}
            <a
              href="https://www.linkedin.com/in/andrew-greenhill"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              www.linkedin.com/in/andrew-greenhill
            </a>
          </li>
          <li>
            GitHub{' '}
            <a
              href="https://github.com/andrewgreenhill"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              github.com/andrewgreenhill
            </a>
          </li>
          <li>
            Microsoft{' '}
            <a
              href="https://learn.microsoft.com/en-gb/users/andrewgreenhill"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              learn.microsoft.com/en-gb/users/andrewgreenhill
            </a>
          </li>
          <li>
            freeCodeCamp{' '}
            <a
              href="https://www.freecodecamp.org/andrewgreenhill"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              www.freecodecamp.org/andrewgreenhill
            </a>
          </li>
          <li>
            Stack Overflow{' '}
            <a
              href="https://stackoverflow.com/users/3532483/andrewgreenhill"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              stackoverflow.com/users/3532483/andrewgreenhill
            </a>
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}

export default Contact;
