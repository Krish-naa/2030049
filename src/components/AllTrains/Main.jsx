export default function Main(props) {
  // get data from api function and store it in a variable
  return (
    <div className="m-2 min-w-[350px]">
      <div className="border-2 p-1 rounded border-gray-300">
        <div
          className="flex justify-between items-center px-4 border-b-2 cursor-pointer"
          onClick={() => props.getSTrain("Chennai train")}
        >
          <div className="text-xl font-semibold">Chennai Exp</div>
          <div className="text-md font-semibold">2344</div>
        </div>
        <div className="flex justify-between px-2 mt-2">
          <div>
            <div>
              <span className="text-base font-medium">Departure Time : </span>
              <span>21:35:00</span>
            </div>
            <div>
              <span className="text-base font-medium">Delayed By:</span> 15
            </div>
          </div>
          <div>
            <span className="text-base font-medium">Seats Avaliable :</span>
            <br />
            <div className="flex justify-between">
              <div>Sleeper: 2</div>
              <div>AC: 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
