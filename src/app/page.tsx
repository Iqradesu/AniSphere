

import Info from './components/Info'
function Home() {
  return (
    <main className=" relative min-w-full min-h-screen"> {/* Adjust for nav height */}
    <Info />
    <div className='w-full h-64 bg-black'></div>
    </main>
  );
}

export default Home;



