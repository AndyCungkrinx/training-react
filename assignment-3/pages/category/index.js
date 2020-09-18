import { useQuery, gql } from '@apollo/client';
import ErrorAlert from '../../components/error';
import Navigasi from '../../components/navigation';
import ErrorAlert from '../../components/error';
import {withApollo} from '../../lib/apollo';

const CATEGORY_LIST = gql`
  {
    categoryList(filters:{}) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
  }
`;

function Category(props) {
  const response = useQuery(CATEGORY_LIST);
  console.log(response)
  const { loading, error, data } = response;
  if (loading) {
    return null;
  }  if (error) {
    return <div><ErrorAlert/> </div>;
  }  
  const category = data.categoryList;
  return (
    <div>
      <Navigasi />
    </div>
  )
}

export default withApollo({ ssr: true })(Category);