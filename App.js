import React, {useState} from 'react';
// import {mapping, dark} from '@eva-design/eva';
// import {ApplicationProvider, Layout, Text, IconRegistry} from 'react-native-ui-kitten';
// import {Provider as ReduxProvider} from 'react-redux';

// import SplashScreen from './src/features/SplashScreen';
// import {store} from './src/redux/store';
// import NavigatorProvider from './src/navigator/mainNavigator';
// import {setupHttpConfig} from './src/utils/http';
// import {crowdboticsTheme} from './src/config/crowdboticsTheme';
// import * as NavigationService from './src/navigator/NavigationService';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text>You clicked {count} times.</Text>
			<Button
				onPress={() => setCount(count + 1)}
				title="Click me"
				color="red"
				accessibilityLabel="Click this button to increase count"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

// export default App;

// export default class App extends React.Component {
//   state = {
//     isLoaded: false,
//   };

//   async componentWillMount() {
//     /**
//      * add any aditional app config here,
//      * don't use blocking requests here like HTTP requests since they block UI feedback
//      * create HTTP requests and other blocking requests using redux saga
//      */
//     await this.loadAssets();
//     setupHttpConfig();
//   }

//   componentDidMount() {
//     /**
//      * Read above commments above adding async requests here
//      */
//     NavigationService.setNavigator(this.navigator);
//   }

//   loadAssets = async () => {
//     // add any loading assets here
//     this.setState({isLoaded: true});
//   };

//   renderLoading = () => (
//     <Layout style={[styles.flex]}>
//       <Text>Loading</Text>
//     </Layout>
//   );

//   renderApp = () => (
//     <ReduxProvider store={store}>
//       <IconRegistry icons={EvaIconsPack}/>
//       <ApplicationProvider mapping={mapping} theme={crowdboticsTheme}>
//         <NavigatorProvider
//           style={[styles.flex]}
//           ref={nav => {
//             this.navigator = nav;
//           }}>
//           <Layout style={[styles.flex]}>
//             <SplashScreen />
//           </Layout>
//         </NavigatorProvider>
//       </ApplicationProvider>
//     </ReduxProvider>
//   );

//   render = () =>
//     this.state.isLoaded ? this.renderApp() : this.renderLoading();
//   render = () => {

//   };
// }

//const styles = {flex: {flex: 1}};
