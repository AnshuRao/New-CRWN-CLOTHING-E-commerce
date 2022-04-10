//SCSS
import {BackgroundImage ,BodyText, DirectoryItemsContainer} from './directory-item.style.jsx';
//Router-Dom 
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category}) => {
  const { imageUrl, title ,route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = ()=>{
    return navigate(`shop/${title}`)
  }
  return (
    <DirectoryItemsContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}
      />
      <BodyText>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </BodyText>
    </DirectoryItemsContainer>
  );
};

export default DirectoryItem;