import { useState } from 'react'

function App() {
  const [page, setPage] = useState("home");

  function Navbar() {
    return (
      <ul className='list-none flex justify-end gap-2 pr-2'>
        {/* <li><a href="home">home</a></li> */}
        {/* <li><a href="about">about</a></li> */}
        <li onClick={() => setPage("home")}>home</li>
        <li onClick={() => setPage("about")}>about</li>
      </ul>
    )
  }

  function Index() {
    return (
      <div className='index'>
        This is home.
      </div>
    )
  }

  function About() {
    return (
      <div className='about'>
        About nothing.
      </div>
    )
  }

  function NotFound() {
    return (
      <div className='notfound'>
        404, bub.
      </div>
    )
  }

  let display = "";
  switch (page) {
    case "home": display = <Index />; break;
    case "about": display = <About />; break;
    default: display = <NotFound />
  }
  history.replaceState(null, "", page);

  return (
    <div className='p-4 h-screen'>
      <Navbar />
      <div className='flex justify-center items-center h-full text-3xl font-bold'>
        {display}
      </div>
    </div >
  );
}

export default App
