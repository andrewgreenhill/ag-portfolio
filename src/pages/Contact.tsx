import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Contact me</h1>
        <h2 className="text-2xl font-bold">Let's connect!</h2>
        <br />

        <ContactForm
        // titleMessage="Let's Connect!"
        />

        <ul className="mt-4 text-left">
          <li>
            LinkedIn{' '}
            <a
              href="https://www.linkedin.com/in/andrew-greenhill"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              www.linkedin.com/in/andrew-greenhill
            </a>
          </li>
          <li>
            Bluesky{' '}
            <a
              href="https://bsky.app/profile/andrew-greenhill.bsky.social"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              bsky.app/profile/andrew-greenhill.bsky.social
            </a>
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}

export default Contact;
