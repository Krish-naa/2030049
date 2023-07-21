import MainPage from "./pages/Main";

export default function App() {
  return (
    <div className="h-screen w-screen main-bg grid place-items-center">
      <div className="bg-white rounded-md h-full sm:h-[90%] w-full sm:w-[80%]">
        <MainPage />
      </div>
    </div>
  );
}
