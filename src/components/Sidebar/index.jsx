import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProgressBar, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '@/actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import { changeActiveSidebarItem } from '@/actions/navigation';
import { logoutUser } from '@/actions/user';
import HomeIcon from '../Icons/SidebarIcons/HomeIcon';
import TypographyIcon from '../Icons/SidebarIcons/TypographyIcon';
import TablesIcon from '../Icons/SidebarIcons/TablesIcon';
import NotificationsIcon from '../Icons/SidebarIcons/NotificationsIcon';
import ComponentsIcon from '../Icons/SidebarIcons/ComponentsIcon';

import { useDispatch } from 'react-redux';

function Sidebar({ sidebarStatic, sidebarOpened, dispatch, activeItem, location }) {
  const dispatch = useDispatch();

  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const element = elementRef.current;

    const handleTransitionEnd = () => {
      if (sidebarOpened) {
        element.classList.add(s.sidebarOpen);
      }
    };

    element.addEventListener('transitionend', handleTransitionEnd, false);

    return () => {
      element.removeEventListener('transitionend', handleTransitionEnd, false);
    };
  }, [sidebarOpened]);

  React.useEffect(() => {
    const element = elementRef.current;

    if (sidebarOpened) {
      element.style.height = `${element.scrollHeight}px`;
    } else {
      element.classList.remove(s.sidebarOpen);
      setTimeout(() => {
        element.style.height = '';
      }, 0);
    }
  }, [sidebarOpened]);

  const doLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={cx(s.root)} ref={elementRef}>
      <header className={s.logo}>
        <a href="https://demo.flatlogic.com/light-blue-react/">
          Light <span className="fw-bold">Blue</span>
        </a>
      </header>

      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) => dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={activeItem}
          header="Dashboard"
          isHeader
          iconName={<HomeIcon className={s.menuIcon} />}
          link="/app/main"
          index="main"
        />
        <h5 className={[s.navTitle, s.groupTitle].join(' ')}>TEMPLATE</h5>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) => dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={activeItem}
          header="Typography"
          isHeader
          iconName={<TypographyIcon className={s.menuIcon} />}
          link="/app/typography"
          index="core"
        />
        <LinksGroup
          onActiveSidebarItemChange={(t) => dispatch(changeActiveSidebarItem(t))}
          activeItem={activeItem}
          header="Tables Basic"
          isHeader
          iconName={<TablesIcon className={s.menuIcon} />}
          link="/app/tables"
          index="tables"
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) => dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={activeItem}
          header="Notifications"
          isHeader
          iconName={<NotificationsIcon className={s.menuIcon} />}
          link="/app/notifications"
          index="ui"
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) => dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={activeItem}
          header="Components"
          isHeader
          iconName={<ComponentsIcon className={s.menuIcon} />}
          link="/app/components"
          index="components"
          childrenLinks={[
            {
              header: 'Charts',
              link: '/app/components/charts',
            },
            {
              header: 'Icons',
              link: '/app/components/icons',
            },
            {
              header: 'Maps',
              link: '/app/components/maps',
            },
          ]}
        />
      </ul>
      <h5 className={s.navTitle}>
        LABELS
        {/* eslint-disable-next-line */}
      </h5>
      {/* eslint-disable */}
      <ul className={s.sidebarLabels}>
        <li>
          <a href="#">
            <i className="fa fa-circle text-success mr-2" />
            <span className={s.labelName}>My Recent</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle text-primary mr-2" />
            <span className={s.labelName}>Starred</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle text-danger mr-2" />
            <span className={s.labelName}>Background</span>
          </a>
        </li>
      </ul>
      {/* eslint-enable */}
      <h5 className={s.navTitle}>PROJECTS</h5>
      <div className={s.sidebarAlerts}>
        {alertsList.map(
          (
            alert, // eslint-disable-line
          ) => (
            <Alert
              key={alert.id}
              className={s.sidebarAlert}
              color="transparent"
              isOpen={true} // eslint-disable-line
              toggle={() => {
                dispatch(dismissAlert(alert.id));
              }}
            >
              <span>{alert.title}</span>
              <br />
              <ProgressBar className={`bg-subtle-blue progress-xs mt-1`} variant={alert.color} now={alert.value} />
              <span className={s.alertFooter}>{alert.footer}</span>
            </Alert>
          ),
        )}
      </div>
    </nav>
  );
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

Sidebar.propTypes = {
  sidebarStatic: PropTypes.bool,
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Sidebar.defaultProps = {
  sidebarStatic: false,
  activeItem: '',
};

export default withRouter(connect(mapStateToProps)(Sidebar));
