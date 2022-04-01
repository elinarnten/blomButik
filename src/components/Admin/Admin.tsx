import CardList from "../Product/CardList";
interface Props {
  hideShow: Boolean;
}

export default function Admin(props: Props) {
  return (
    <>
      <CardList hideShow={true}></CardList>
    </>
  );
}
