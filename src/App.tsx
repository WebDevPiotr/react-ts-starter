import { ReactComponent as Thumb } from './thumb.svg';

const App = (): JSX.Element => {
    return (
        <div className="container">
            <span>React ts</span>
            <Thumb width={50} height={50} />
        </div>
    )
}

export default App