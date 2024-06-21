import React from 'react';
import { ListGroup, ListGroupItem, ProgressBar, Tooltip } from 'react-bootstrap';

import s from './ListGroup.module.scss'; // eslint-disable-line

function ProgressDemo() {
  return (
    <ListGroup className={[s.listGroup, 'thin-scroll'].join(' ')}>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">60%</span>
        <h6 className="m-0 mb-1">
          <strong>Urgent:</strong>
          &nbsp;Rails 4.1.0 upgrade
        </h6>
        <ProgressBar className={['m-0'].join(' ')} variant="primary" now="60" />
        <span className="help-block">3 notes added by James 2h ago...</span>
      </ListGroupItem>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">83%</span>
        <h6 className="m-0 mb-1">
          <strong>Primary:</strong>
          &nbsp;Light Blue App
        </h6>
        <ProgressBar className={['progress-sm', 'm-0'].join(' ')} variant="success" now="83" />
        <span className="help-block">verifying stable probability status</span>
      </ListGroupItem>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">44%</span>
        <h6 className="m-0 mb-1">
          <span className="circle bg-gray-dark text-warning" id="TooltipQuestion">
            <i className="fa fa-question" />
          </span>
          <Tooltip placement="bottom" target="TooltipQuestion">
            2 issues require your attention
          </Tooltip>
          &nbsp; Finish The Road to Hell Song
        </h6>
        <ProgressBar className={['progress-sm', 'm-0'].join(' ')} variant="gray-dark" now="44" />
        <span className="help-block">last update: 2h ago</span>
      </ListGroupItem>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">86%</span>
        <h6 className="m-0 mb-1">Complete project planning</h6>
        <ProgressBar className={['progress-xs', 'm-0'].join(' ')} variant="danger" now="86" />
        <span className="help-block">no, no way this is not working...</span>
      </ListGroupItem>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">100%</span>
        <h6 className="m-0 mb-1">
          <strong>Completed:</strong>
          &nbsp;Instruct newbies on coding standards
        </h6>
        <ProgressBar className={['progress-xs', 'm-0'].join(' ')} variant="primary" now="100" />
        <span className="help-block">last update: April 22, 2014 2:36 pm</span>
      </ListGroupItem>
    </ListGroup>
  );
}

export default ProgressDemo;
