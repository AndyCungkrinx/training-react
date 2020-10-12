import React from 'react';
import { Appbar} from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { List} from 'react-native-paper';
import {gql, useQuery} from '@apollo/client';
//import data from '../../components/feed/DataCategory';
const CATEGORYLIST = gql`
query{
    categoryList (filters: { }) {
        id
        name
        children{
            id
            name
        }
    }
}
`;

const Category = ({ navigation }) => {
    const {loading, error, data} = useQuery(CATEGORYLIST);
    if (loading) {
      return null;
    } if (error) {
      return <Text>Error...</Text>;
    } 
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
                    onPress={() => navigation.navigate('ProductCategory', { category_id:  `${val.id}`, child_id:  `${child.id}`})} 
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
            <Appbar.Header style={{backgroundColor:'#f23535',}}>
                <Appbar.Content title="Category" style={{alignItems:'center'}} />
            </Appbar.Header>
            <ListCategory/>
        </ScrollView> 
    );
}

export default Category;