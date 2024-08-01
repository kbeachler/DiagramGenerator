import React, { Component } from "react";
import { useRouter } from 'next/router'; // handles navigation

class Home extends Component {
  render() {
    return (
      <div className="DiagramGenerator">
        <h1>Diagram Generator</h1>
        <DropdownMenu/>
      </div>
    );
  }
}

const DropdownMenu = () => {
  const router = useRouter();

  const handleChange = (event) => {
    if (event.target.value === 'strings'){
      router.push('/StringDiagram')
    }
    if (event.target.value === 'lists'){
      router.push('/ListDiagram')
    }
  };

  return (
    <select onChange={handleChange} defaultValue="">
      <option value="" disabled>Select a diagram</option>
      <option value="strings">Strings</option>
      <option value="lists">Lists</option>
    </select>
  )
}
// "export" allows you to export a single value (class, function, object, etc)
// "export" makes the "Home" component available in other files
// "default" makes it the default export
export default Home;
