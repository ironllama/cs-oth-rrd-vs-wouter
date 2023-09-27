import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  function Navbar() {
    return (
      <ul className='list-none flex justify-end gap-2 pr-2'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
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
          <div>[React Router Dom]</div>
          <Outlet />
          {props.children}
        </div>
      </div >
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      errorElement: (<Wrapper><NotFound /></Wrapper>),
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
