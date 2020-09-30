import React from 'react';
import { Appbar} from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { List} from 'react-native-paper';
import data from '../../components/feed/DataCategory';

const Category = ({ navigation }) => {
    const category = data.categoryList;
    //console.log(category);
    const ListCategory = () => {
        return(
        <>
        {category.map((val) => {
            return (
            <List.AccordionGroup key={val.id}>
                <List.Accordion title={val.name} id={val.id}>
                {val.children.map((child,index) => (
                <View key={child.id} style={{ flex: 1 }}>
                    <List.Item 
                    title={child.name} 
                    left={props => <List.Icon {...props} icon="chart-bubble" key={index+1} />}
                    onPress={() => navigation.navigate('ProductCategory', { category_id: `${val.id}`, child_id:  `${child.id}`})} 
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
        <ScrollView> 
            <Appbar.Header style={{backgroundColor:'#ff7c2b',}}>
                <Appbar.Content title="Category" style={{alignItems:'center'}} />
            </Appbar.Header>
            <ListCategory/>
        </ScrollView> 
    );
}

export default Category;