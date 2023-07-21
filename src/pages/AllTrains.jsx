import Main from "../components/AllTrains/Main";

export default function AllTrains(props) {
  return (
    <div className="flex flex-wrap justify-center md:justify-normal">
      <Main getSTrain={(trn) => props.getSTrain(trn)} />
      <Main getSTrain={(trn) => props.getSTrain(trn)} />
    </div>
  );
}
