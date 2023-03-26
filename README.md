  <h1>NRC Form Library Documentation</h1>
  <h2>Introduction</h2>
  <p>The NRC Form library is a React component that provides an input form for Myanmar National Registration Card (NRC) numbers. The component allows users to select the NRC code, place, type, and enter the NRC number in a standardized format.</p>
 
  <h2>Thanks</h2>
  <p>Thanks for this nrc data repository <a href='https://github.com/htetoozin/Myanmar-NRC/blob/master/nrc.json'>https://github.com/htetoozin/Myanmar-NRC/blob/master/nrc.json</a><br/>
  I used this data to make my nrc package.</p>
  
  <h2>Usage</h2>
  <p>To use the NRC Form library, follow these steps:</p>
  <ol>
    <li>Install the library via npm:</li>
    <pre><code>npm install react-mm-nrc-form</code></pre>
    <li>Import the library in your React component:</li>
    <pre><code>import NRCForm from "react-mm-nrc-form";</code></pre>
    <li>Use the component in your JSX:</li>
    <pre><code>&lt;NRCForm /&gt;</code></pre>
  </ol>
  <h2>Props</h2>
  <p>The NRC Form component accepts the following props:</p>
  <table>
    <tr>
      <th>Prop Name</th>
      <th>Data Type</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    <tr>
      <td>NRCCodeSelect</td>
      <td>number</td>
      <td>The currently selected NRC code</td>
      <td>1</td>
    </tr>
    <tr>
      <td>setNRCCodeSelect</td>
      <td>function</td>
      <td>A callback function to update the selected NRC code</td>
      <td>null</td>
    </tr>
    <tr>
      <td>NRCPlaceSelect</td>
      <td>string</td>
      <td>The currently selected NRC place</td>
      <td>null</td>
    </tr>
    <tr>
      <td>setNRCPlaceSelect</td>
      <td>function</td>
      <td>A callback function to update the selected NRC place</td>
      <td>null</td>
    </tr>
    <tr>
      <td>NRCTypeSelect</td>
      <td>string</td>
      <td>The currently selected NRC type</td>
      <td>null</td>
    </tr>
    <tr>
      <td>setNRCTypeSelect</td>
      <td>function</td>
      <td>A callback function to update the selected NRC type</td>
      <td>null</td>
    </tr>
    <tr>
      <td>NRCCode</td>
      <td>string</td>
      <td>The NRC number entered by the user</td>
      <td>null</td>
    </tr>
    <tr>
      <td>setNRCCode</td>
      <td>function</td>
      <td>A callback function to update the NRC number entered by the user</td>
      <td>null</td>
    </tr>
    <tr>
      <td>language</td>
      <td>string</td>
      <td>The language in which to display the NRC code, place, and type options ("en" for English, "mm" for Myanmar and "all" for both
      </td>
      <td>All</td
      </tr>
      </table>
    <h2>  Example:</h2>
<p>Here is an example of using the NRCForm component with default props:</p>


```js
import React from "react";
import NRCForm from "myanmar-nrc-format";

const App = () => {
  const [NRCCodeSelect, setNRCCodeSelect] = useState();
  const [NRCPlaceSelect, setNRCPlaceSelect] = useState();
  const [NRCTypeSelect, setNRCTypeSelect] = useState();
  const [NRCCode, setNRCCode] = useState();

  return (
    <div className="App">
      <NRCForm  
          NRCCodeSelect={NRCCodeSelect}
          setNRCCodeSelect={setNRCCodeSelect}
          NRCPlaceSelect={NRCPlaceSelect}
          setNRCPlaceSelect={setNRCPlaceSelect}
          NRCTypeSelect={NRCTypeSelect}
          setNRCTypeSelect={setNRCTypeSelect}
          NRCCode={NRCCode}
          setNRCCode={setNRCCode} 
          language={"mm"}
      />
     </div>
  );
};
```

<p>
The NRCForm component provided by this npm library can be used to input and validate Myanmar National Registration Card (NRC) numbers in a React project. It can be customized with various props to suit different needs.
      </p>
