import './Results.scss';
import JSONPretty from 'react-json-pretty';
import './Results.scss';
import JSONPrettyTheme from 'react-json-pretty';


function Results(props){
  return (
    <section>
      {
        props.loading
        ? <div>Waiting for search query OR loading...!</div>
        : <pre data-testid="results-section"><JSONPretty id="json-pretty" theme={JSONPrettyTheme} data={props.data}></JSONPretty></pre>
      }
    </section>
  );
}
export default Results;
