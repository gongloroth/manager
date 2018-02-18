import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" initial>
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            rightButtonTextStyle={styles.rightTextStyle}
            key="main_menu"
            component={Main}
            title="Main Menu"
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Emplyoee" />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  rightTextStyle: {
    fontSize: 20,
    color: 'red',
    margin: 5
  }
};

export default RouterComponent;
