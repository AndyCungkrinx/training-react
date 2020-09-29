import * as React from 'react';
import { Drawer, Appbar } from 'react-native-paper';

const SideMenu = ({navigation}) => {
    const [active, setActive] = React.useState('');
    return (
    <>
        <Appbar.Header>
            <Appbar.Content title="Menu" style={{alignItems:'center'}}/>
        </Appbar.Header>
        <Drawer.Section>
            <Drawer.Item
            label="First Item"
            active={active === 'first'}
            onPress={() => setActive('first')}
            />
            <Drawer.Item
            label="Second Item"
            active={active === 'second'}
            onPress={() => setActive('second')}
            />
        </Drawer.Section>
    </>
    );
};

export default SideMenu;