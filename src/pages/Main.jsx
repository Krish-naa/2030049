import AllTrains from "./AllTrains";

export default function MainPage() {
  const getSTrain = (trn) => {
    alert("Got the train " + trn);
  };
  return (
    <div>
      <div className="text-center text-2xl font-bold py-5 main-bg sm:bg-none">
        KIIT - Train Schedule
      </div>
      <div className="mt-4 sm:mt-0">
        <div className="px-4">
          <AllTrains getSTrain={(trn) => getSTrain(trn)} />
        </div>
      </div>
    </div>
  );
}
