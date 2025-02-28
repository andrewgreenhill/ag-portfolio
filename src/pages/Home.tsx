import PageTransition from '../components/PageTransition';
// import UnderConstructionLogo from '../images/under-construction.png';

function Home() {
  return (
    <PageTransition>
      <p className="mt-2 text-gray-600">
        <em>
          <strong>This is under construction.</strong>
        </em>
        {/* TODO */}
      </p>
      <br />
      {/* <section className="bg-[url('/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"> */}
      {/* <section className="bg-[url('/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg')] bg-cover bg-center h-screen flex flex-col justify-center text-white"> */}
      {/* <section className="bg-[url('/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg')] bg-cover bg-center bg-no-repeat text-white py-20 px-4"> */}
      <h1 className="text-4xl font-bold">
        I'm a Frontend Developer specialising in React and TypeScript
      </h1>
      <br />
      <h2 className="text-2xl font-bold">
        I build modern, responsive, user-friendly web applications.
      </h2>
      {/* <p className="mt-4 text-lg text-gray-600">
        I build modern, responsive, and user-friendly web applications
      </p> */}

      <br />
      <img
        // src={UnderConstructionLogo}
        src={'/images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg'}
        alt="Under Construction"
        className="under-construction-logo"
      />
    </PageTransition>
  );
}

export default Home;
