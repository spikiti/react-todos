import { Button } from "@blueprintjs/core";

import TodoInput from "./TodoInput";
import { toggleAllTodos } from "../store";

const Header = () => {
  return (
    <header>
      <h1>Todos</h1>
      <div className="flex gap-1">
        <Button icon="tick" onClick={toggleAllTodos} />
        <TodoInput />
      </div>
    </header>
  );
};

export default Header;
