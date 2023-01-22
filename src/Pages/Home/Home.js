
import { useContext } from 'react';
import { MyContext } from '../Contex/AuthProvider';
import NavigationBar from '../Shared/NavigationBar';
import OurBlogs from './OurBlogs';

const Home = () => {
    const { user } = useContext(MyContext);
    console.log(user);
    return (
        <div>
            <NavigationBar />
            <OurBlogs />

        </div>
    );
};

export default Home;