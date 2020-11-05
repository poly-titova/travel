import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const StackNavigatorOptions = {
    headershown : false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
},
{
    defaultNavigationOptions:StackNavigatorOptions
});

export default createAppContainer(AppNavigator)