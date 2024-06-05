import Counter from "./Counter/Counter";
import GalleryInteratividade from "./Gallery/gallery";
import Toolbar from "./Toolbar/toolbar";
import Forms from "./Form/Form";
import MovingDot from "./MovingDot/MovingDot";
import Forms2 from "./Form2/Form2";
import Forms3 from "./Form3/Form3";
import List from "./List/List";
import List2 from "./List2/List2";
import ShapeEditor from "./ShapeEditor/ShapeEditor";
import CounterList from "./CounterList/CounterList";
import List3 from "./List3/List3";
import List4 from "./List4/List4";
import ShapeEditor2 from "./ShapeEditor2/ShapeEditor2";
import Todos from "./Todos/Todos";

export default function Interatividade() {
  return (
    <>
      <h1> Toolbar </h1>
      <br />
      <Toolbar />
      
      <br />
      <GalleryInteratividade />

      <br />
      <Counter />

      <br />
      <Forms />

      <br />
      <Forms2 />

      <br />
      <Forms3 />

      <br />
      <List />

      <br />
      <List2 />

      <br />
      <ShapeEditor />

      <br />
      <CounterList />

      <br />
      <List3 />

      <br />
      <List4 />

      <br />
      <ShapeEditor2 />

      <br />
      <Todos />

      <br />
      <MovingDot />
    </>
  );
}
