import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function BreadcrumbHistory({ url }) {
  const renderBreadCrumbs = () => {
    const route = url
      .split('/')
      .slice(1)
      .map((route) =>
        route
          .split('-')
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(' '),
      );

    const { length } = route;

    return route.map((item, index) =>
      length === index + 1 ? (
        <BreadcrumbItem key={uuidv4()} className="active">
          <strong>{item}</strong>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem key={uuidv4()}>{item}</BreadcrumbItem>
      ),
    );
  };

  return (
    <>
      {url !== '/app/chat' ? (
        <div>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            {renderBreadCrumbs()}
          </Breadcrumb>
        </div>
      ) : null}
    </>
  );
}

export default BreadcrumbHistory;
