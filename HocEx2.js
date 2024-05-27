// HOC is actually a function which accepts Component as parameter and returns Component with additional functionality

function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}
 
const Button = (props) => <button {...props}>Click me!</button>
const Text = (props) => <p {...props}>Hello World!</p>
 
const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
