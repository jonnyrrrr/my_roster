import CreatPlayer from "./componets/CreatPlayer";
import UpdateRoster from "./componets/UpdateRoster";
import DeletePlayer from "./componets/DeletePlayer";
import RosterList from "./componets/RosterList";

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <CreatPlayer/>
      <RosterList/>
      <UpdateRoster/>
      <DeletePlayer/>
    </div>
  );
}

export default App;
