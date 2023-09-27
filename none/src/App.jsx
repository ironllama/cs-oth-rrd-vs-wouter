import { useState } from 'react'

function App() {
  const [page, setPage] = useState("/");

  function Navbar() {
    return (
      <ul className='list-none flex justify-end gap-2 pr-2'>
        {/* <li><a href="home">home</a></li> */}
        {/* <li><a href="about">about</a></li> */}
        <li className='cursor-pointer' onClick={() => setPage("/")}>home</li>
        <li className='cursor-pointer' onClick={() => setPage("/about")}>about</li>
      </ul>
    );
  }

  function Index() {
    return <div>This is home.</div>;
  }

  function About() {
    return <div>About nothing.</div>;
  }

  function NotFound() {
    return <div>404, bub.</div>;
  }

  function Wrapper(props) {
    return (
      <div className='flex flex-col p-4 h-screen'>
        <Navbar />
        <div className='flex-1 flex flex-col justify-center items-center gap-4 text-3xl font-bold'>
          <div>[Vanilla React]</div>
          {props.children}
        </div>
      </div >
    );
  }

  let display = "";
  switch (page) {
    case "/": display = <Index />; break;
    case "/about": display = <About />; break;
    default: display = <NotFound />
  }
  history.replaceState(null, "", page);  // Sending "" as page seems to inactivate replaceState?

  return (
    <Wrapper>
      {display}
    </Wrapper>
  );
}

export default App;
