import { Link, Route, Router, Switch } from "wouter"

function App() {
  function Navbar() {
    return (
      <ul className='list-none flex justify-end gap-2 pr-2'>
        <li><Link href="">home</Link></li>
        <li><Link href="about">about</Link></li>
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
          <div>[Wouter]</div>
          {props.children}
        </div>
      </div >
    );
  }

  return (
    <Router base="/">
      <Wrapper>
        <Switch>
          <Route path="/" component={Index} /> {/* This seems to be an exception for the base, maybe to allow matching root? */}
          <Route path="about" component={About} />
          <Route path=":addr*" component={NotFound} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
