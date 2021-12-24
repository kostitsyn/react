import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Techologies />
    </div>
  );
}

const Header = () => {
  return (
      <div>
        <a href='#'>Menu</a>
        <a href='#'>News</a>
        <a href='#'>Messages</a>
      </div>
  )
}

const Techologies = () => {
  return (
      <div>
        <ul>
          <li>React</li>
          <li>JS</li>
          <li>Django</li>
          <li>Python</li>
        </ul>
      </div>
  );
}

export default App;
