import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#b6ddd8', '#b6ddd8']}
          />
        </div>
    )
}

export default Loader;