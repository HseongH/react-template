import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import UIIcons from '@/pages/components/icons/Icons';
import UINotifications from '@/pages/notifications/Notifications';
import TablesStatic from '@/pages/tables/static/Static';
import MapsGoogle from '@/pages/components/maps/google/Google';
import CoreTypography from '@/pages/typography/Typography';
import Charts from '@/pages/components/charts/Charts';
import Dashboard from '@/pages/dashboard/Dashboard';

import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory';
import { openSidebar, closeSidebar } from '@/actions/navigation';
import s from './Layout.module.scss';

function Layout({ sidebarStatic, sidebarOpened, sidebarVisibility }) {
  const [chatOpen, setChatOpen] = React.useState(false);
  const handleSwipe = (e) => {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !chatOpen) {
        dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && sidebarOpened) {
        dispatch(closeSidebar());
        return;
      }

      setChatOpen(e.direction === 2);
    }
  };

  return (
    <div className={[s.root, 'sidebar-' + sidebarPosition, 'sidebar-' + sidebarVisibility].join(' ')}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
            <BreadcrumbHistory url={location.pathname} />
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={200}>
                <Switch>
                  <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                  <Route path="/app/main/dashboard" exact component={Dashboard} />
                  <Route path="/app/components/icons" exact component={UIIcons} />
                  <Route path="/app/notifications" exact component={UINotifications} />
                  <Route path="/app/components/charts" exact component={Charts} />
                  <Route path="/app/tables" exact component={TablesStatic} />
                  <Route path="/app/components/maps" exact component={MapsGoogle} />
                  <Route path="/app/typography" exact component={CoreTypography} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <footer className={s.contentFooter}>
              Light Blue React Template - React admin template made by <a href="https://flatlogic.com">Flatlogic</a>
            </footer>
          </main>
        </Hammer>
      </div>
    </div>
  );
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

Layout.propTypes = {
  sidebarStatic: PropTypes.bool,
  sidebarOpened: PropTypes.bool,
};

Layout.defaultProps = {
  sidebarStatic: false,
  sidebarOpened: false,
};

export default withRouter(connect(mapStateToProps)(Layout));
