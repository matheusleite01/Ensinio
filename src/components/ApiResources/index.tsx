import useApiResources from "./hooks/useApiResources";
import IconTrilhas from "../../../public/assets/icons/icon-trilhas";
import IconPlaylists from "../../../public/assets/icons/icon-playlistsList";
import IconFolder from "../../../public/assets/icons/icon-folder";
import * as S from "./styled";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";

const ApiResources = () => {
  const { data, loading, error } = useApiResources();

  return (
    <div>
      {loading && (
        <S.ContainerSkeleton>
          <Skeleton lines={4} spacings={10} height={16} />
          <Skeleton lines={4} spacings={10} height={16} />
          <Skeleton lines={4} spacings={10} height={16} />
        </S.ContainerSkeleton>
      )}
      {error && <ErrorMessage/>}
      { data && (
        <S.Container>
          {data.map(({ id, title, description }) => (
            <S.ListItem key={id}>
              {id === 1 && <IconTrilhas/>}
              {id === 2 && <IconPlaylists/>}
              {id === 3 && <IconFolder/>}
              <div>
                <S.Title>{title.pt}</S.Title>
                <S.Text>{description.pt}</S.Text>
              </div>
            </S.ListItem>
          ))} 
        </S.Container>
          )}
    </div>
  );
};

export default ApiResources;
