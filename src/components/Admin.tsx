import CardList from "./CardList";

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
