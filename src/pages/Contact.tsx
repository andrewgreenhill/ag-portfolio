import PageTransition from '../components/PageTransition';

function Contact() {
  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-2 text-gray-600">Let's get in touch!</p>
      </div>
    </PageTransition>
  );
}

export default Contact;
