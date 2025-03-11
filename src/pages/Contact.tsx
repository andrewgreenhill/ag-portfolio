import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <PageTransition>
      <div className="text-center px-8 pb-4 md:pt-8 sm:pt-2">
        <h1 className="text-3xl font-bold">Contact me</h1>
        <h2 className="text-2xl font-bold pt-3">Let's connect!</h2>
        <br />

        <ContactForm
        // titleMessage="Let's connect!"
        />

        <div className="flex justify-center">
          <ul className="mt-4 text-left pt-4">
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
      </div>
    </PageTransition>
  );
}

export default Contact;
