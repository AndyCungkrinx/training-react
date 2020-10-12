export default {
    items: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ],
    itemsMany: () => {
      let data = [];
      let i = 0;
      while (i < 1000) {
        data.push({title: 'Item ke ' + i});
        i++;
      }
  
      return data;
    },
  };
  