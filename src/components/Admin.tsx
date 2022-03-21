import CardList from "./CardList"
import AddProduct from './AddProduct'
interface Props {
  hideShow: Boolean;
}

export default function Admin(props:Props){
  return (
      <>
        
      <CardList hideShow={true}></CardList>
      </>
    );

}