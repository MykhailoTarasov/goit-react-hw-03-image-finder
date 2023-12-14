import { Hourglass } from 'react-loader-spinner';
import { StyledLoader } from './Loader.Styled';

const Loader = () => {
    return (
        <StyledLoader>
            <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#b6ddd8', '#b6ddd8']}
          />
        </StyledLoader>
    )
}

export default Loader;