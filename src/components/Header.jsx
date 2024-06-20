import { faArrowRight, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Image, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar>
      <Nav>
        <Dropdown>
          <Dropdown.Toggle>
            <FontAwesomeIcon icon={faComment} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="messages">
            <Dropdown.Item className="message">
              <Image src="img/1.jpg" alt="123" />

              <div className="details">
                <div className="sender">Jane Hew</div>
                <div className="text">Hey, John! How is it going? ...</div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item className="message">
              <Image src="img/2.jpg" alt="123" />

              <div className="details">
                <div className="sender">Alies Rumiancaŭ</div>
                <div className="text">I&apos;ll definitely buy this template</div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item className="message">
              <Image src="img/3.jpg" alt="123" />

              <div className="details">
                <div className="sender">Michał Rumiancaŭ</div>
                <div className="text">Is it really Lore ipsum? Lore ...</div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item className="text-aligh-center see-all">
              See all messages <FontAwesomeIcon icon={faArrowRight} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
