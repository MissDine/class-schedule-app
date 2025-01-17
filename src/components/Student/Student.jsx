import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import "./student.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Student() {
  return (
    <>
      <Container className='contai'>
        <Row>
        <Col sm={8}>
        <h1 className='col mt-0'>
          hello <span>User</span>
        </h1>
        </Col>
        <Col sm={4}>
        <div className="user mt-0">
        <img
          src="https://img.icons8.com/metro/2x/user-male-circle.png"
          alt="User"
        />
        <a href="#edit">Edit</a>
        </div>
        </Col>
        </Row>
      </Container>
      <div className="search">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input 
              type="search"
              id="default-search"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search available sessions..."
              required
            />
      
          </div>
        </form>
      </div>
      <div className="sidebar">
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Announcements</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="cards">
        <Card>
          <Card.Body>
          <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/2x/external-video-user-interface-anggara-flat-anggara-putra-3.png" alt="Video" />
          <div className="stu">
          <blockquote className="blockquote mb-0">
              <h1>
                {" "}
                Thursday Speaker Series{" "}
              </h1>
              <p>16:00pm</p>
              
            </blockquote>
            <div className="rea">
            <div className="like">
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/2x/external-Like-vote-and-reward-those-icons-lineal-those-icons.png" alt="like" />
            </div>
            <div className="comment">
            <img src="https://img.icons8.com/windows/2x/comments.png" alt="comment" />
            </div>
            </div>
          </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/2x/external-video-user-interface-anggara-flat-anggara-putra-3.png" alt="Video" />
          <div className="stu">
          <blockquote className="blockquote mb-0">
              <h1>
                {" "}
                Thursday Speaker Series{" "}
              </h1>
              <p>16:00pm</p>
              
            </blockquote>
            <div className="rea">
            <div className="like">
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/2x/external-Like-vote-and-reward-those-icons-lineal-those-icons.png" alt="like" />
            </div>
            <div className="comment">
            <img src="https://img.icons8.com/windows/2x/comments.png" alt="comment" />
            </div>
            </div>
          </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/2x/external-video-user-interface-anggara-flat-anggara-putra-3.png" alt="Video" />
          <div className="stu">
          <blockquote className="blockquote mb-0">
              <h1>
                {" "}
                Thursday Speaker Series{" "}
              </h1>
              <p>16:00pm</p>
              
            </blockquote>
            <div className="rea">
            <div className="like">
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/2x/external-Like-vote-and-reward-those-icons-lineal-those-icons.png" alt="like" />
            </div>
            <div className="comment">
            <img src="https://img.icons8.com/windows/2x/comments.png" alt="comment" />
            </div>
            </div>
          </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Student