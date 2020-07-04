import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Points from '../pages/Points';
import Point from '../pages/Point';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/Maria-Role/" exact component={Home} />
        <Route path="/Maria-Role/points" component={Points} />
        <Route path="/Maria-Role/point" component={Point} />
    </Switch>
);

export default Routes;