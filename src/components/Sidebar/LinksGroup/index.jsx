import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'react-bootstrap';
import { Route } from 'react-router';
import classnames from 'classnames';

import s from './LinksGroup.module.scss';

function LinksGroup({
  header,
  link,
  childrenLinks,
  iconName,
  className,
  badge,
  label,
  activeItem,
  isHeader,
  index,
  deep,
  onActiveSidebarItemChange,
  labelColor,
  exact,
}) {
  const [headerLinkWasClicked, setHeaderLinkWasClicked] = React.useState(true);
  const togglePanelCollapse = (link, e) => {
    onActiveSidebarItemChange(link);
    setHeaderLinkWasClicked(!headerLinkWasClicked || (activeItem && !activeItem.includes(index)));
    e.preventDefault();
  };

  const isOpen = activeItem && activeItem.includes(index) && headerLinkWasClicked;

  if (!childrenLinks) {
    if (isHeader) {
      return (
        <li className={[s.headerLink, className].join(' ')}>
          <NavLink to={link} activeClassName={s.headerLinkActive} exact={exact} target={target}>
            <span className={s.icon}>{iconName}</span>
            {header} {label && <sup className={`${s.headerLabel} text-${labelColor || 'warning'}`}>{label}</sup>}
            {badge && (
              <Badge className={s.badge} color="primary" pill>
                9
              </Badge>
            )}
          </NavLink>
        </li>
      );
    }
    return (
      <li>
        <NavLink
          to={link}
          activeClassName={s.headerLinkActive}
          style={{ paddingLeft: `${50 + 10 * (deep - 1)}px` }}
          onClick={(e) => {
            // able to go to link is not available(for Demo)
            if (link.includes('menu')) {
              e.preventDefault();
            }
          }}
          exact={exact}
        >
          {header} {label && <sup className={`${s.headerLabel} text-${labelColor || 'warning'}`}>{label}</sup>}
        </NavLink>
      </li>
    );
  }
  /* eslint-disable */
  return (
    <Route
      path={link}
      children={(params) => {
        const { match } = params;
        return (
          <li className={classnames({ [s.headerLink]: isHeader }, className)}>
            <a
              className={classnames(
                s.accordionToggle,
                { [s.headerLinkActive]: match },
                { [s.collapsed]: isOpen },
                'd-flex',
              )}
              style={{ paddingLeft: `${deep == 0 ? 10 : 35 + 10 * (deep - 1)}px` }}
              onClick={(e) => togglePanelCollapse(link, e)}
              href="#"
            >
              {isHeader ? <span className={s.icon}>{iconName}</span> : null}
              {header} {label && <sup className={`${s.headerLabel} text-${labelColor || 'warning'} ml-1`}>{label}</sup>}
              <b className={['fa fa-angle-right', s.caret].join(' ')} />
            </a>
            {/* eslint-enable */}
            <Collapse className={s.panel} isOpen={isOpen}>
              <ul>
                {childrenLinks &&
                  childrenLinks.map((child, ind) => (
                    <LinksGroup
                      onActiveSidebarItemChange={onActiveSidebarItemChange}
                      activeItem={activeItem}
                      header={child.header}
                      link={child.link}
                      index={child.index}
                      childrenLinks={child.childrenLinks}
                      deep={deep + 1}
                      key={ind} // eslint-disable-line
                    />
                  ))}
              </ul>
            </Collapse>
          </li>
        );
      }}
    />
  );
}

LinksGroup.propTypes = {
  header: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  childrenLinks: PropTypes.array,
  iconName: PropTypes.object,
  className: PropTypes.string,
  badge: PropTypes.string,
  label: PropTypes.string,
  activeItem: PropTypes.string,
  isHeader: PropTypes.bool,
  index: PropTypes.string,
  deep: PropTypes.number,
  onActiveSidebarItemChange: PropTypes.func,
  labelColor: PropTypes.string,
  exact: PropTypes.bool,
};

LinksGroup.defaultProps = {
  link: '',
  childrenLinks: null,
  header: '',
  className: '',
  isHeader: false,
  deep: 0,
  activeItem: '',
  label: '',
  exact: true,
};

export default withRouter(LinksGroup);
