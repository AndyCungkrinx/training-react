import React from 'react';
import { Appbar} from 'react-native-paper';
import { FlatList, View } from 'react-native';
import { List} from 'react-native-paper';
import data from '../../components/feed/CategoryList';

const Category = ({ navigation }) => {
    const category = data.categoryList;
    //console.log(category);
    const renderItem = () => {
        return(
        <>
        {category.map((val) => {
            return (
            <List.AccordionGroup key={val.id}>
                <List.Accordion title={val.name} id={val.id}>
                {val.children.map((children,index) => (
                <View key={children.id} style={{ flex: 1 }}>
                    <List.Item 
                    title={children.name} 
                    left={props => <List.Icon {...props} icon="chart-bubble" key={index+1} />}
                    onPress={() => navigation.navigate('ProductCategory', { id: `${val.id}` })} 
                    />
                </View>
                ))}
                </List.Accordion>
            </List.AccordionGroup>
            );
        })}
        </>
        );
    }
    return (
    <>
        <Appbar.Header>
          <Appbar.Content title="Category" style={{alignItems:'center'}} />
        </Appbar.Header>
        <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={(children) => children.id.toString()}
        />
    </>
    );
}

export default Category;