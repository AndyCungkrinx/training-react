import React from 'react';
import { useSelector } from 'react-redux';
import Register from './Register';
import Home from '../../../pages/home';

const UserComponents = () => {
    const data = useSelector(state => state.user);
    const [openRegister, setOpen] = React.useState(false);
    console.log(window.location);
    return (
        <>
            {
                data.user === null ? 
                    openRegister ? 
                    (<Register setOpen={setOpen} />)
                    :
                    (<Register setOpen={setOpen} />)
                : 
                (<Home />)
            }
        </>
    )
}

export default UserComponents;

