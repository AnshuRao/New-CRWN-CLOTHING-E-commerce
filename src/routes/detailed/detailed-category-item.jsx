//Router-dom
import { useParams } from "react-router-dom";
//Imorted Component
import Spinner from "../../components/spinner/spinner.component";

import InformationProduct from "../../components/informationProduct/informationProduct.component";
//Component start
const DetailOfItem = ({ itemsOnSelect }) => {
  const { item } = useParams();
  const onlyWhen = () => {
    const product = itemsOnSelect.find(
      (product) => product.id == item
    );

    return <InformationProduct product={product}/>
  };

  return <div>{!itemsOnSelect ? <Spinner /> : onlyWhen()}</div>;
};

export default DetailOfItem;
