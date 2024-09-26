import HomeIcon from '../icons/HomeIcon.assets';
import {_bottomTabInterface} from '../../nav-routes/bottom-tab/interface';
import {screens} from '../../nav-routes/routeName.routes';
import Dashboard from '../../screens/dashboard/Dashboard.m';
import AddIcon from '../icons/AddIcon.assets';
import AScreen from '../../components/dummy/AScreen';
const bottomTabDropdown: _bottomTabInterface[] = [
  {
    Icon: HomeIcon,
    route: screens.dashboard,
    Component: Dashboard,
  },
  {
    Icon: AddIcon,
    route: 'ascreen',
    Component: AScreen,
  },
  // {
  //   Icon: HomeIcon,
  //   route: screens.dashboard,
  //   Component: Dashboard,
  // },
  // {
  //   Icon: CartIcon,
  //   route: screens.cart,
  //   Component: Cart,
  // },
  // {
  //   Icon: AddIcon,
  //   route: screens.addItem,
  //   Component: AddItem,
  // },
];

export {bottomTabDropdown};
