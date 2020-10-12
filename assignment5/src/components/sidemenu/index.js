import * as React from 'react';
import { Drawer, Appbar } from 'react-native-paper';

const SideMenu = ({navigation}) => {
    const [active, setActive] = React.useState('');
    return (
    <>
        <Appbar.Header style={{backgroundColor:'#f23535'}}>
            <Appbar.Content title="Menu" style={{alignItems:'center'}}/>
        </Appbar.Header>
        <Drawer.Section>
            <Drawer.Item
            label="First Menu"
            active={active === 'first'}
            onPress={() => setActive('first')}
            />
            <Drawer.Item
            label="Second Menu"
            active={active === 'second'}
            onPress={() => setActive('second')}
            />
        </Drawer.Section>
    </>
    );
};

export default SideMenu;