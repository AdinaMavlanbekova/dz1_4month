import './App.css';

function Header () {
    return (
        <>
            <Title text='I am Header Component'/>
            <p>Lorem ipsum dolor sit.</p>
            <button>send</button>
        </>
    )
}

function Content () {
    return (
        <>
            <Title text='I am Content Component'/>
            <p>Lorem ipsum dolor sit.</p>
            <button>click me</button>
        </>
    )
}

function Footer () {
    return (
        <>
            <Title text='I am Footer Component'/>
            <button>go to home</button>
        </>
    )
}

function Title (props) {
    return <h2>{props.text}</h2>
}

function App() {
    return (
        <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
