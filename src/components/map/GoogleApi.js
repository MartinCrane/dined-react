<script type='text/javascript' src='config.js'></script>
<script type='text/javascript' src='script.js></script>'

var googleapi = config.GOOGLE_API;

debugger

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey:
})
