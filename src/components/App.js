import { Provider } from 'react-redux';

export default React => {

  const { PropTypes } = React;
  const App = ({ store }) => (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );

  App.propTypes = {
    store: PropTypes.object.isRequired
  };

  return App;
};