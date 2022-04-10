//Router-dom
import { useParams } from "react-router-dom";
//Imorted Component
import Spinner from "../../components/spinner/spinner.component";

//Component start
const DetailOfItem = ({ productOnSelect }) => {
  const { item } = useParams();

  return <div>{ !productOnSelect ? <Spinner /> : <h1>{productOnSelect.find((per) => per.id == item).name}</h1>}</div>;
};

export default DetailOfItem;
