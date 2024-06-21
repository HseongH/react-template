import React from 'react';

function ComponentsIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.83333 5.83333C5.83333 5.3725 6.20667 5 6.66667 5C7.12667 5 7.5 5.3725 7.5 5.83333C7.5 6.29417 7.12667 6.66667 6.66667 6.66667C6.20667 6.66667 5.83333 6.29417 5.83333 5.83333ZM9.16667 5.83333C9.16667 5.3725 9.54 5 10 5C10.46 5 10.8333 5.3725 10.8333 5.83333C10.8333 6.29417 10.46 6.66667 10 6.66667C9.54 6.66667 9.16667 6.29417 9.16667 5.83333ZM4.16667 7.5V5C4.16667 4.54 4.54083 4.16667 5 4.16667H15C15.4592 4.16667 15.8333 4.54 15.8333 5V7.5H4.16667ZM15.8333 15C15.8333 15.46 15.4592 15.8333 15 15.8333H5C4.54083 15.8333 4.16667 15.46 4.16667 15V9.16667H15.8333V15ZM15 2.5H5C3.62167 2.5 2.5 3.62167 2.5 5V7.5V9.16667V15C2.5 16.3783 3.62167 17.5 5 17.5H15C16.3783 17.5 17.5 16.3783 17.5 15V9.16667V7.5V5C17.5 3.62167 16.3783 2.5 15 2.5Z"
      />
      <mask id="components" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16">
        <path
          fillRule="evenodd"
          clipule="evenodd"
          d="M5.83333 5.83333C5.83333 5.3725 6.20667 5 6.66667 5C7.12667 5 7.5 5.3725 7.5 5.83333C7.5 6.29417 7.12667 6.66667 6.66667 6.66667C6.20667 6.66667 5.83333 6.29417 5.83333 5.83333ZM9.16667 5.83333C9.16667 5.3725 9.54 5 10 5C10.46 5 10.8333 5.3725 10.8333 5.83333C10.8333 6.29417 10.46 6.66667 10 6.66667C9.54 6.66667 9.16667 6.29417 9.16667 5.83333ZM4.16667 7.5V5C4.16667 4.54 4.54083 4.16667 5 4.16667H15C15.4592 4.16667 15.8333 4.54 15.8333 5V7.5H4.16667ZM15.8333 15C15.8333 15.46 15.4592 15.8333 15 15.8333H5C4.54083 15.8333 4.16667 15.46 4.16667 15V9.16667H15.8333V15ZM15 2.5H5C3.62167 2.5 2.5 3.62167 2.5 5V7.5V9.16667V15C2.5 16.3783 3.62167 17.5 5 17.5H15C16.3783 17.5 17.5 16.3783 17.5 15V9.16667V7.5V5C17.5 3.62167 16.3783 2.5 15 2.5Z"
        />
      </mask>
      <g mask="url(#components)">
        <rect width="20" height="20" />
      </g>
    </svg>
  );
}

export default ComponentsIcon;
